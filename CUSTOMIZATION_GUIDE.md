# CASCO Construction Website - Customization Guide

This guide will help you easily customize the experts carousel and certifications sections with your own content and images.

---

## 📸 Adding Expert Photos and Information

### Location
The experts carousel is located in `/src/app/components/ExpertsCarousel.tsx`

### How to Customize

1. **Open the file**: `/src/app/components/ExpertsCarousel.tsx`

2. **Find the `defaultExperts` array** (around line 20-70)

3. **Update each expert's information**:

```typescript
{
  id: 1,
  name: "Your Expert's Name",           // Change this
  position: "Their Job Title",          // Change this
  bio: "A detailed bio...",             // Change this
  email: "expert@email.com",            // Change this (optional)
  linkedin: "https://linkedin.com/...", // Change this (optional)
  image: "path/to/image.jpg",           // Add image path here
}
```

### Adding Images

**Option 1: Using Uploaded Images** (Recommended when ready)
```typescript
image: "/path/to/your/uploaded/image.jpg"
```

**Option 2: Using External URLs**
```typescript
image: "https://example.com/expert-photo.jpg"
```

**Option 3: Leave Empty for Placeholder**
```typescript
image: undefined  // or simply omit the image property
```

### Example of a Complete Expert Entry

```typescript
{
  id: 1,
  name: "Eng. Ahmed Ibrahim",
  position: "Chief Executive Officer",
  bio: "With over 25 years of experience in construction and project management, Eng. Ahmed has led CASCO to become one of Nigeria's premier construction companies. His expertise includes large-scale infrastructure development and strategic planning.",
  email: "ahmed.ibrahim@cascoconstruction.ng",
  linkedin: "https://linkedin.com/in/ahmed-ibrahim",
  image: "/images/experts/ahmed-ibrahim.jpg"
}
```

---

## 🏆 Adding Certifications

### Location
The certifications are located in `/src/app/pages/Certifications.tsx`

### How to Customize

1. **Open the file**: `/src/app/pages/Certifications.tsx`

2. **Find the `certifications` array** (around line 15-85)

3. **Update or add new certifications**:

```typescript
{
  id: 1,
  name: "Certification Name",
  issuedBy: "Issuing Organization",
  description: "Description of what this certification means",
  year: "2023",
  category: "Category Name",
  image: "path/to/certificate.jpg", // Optional
}
```

### Adding Certificate Images

**Option 1: Using Uploaded Certificate Images**
```typescript
image: "/certificates/iso-9001.jpg"
```

**Option 2: Using External URLs**
```typescript
image: "https://example.com/certificate.jpg"
```

**Option 3: Leave Empty for Placeholder**
```typescript
image: undefined  // or simply omit the image property
```

### Example of a Complete Certification Entry

```typescript
{
  id: 1,
  name: "ISO 9001:2015 Quality Management System",
  issuedBy: "International Organization for Standardization",
  description: "This certification demonstrates our commitment to quality management systems and continuous improvement in all aspects of our construction services. We maintain rigorous quality standards across all projects.",
  year: "2023",
  category: "Quality Management",
  image: "/certificates/iso-9001-certificate.pdf.jpg"
}
```

### Available Categories
The current categories are:
- Quality Management
- Environmental
- Health & Safety
- Professional Registration
- Government Compliance
- Sustainability
- Project Management

You can add new categories by simply using them in a certification entry.

---

## 🎨 Customizing the Experts Carousel

### Changing Number of Experts
Simply add or remove expert objects from the `defaultExperts` array. The carousel automatically adjusts.

### Using Custom Expert Data
If you want to pass custom expert data from a parent component:

```typescript
import ExpertsCarousel from "./components/ExpertsCarousel";

const myExperts = [
  { id: 1, name: "Expert 1", ... },
  { id: 2, name: "Expert 2", ... }
];

// In your component:
<ExpertsCarousel experts={myExperts} />
```

### Carousel Settings
To adjust autoplay speed, transition effects, etc., modify the `settings` object in `/src/app/components/ExpertsCarousel.tsx`:

```typescript
const settings = {
  autoplay: true,
  autoplaySpeed: 5000,  // Change this (milliseconds)
  speed: 800,           // Transition speed
  // ... other settings
};
```

---

## 📁 Recommended File Structure for Images

Create these folders in your public directory:

```
public/
├── images/
│   └── experts/
│       ├── expert-1.jpg
│       ├── expert-2.jpg
│       └── ...
└── certificates/
    ├── iso-9001.jpg
    ├── iso-14001.jpg
    └── ...
```

Then reference them as:
```typescript
image: "/images/experts/expert-1.jpg"
image: "/certificates/iso-9001.jpg"
```

---

## 🎯 Quick Tips

### Image Specifications

**Expert Photos:**
- Recommended size: 800x800 pixels (square)
- Format: JPG or PNG
- Professional headshot or portrait style
- Clear, high-quality images work best

**Certificate Images:**
- Recommended size: 1200x900 pixels (4:3 ratio)
- Format: JPG or PNG
- Ensure text is readable when scaled down
- Can be scans or photos of certificates

### Adding More Experts

To add an 8th, 9th, or more experts:

```typescript
// Just add to the array
{
  id: 8,  // Make sure ID is unique
  name: "New Expert Name",
  position: "Position",
  bio: "Bio here...",
  email: "email@example.com",
  linkedin: "#"
}
```

### Removing the Experts Section

If you want to hide the experts carousel temporarily, comment it out in `/src/app/pages/Home.tsx`:

```typescript
{/* <ExpertsCarousel /> */}
```

---

## 🔄 TypeScript Interfaces

If you need to extend the data structure:

### Expert Interface
```typescript
export interface Expert {
  id: number;
  name: string;
  position: string;
  bio: string;
  email?: string;
  linkedin?: string;
  image?: string;
  // Add new fields here
}
```

### Certification Interface
```typescript
export interface Certification {
  id: number;
  name: string;
  issuedBy: string;
  description: string;
  year: string;
  category: string;
  image?: string;
  // Add new fields here
}
```

---

## 💡 Advanced Customization

### Changing Colors
The components use the sky blue theme. To change:
- `from-sky-500 to-blue-600` - Gradient backgrounds
- `text-sky-600` - Text colors
- `bg-sky-100` - Light backgrounds

### Animation Settings
All animations use Motion (Framer Motion). Adjust in each component:
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

---

## ❓ Need Help?

If you encounter any issues:
1. Check that image paths are correct
2. Ensure IDs are unique for each expert/certification
3. Verify TypeScript types match the interfaces
4. Check browser console for any errors

---

## 📝 Summary

1. **Experts**: Edit `/src/app/components/ExpertsCarousel.tsx`
2. **Certifications**: Edit `/src/app/pages/Certifications.tsx`
3. **Images**: Upload to `/public/images/` or `/public/certificates/`
4. **Navigation**: Already set up - "Certifications" menu item added

Both sections are fully responsive and ready for your content!
