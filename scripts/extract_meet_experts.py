from __future__ import annotations

from pathlib import Path
import io
import json

import cv2
import numpy as np
from pypdf import PdfReader
from PIL import Image, ImageOps

PDF_PATH = Path(r"C:/Users/henry/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/ABB8E496ED310CEE019D427DDC96DF521A617581/transfers/2026-08/CASCO PROFILE 2025.pdf")
OUT_DIR = Path(r"C:/Users/henry/Downloads/CASCO (Go Live)/public/experts")

# Pages and indices to use from Meet Our Experts pages (excluding large page composites)
TARGETS = [
    (6, 2),
    (6, 3),
    (6, 4),
    (7, 2),
    (7, 3),
    (7, 4),
    (7, 5),
]

ROTATION_OVERRIDES = {
    3: 180,
    5: 180,
}

FACE_CASCADE = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")


def face_score(pil_image: Image.Image) -> int:
    bgr = cv2.cvtColor(np.array(pil_image.convert("RGB")), cv2.COLOR_RGB2BGR)
    gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY)
    faces = FACE_CASCADE.detectMultiScale(gray, scaleFactor=1.08, minNeighbors=4, minSize=(30, 30))
    return int(len(faces))


def choose_orientation(image: Image.Image) -> tuple[Image.Image, int]:
    normal = image
    rotated = image.rotate(180, expand=True)

    try:
        normal_score = face_score(normal)
        rotated_score = face_score(rotated)
    except Exception:
        normal_score = 0
        rotated_score = 0

    if rotated_score > normal_score:
        return rotated, 180
    return normal, 0


def main() -> int:
    if not PDF_PATH.exists():
        print(f"PDF not found: {PDF_PATH}")
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    reader = PdfReader(str(PDF_PATH))
    results = []

    for output_index, (page_num, image_index) in enumerate(TARGETS, start=1):
        page = reader.pages[page_num - 1]
        images = list(page.images)
        if image_index < 1 or image_index > len(images):
            print(f"Skipping page {page_num} image {image_index}: out of range")
            continue

        image_file = images[image_index - 1]
        pil_image = Image.open(io.BytesIO(image_file.data))
        pil_image = ImageOps.exif_transpose(pil_image).convert("RGB")

        corrected, rotation = choose_orientation(pil_image)

        forced_rotation = ROTATION_OVERRIDES.get(output_index)
        if forced_rotation is not None:
            corrected = pil_image.rotate(forced_rotation, expand=True)
            rotation = forced_rotation

        out_file = OUT_DIR / f"expert-{output_index}.jpg"
        corrected.save(out_file, format="JPEG", quality=92, optimize=True)

        width, height = corrected.size
        results.append(
            {
                "expert": output_index,
                "sourcePage": page_num,
                "sourceImageIndex": image_index,
                "sourceName": image_file.name,
                "rotationApplied": rotation,
                "width": width,
                "height": height,
                "file": out_file.name,
            }
        )

    manifest = OUT_DIR / "experts-manifest.json"
    manifest.write_text(json.dumps(results, indent=2), encoding="utf-8")

    print(f"Wrote {len(results)} expert images to {OUT_DIR}")
    for item in results:
        print(item)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
