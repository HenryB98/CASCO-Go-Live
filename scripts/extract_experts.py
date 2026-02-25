from __future__ import annotations

import hashlib
import io
import json
import sys
from pathlib import Path

from PIL import Image
from pypdf import PdfReader


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def score_candidate(width: int, height: int, page: int) -> tuple[int, int, int]:
    ratio = width / max(height, 1)
    portrait_match = 1 if 0.55 <= ratio <= 0.95 else 0
    area = width * height
    return (portrait_match, area, -page)


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: extract_experts.py <source_pdf> <output_dir>")
        return 1

    source_pdf = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])

    if not source_pdf.exists():
        print(f"PDF not found: {source_pdf}")
        return 1

    raw_dir = output_dir / "raw"
    ensure_dir(output_dir)
    ensure_dir(raw_dir)

    reader = PdfReader(str(source_pdf))

    seen_hashes: set[str] = set()
    extracted = []

    for page_index, page in enumerate(reader.pages, start=1):
        images = list(page.images)
        for image_index, image_file in enumerate(images, start=1):
            image_bytes = image_file.data
            ext = Path(image_file.name).suffix.lstrip(".").lower() or "png"
            if ext == "jp2":
                ext = "jpg"

            if not image_bytes:
                continue

            digest = hashlib.md5(image_bytes).hexdigest()
            if digest in seen_hashes:
                continue
            seen_hashes.add(digest)

            try:
                img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
            except Exception:
                continue

            width, height = img.size
            if width < 180 or height < 180:
                continue

            raw_name = f"p{page_index:02d}_img{image_index:02d}_{width}x{height}.{ext}"
            raw_path = raw_dir / raw_name
            img.save(raw_path)

            extracted.append(
                {
                    "page": page_index,
                    "index": image_index,
                    "width": width,
                    "height": height,
                    "ratio": round(width / max(height, 1), 3),
                    "rawPath": str(raw_path),
                    "score": score_candidate(width, height, page_index),
                }
            )

    if not extracted:
        print("No usable images extracted from PDF.")
        return 1

    candidates = sorted(extracted, key=lambda item: item["score"], reverse=True)

    selected = []
    for item in candidates:
        ratio = item["width"] / max(item["height"], 1)
        if 0.5 <= ratio <= 1.0 and item["height"] >= 300:
            selected.append(item)
        if len(selected) == 7:
            break

    if len(selected) < 7:
        for item in candidates:
            if item in selected:
                continue
            selected.append(item)
            if len(selected) == 7:
                break

    final_records = []
    for idx, item in enumerate(selected, start=1):
        src = Path(item["rawPath"])
        out_name = f"expert-{idx}.jpg"
        out_path = output_dir / out_name

        img = Image.open(src).convert("RGB")
        img.save(out_path, format="JPEG", quality=90, optimize=True)

        final_records.append(
            {
                "expert": idx,
                "file": out_name,
                "sourcePage": item["page"],
                "width": item["width"],
                "height": item["height"],
                "ratio": item["ratio"],
            }
        )

    manifest_path = output_dir / "experts-manifest.json"
    manifest_path.write_text(json.dumps(final_records, indent=2), encoding="utf-8")

    print(f"Extracted {len(extracted)} images. Selected {len(final_records)} experts.")
    for row in final_records:
        print(
            f"Expert {row['expert']}: {row['file']} "
            f"(page {row['sourcePage']}, {row['width']}x{row['height']}, ratio {row['ratio']})"
        )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
