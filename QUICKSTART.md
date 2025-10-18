# PrimeHarbor - Quick Start Guide

## 🚀 Getting Started

### Simple Setup (No Installation Required!)

1. **Download the project files**
2. **Open `index.html` in your web browser**
3. That's it! The website is ready to use.

### File Structure
```
PrimeHarbor/
├── index.html              # Homepage
├── article.html            # Article detail page
├── products.html           # Product recommendations page
├── about.html             # About page
├── contact.html           # Contact page
├── README.md              # Detailed documentation
├── QUICKSTART.md          # This file
├── css/
│   ├── style.css          # Main styles
│   ├── article.css        # Article page styles
│   ├── pages.css          # About & Contact styles
│   └── products.css       # Products page styles
└── js/
    ├── articles-data.js   # All article content
    ├── main.js            # Homepage functionality
    ├── article.js         # Article page logic
    ├── pages.js           # About & Contact logic
    └── products.js        # Products page logic
```

## ✨ Key Features

### 🎨 Design
- **Morandi Color System**: Soft, calming color palette
- **Rounded Corners**: Friendly, approachable design
- **Smooth Animations**: Elegant transitions throughout

### 📱 Pages
1. **Home** - Browse all articles, filter by category, search
2. **Products** - View all recommended products with filtering
3. **Article Detail** - Full articles with product recommendations
4. **About** - Learn about PrimeHarbor
5. **Contact** - Get in touch via contact form

### 🔍 Functionality
- **Category Filtering**: 6 categories (Fashion, Health, Home, Travel, Finance, Food)
- **Search**: Find articles by keyword
- **Pagination**: Navigate through multiple pages
- **Responsive**: Works on all devices
- **Product Sorting**: Sort by rating or price

## 📝 Articles Included

1. **Fashion**: "10 Must-Have Summer Dresses" (Jan 2025)
2. **Health**: "Natural Skincare Routine" (Mar 2025)
3. **Home**: "Creating a Cozy Reading Nook" (May 2025)
4. **Travel**: "Hidden European Destinations" (Jun 2025)
5. **Finance**: "Smart Budgeting Tips" (Aug 2025)

## 🛠️ Customization

### Adding New Articles
Edit `js/articles-data.js`:
```javascript
{
    id: 6,
    title: "Your Title",
    category: "fashion",
    categoryName: "Fashion & Accessories",
    date: "October 15, 2025",
    excerpt: "Brief description...",
    image: "image-url",
    author: "Author Name",
    content: `Full HTML content`,
    products: [...]
}
```

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #D4B5B0;
    --secondary-color: #B5C7D3;
    /* ... */
}
```

## 🎨 Color Palette

- **Primary** (Soft Rose): `#D4B5B0`
- **Secondary** (Soft Blue): `#B5C7D3`
- **Accent** (Soft Peach): `#E8D5C4`
- **Light Pink**: `#F5E6E8`
- **Light Blue**: `#E3EBF2`
- **Sage Green**: `#C8D5C5`
- **Lavender**: `#D6CAD8`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 968px - 1199px
- **Mobile**: 640px - 967px
- **Small Mobile**: Below 640px

## 🌐 Browser Support

✅ Chrome, Firefox, Safari, Edge (all latest versions)
✅ Mobile browsers (iOS & Android)

## 💡 Tips

1. **Images**: All images are from Unsplash (free to use)
2. **Icons**: Font Awesome icons (via CDN)
3. **Fonts**: Google Fonts - Poppins & Playfair Display
4. **No Backend**: Pure frontend, no server required

## 🆘 Troubleshooting

**Q: Images not loading?**
A: Check your internet connection (images load from Unsplash)

**Q: Styles not working?**
A: Ensure CSS files are in the `css/` folder

**Q: Menu not opening on mobile?**
A: Make sure JavaScript files are properly linked

## 📧 Need Help?

Visit the Contact page or check the full README.md for more details.

---

**Enjoy using PrimeHarbor!** 🌸

