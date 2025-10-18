# PrimeHarbor - Lifestyle Blog Website

A beautiful, comprehensive lifestyle blog website featuring six main categories: Fashion & Accessories, Health & Beauty, Home & Garden, Travel & Accommodation, Finance & Insurance, and Food & Beverage.

## Features

### Design
- **Morandi Color Palette**: Soft, low-saturation colors creating a warm and comfortable atmosphere
- **Rounded Corners**: Gentle, friendly design throughout
- **Sweet & Soft Style**: Welcoming and approachable aesthetic
- **Smooth Animations**: Elegant transitions and hover effects

### Functionality
- **Category Filtering**: Browse articles by 6 main categories
- **Search Function**: Search articles by title, content, or category
- **Pagination**: Easy navigation through multiple pages of articles
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Article Detail Pages**: Individual pages for each article with rich content
- **Product Recommendations**: Featured products related to each article
- **Social Media Integration**: Share buttons and social media links
- **Newsletter Subscription**: Stay updated with latest content

### Content
- **5 High-Quality Articles**: 
  - Fashion: Summer Dresses Guide (January 2025)
  - Health: Natural Skincare Routine (March 2025)
  - Home: Creating a Reading Nook (May 2025)
  - Travel: Hidden European Destinations (June 2025)
  - Finance: Budgeting Tips (August 2025)
- **Product Reviews**: Each article includes 3 related product recommendations
- **Realistic Images**: All images sourced from Unsplash for authentic, high-quality visuals

### Pages
1. **Home** (`index.html`): Main page with hero section, categories, and article listing
2. **Article Detail** (`article.html`): Individual article pages with full content and products
3. **About** (`about.html`): Information about PrimeHarbor's mission and values
4. **Contact** (`contact.html`): Contact form and information

## File Structure

```
PrimeHarbor/
├── index.html              # Main homepage
├── article.html            # Article detail page template
├── about.html             # About us page
├── contact.html           # Contact page
├── README.md              # This file
├── css/
│   ├── style.css          # Main styles with Morandi color system
│   ├── article.css        # Article detail page styles
│   └── pages.css          # About & Contact page styles
└── js/
    ├── articles-data.js   # Article content and data
    ├── main.js            # Homepage functionality
    ├── article.js         # Article page functionality
    └── pages.js           # About & Contact page functionality
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **No build process required**: This is a static website using HTML, CSS, and JavaScript
3. **All assets are CDN-based**: Font Awesome icons and Google Fonts are loaded from CDN

## Color Palette (Morandi System)

- **Primary Color**: `#D4B5B0` (Soft Rose)
- **Secondary Color**: `#B5C7D3` (Soft Blue)
- **Accent Color**: `#E8D5C4` (Soft Peach)
- **Light Pink**: `#F5E6E8`
- **Light Blue**: `#E3EBF2`
- **Light Peach**: `#F9F2ED`
- **Sage Green**: `#C8D5C5`
- **Lavender**: `#D6CAD8`
- **Warm Gray**: `#E5DDD8`

## Categories

1. **Fashion & Accessories**: Style guides, trends, and outfit inspiration
2. **Health & Beauty**: Skincare, wellness tips, and beauty product reviews
3. **Home & Garden**: Interior design, decor ideas, and gardening advice
4. **Travel & Accommodation**: Destination guides and travel tips
5. **Finance & Insurance**: Personal finance and money management
6. **Food & Beverage**: Recipes, dining recommendations, and culinary inspiration

## Customization

### Adding New Articles
Edit `js/articles-data.js` and add new article objects following this structure:

```javascript
{
    id: 6,
    title: "Your Article Title",
    category: "fashion", // or health, home, travel, finance, food
    categoryName: "Fashion & Accessories",
    date: "September 15, 2025",
    excerpt: "Brief description...",
    image: "https://example.com/image.jpg",
    author: "Author Name",
    content: `Full HTML content...`,
    products: [
        {
            name: "Product Name",
            description: "Product description",
            price: "$XX.XX",
            image: "https://example.com/product.jpg",
            rating: 4.8,
            link: "#"
        }
    ]
}
```

### Changing Colors
Modify the CSS variables in `css/style.css` under the `:root` selector to customize the color scheme.

### Updating Social Media Links
Replace `#` placeholders in the footer and sidebar with your actual social media URLs.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6)**: Interactive functionality
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Poppins and Playfair Display
- **Unsplash**: High-quality images

## Performance

- **Lazy Loading**: Images load as needed
- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Smooth Animations**: Hardware-accelerated transitions
- **Responsive Images**: Appropriate sizing for different devices

## Future Enhancements

- Comment system for articles
- User accounts and profiles
- Bookmark/favorite articles
- Related articles recommendation algorithm
- Dark mode toggle
- Multi-language support

## Credits

- **Design**: Custom Morandi-inspired color palette
- **Images**: Unsplash (https://unsplash.com)
- **Icons**: Font Awesome (https://fontawesome.com)
- **Fonts**: Google Fonts (https://fonts.google.com)

## License

This project is created for educational and portfolio purposes.

---

**PrimeHarbor** - Your trusted source for lifestyle inspiration and practical advice.

