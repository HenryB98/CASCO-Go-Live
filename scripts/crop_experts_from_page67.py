from __future__ import annotations

from pathlib import Path
import cv2
import numpy as np
from PIL import Image

RAW_DIR = Path(r"C:/Users/henry/Downloads/CASCO (Go Live)/public/experts/page67-raw")
OUT_DIR = Path(r"C:/Users/henry/Downloads/CASCO (Go Live)/public/experts")

CASCADE_PATH = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
face_cascade = cv2.CascadeClassifier(CASCADE_PATH)

source_images = [
    RAW_DIR / "p6_img1_1754x1241.jpg",
    RAW_DIR / "p7_img1_1754x1241.jpg",
]


def detect_faces(image_bgr: np.ndarray):
    gray = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.08, minNeighbors=5, minSize=(60, 60))
    return faces


def collect_candidates(img_path: Path):
    image = cv2.imread(str(img_path))
    if image is None:
        return []

    candidates = []
    for rotation in [0, 180]:
        rotated = image if rotation == 0 else cv2.rotate(image, cv2.ROTATE_180)
        faces = detect_faces(rotated)
        for (x, y, w, h) in faces:
            pad_x = int(w * 0.35)
            pad_top = int(h * 0.45)
            pad_bottom = int(h * 0.7)

            x1 = max(0, x - pad_x)
            y1 = max(0, y - pad_top)
            x2 = min(rotated.shape[1], x + w + pad_x)
            y2 = min(rotated.shape[0], y + h + pad_bottom)

            crop = rotated[y1:y2, x1:x2]
            if crop.size == 0:
                continue

            area = (x2 - x1) * (y2 - y1)
            candidates.append({
                "source": img_path.name,
                "rotation": rotation,
                "rect": (x1, y1, x2, y2),
                "area": area,
                "img": crop,
            })

    return candidates


def iou(a, b):
    ax1, ay1, ax2, ay2 = a
    bx1, by1, bx2, by2 = b

    inter_x1 = max(ax1, bx1)
    inter_y1 = max(ay1, by1)
    inter_x2 = min(ax2, bx2)
    inter_y2 = min(ay2, by2)

    if inter_x2 <= inter_x1 or inter_y2 <= inter_y1:
        return 0.0

    inter = (inter_x2 - inter_x1) * (inter_y2 - inter_y1)
    a_area = (ax2 - ax1) * (ay2 - ay1)
    b_area = (bx2 - bx1) * (by2 - by1)
    return inter / float(a_area + b_area - inter)


def dedupe(candidates):
    deduped = []
    for c in sorted(candidates, key=lambda x: x["area"], reverse=True):
        keep = True
        for existing in deduped:
            if c["source"] == existing["source"] and c["rotation"] == existing["rotation"] and iou(c["rect"], existing["rect"]) > 0.45:
                keep = False
                break
        if keep:
            deduped.append(c)
    return deduped


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    all_candidates = []
    for src in source_images:
        all_candidates.extend(collect_candidates(src))

    if not all_candidates:
        print("No faces detected.")
        return

    candidates = dedupe(all_candidates)

    # Prefer upright extractions first (rotation 180 in prior bad set usually fixes orientation);
    # still score by area to prioritize clear portraits.
    candidates = sorted(candidates, key=lambda c: ((1 if c["rotation"] == 180 else 0), c["area"]), reverse=True)

    selected = candidates[:7]

    for index, item in enumerate(selected, start=1):
        rgb = cv2.cvtColor(item["img"], cv2.COLOR_BGR2RGB)
        out_path = OUT_DIR / f"expert-{index}.jpg"
        Image.fromarray(rgb).save(out_path, format="JPEG", quality=92, optimize=True)
        print(f"expert-{index}.jpg <= {item['source']} rot={item['rotation']} rect={item['rect']}")


if __name__ == "__main__":
    main()
