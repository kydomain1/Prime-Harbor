// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Collect all products from articles
    const allProducts = [];
    
    articlesData.forEach(article => {
        if (article.products && article.products.length > 0) {
            article.products.forEach(product => {
                allProducts.push({
                    ...product,
                    category: article.category,
                    categoryName: article.categoryName,
                    articleId: article.id,
                    articleTitle: article.title
                });
            });
        }
    });

    let filteredProducts = [...allProducts];
    
    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Mobile Navigation
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Search functionality
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterAndSortProducts();
            }, 300);
        });
    }

    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndSortProducts);
    }

    // Sort filter
    if (sortFilter) {
        sortFilter.addEventListener('change', filterAndSortProducts);
    }

    // Filter and sort products
    function filterAndSortProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
        const sortOption = sortFilter ? sortFilter.value : 'default';

        // Filter
        filteredProducts = allProducts.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        // Sort
        if (sortOption === 'rating-high') {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === 'rating-low') {
            filteredProducts.sort((a, b) => a.rating - b.rating);
        } else if (sortOption === 'price-high') {
            filteredProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        } else if (sortOption === 'price-low') {
            filteredProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        }

        renderProducts();
    }

    // Parse price string to number
    function parsePrice(priceString) {
        return parseFloat(priceString.replace('$', ''));
    }

    // Render products
    function renderProducts() {
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <h3>No Products Found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <span class="product-category-badge">${product.categoryName}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-meta">
                        <span class="product-price">${product.price}</span>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <span>${product.rating}</span>
                        </div>
                    </div>
                    <div class="product-footer">
                        <a href="${product.link}" class="product-link">
                            View Product <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="article.html?id=${product.articleId}" class="article-link" title="Read full article">
                            <i class="fas fa-book-open"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Animate products
        animateProducts();
    }

    // Animate products on load
    function animateProducts() {
        const products = document.querySelectorAll('.product-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        products.forEach(product => {
            product.style.opacity = '0';
            product.style.transform = 'translateY(30px)';
            product.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(product);
        });
        
        // Initialize image fallbacks
        if (window.initImageFallbacks) {
            window.initImageFallbacks();
        }
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! We\'ll send updates to ' + email);
            newsletterForm.reset();
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = '0 2px 20px var(--shadow)';
        } else {
            header.style.boxShadow = '0 4px 30px var(--shadow)';
        }
    });

    // Initialize
    renderProducts();
});

