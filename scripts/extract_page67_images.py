from pathlib import Path
import io
import json
from pypdf import PdfReader
from PIL import Image, ImageOps

pdf = r"C:/Users/henry/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/ABB8E496ED310CEE019D427DDC96DF521A617581/transfers/2026-08/CASCO PROFILE 2025.pdf"
out_dir = Path(r"C:/Users/henry/Downloads/CASCO (Go Live)/public/experts/page67-raw")
out_dir.mkdir(parents=True, exist_ok=True)

reader = PdfReader(pdf)
meta = []

for page_num in (6, 7):
    page = reader.pages[page_num - 1]
    images = list(page.images)
    for idx, image_file in enumerate(images, start=1):
        ext = Path(image_file.name).suffix.lower().lstrip('.') or 'jpg'
        if ext == 'jp2':
            ext = 'jpg'
        img = Image.open(io.BytesIO(image_file.data))
        img = ImageOps.exif_transpose(img).convert('RGB')
        w, h = img.size

        base = f"p{page_num}_img{idx}_{w}x{h}"
        normal_path = out_dir / f"{base}.jpg"
        rot180_path = out_dir / f"{base}_r180.jpg"

        img.save(normal_path, format='JPEG', quality=92)
        img.rotate(180, expand=True).save(rot180_path, format='JPEG', quality=92)

        meta.append({
            "page": page_num,
            "index": idx,
            "name": image_file.name,
            "width": w,
            "height": h,
            "file": normal_path.name,
            "rot180": rot180_path.name,
        })

(out_dir / "meta.json").write_text(json.dumps(meta, indent=2), encoding='utf-8')
print(f"Saved {len(meta)} images (plus rotated variants) to {out_dir}")
for item in meta:
    print(item)
