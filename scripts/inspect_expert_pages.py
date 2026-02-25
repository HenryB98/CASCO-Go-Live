from pypdf import PdfReader

pdf = r"C:/Users/henry/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/ABB8E496ED310CEE019D427DDC96DF521A617581/transfers/2026-08/CASCO PROFILE 2025.pdf"
reader = PdfReader(pdf)

for page_num in (6, 7):
    page = reader.pages[page_num - 1]
    images = list(page.images)
    print(f"Page {page_num}: {len(images)} images")
    for index, image_file in enumerate(images, start=1):
        print(f"  {index}. {image_file.name} ({len(image_file.data)} bytes)")
