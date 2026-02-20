# Quick Copy-Paste Templates

Use these templates to quickly add new experts and certifications.

---

## 👤 Expert Template

Copy this template and fill in your details:

```typescript
{
  id: 1,  // Change to unique number
  name: "Full Name Here",
  position: "Job Title Here",
  bio: "Write a compelling bio about this expert's experience, expertise, and role in the company. Keep it professional and engaging. 2-3 sentences work best.",
  email: "email@cascoconstruction.ng",  // Optional - remove if not needed
  linkedin: "https://linkedin.com/in/profile",  // Optional - remove if not needed
  image: "/images/experts/photo.jpg",  // Optional - remove for placeholder
},
```

---

## 🏆 Certification Template

Copy this template and fill in your details:

```typescript
{
  id: 1,  // Change to unique number
  name: "Full Certification Name",
  issuedBy: "Organization or Body That Issued It",
  description: "Explain what this certification represents and its significance to your company. How does it demonstrate your commitment to quality/safety/sustainability?",
  year: "2023",  // Year issued or renewed
  category: "Quality Management",  // Choose or create category
  image: "/certificates/cert-name.jpg",  // Optional - remove for placeholder
},
```

### Available Categories:
- Quality Management
- Environmental
- Health & Safety
- Professional Registration
- Government Compliance
- Sustainability
- Project Management
- (Or create your own)

---

## 📋 Full Example - Expert

```typescript
{
  id: 8,
  name: "Engr. Fatima Bello",
  position: "Senior Structural Engineer",
  bio: "Engr. Fatima brings 15 years of expertise in structural design and analysis. She has led the engineering team on multiple award-winning projects across Nigeria, specializing in complex structural solutions and innovative design approaches.",
  email: "f.bello@cascoconstruction.ng",
  linkedin: "https://linkedin.com/in/fatima-bello",
  image: "/images/experts/fatima-bello.jpg",
},
```

---

## 📋 Full Example - Certification

```typescript
{
  id: 9,
  name: "NIQS Professional Membership",
  issuedBy: "Nigerian Institute of Quantity Surveyors",
  description: "Professional membership with NIQS demonstrates our adherence to the highest standards of quantity surveying and cost management in the construction industry. This certification ensures accurate cost estimation and value engineering on all projects.",
  year: "2023",
  category: "Professional Registration",
  image: "/certificates/niqs-certificate.jpg",
},
```

---

## 🔢 Multiple Experts Template

Need to add multiple experts at once? Use this:

```typescript
{
  id: 8,
  name: "Expert Name 1",
  position: "Position 1",
  bio: "Bio text here...",
  email: "expert1@cascoconstruction.ng",
  linkedin: "#",
},
{
  id: 9,
  name: "Expert Name 2",
  position: "Position 2",
  bio: "Bio text here...",
  email: "expert2@cascoconstruction.ng",
  linkedin: "#",
},
{
  id: 10,
  name: "Expert Name 3",
  position: "Position 3",
  bio: "Bio text here...",
  email: "expert3@cascoconstruction.ng",
  linkedin: "#",
},
```

---

## 🔢 Multiple Certifications Template

```typescript
{
  id: 9,
  name: "Certification 1",
  issuedBy: "Issuing Body 1",
  description: "Description here...",
  year: "2023",
  category: "Quality Management",
},
{
  id: 10,
  name: "Certification 2",
  issuedBy: "Issuing Body 2",
  description: "Description here...",
  year: "2023",
  category: "Health & Safety",
},
{
  id: 11,
  name: "Certification 3",
  issuedBy: "Issuing Body 3",
  description: "Description here...",
  year: "2023",
  category: "Environmental",
},
```

---

## 💡 Pro Tips

### For Experts:
- Keep bios between 100-200 words
- Highlight unique expertise and achievements
- Use professional language
- Include measurable achievements when possible
- LinkedIn URLs should be full profile links

### For Certifications:
- Use full official certification names
- Include certification numbers if relevant
- Explain the certification's value to clients
- Keep descriptions clear and benefit-focused
- Update years when certifications are renewed

### For Images:
- Expert photos: Professional headshots work best
- Certificates: Scan or photograph actual certificates
- Keep image file sizes under 500KB for faster loading
- Use descriptive file names (e.g., `john-doe-ceo.jpg`)

---

## 🎯 Where to Paste

### For Experts:
1. Open `/src/app/components/ExpertsCarousel.tsx`
2. Find the `defaultExperts` array
3. Add your new expert object inside the array
4. Make sure to add a comma after the previous entry

### For Certifications:
1. Open `/src/app/pages/Certifications.tsx`
2. Find the `certifications` array
3. Add your new certification object inside the array
4. Make sure to add a comma after the previous entry

---

## ✅ Checklist Before Adding

- [ ] ID is unique (not used by another expert/certification)
- [ ] All required fields are filled
- [ ] Commas are in the right places
- [ ] Image path is correct (if using images)
- [ ] Email address is valid (if included)
- [ ] LinkedIn URL is complete (if included)
- [ ] Bio/description is professional and error-free
- [ ] Category exists or is properly named

---

That's it! Just copy, customize, and paste your content.
