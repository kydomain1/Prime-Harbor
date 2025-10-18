// Article Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    // Find the article
    const article = articlesData.find(a => a.id === articleId);

    if (!article) {
        document.querySelector('.article-detail .container').innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h2>Article Not Found</h2>
                <p>The article you're looking for doesn't exist.</p>
                <a href="index.html" class="btn btn-primary">Back to Home</a>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${article.title} - PrimeHarbor`;

    // Populate article data
    document.getElementById('articleCategory').textContent = article.categoryName;
    document.getElementById('articleDate').innerHTML = `<i class="far fa-calendar"></i> ${article.date}`;
    document.getElementById('articleAuthor').textContent = article.author;
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleImage').src = article.image;
    document.getElementById('articleImage').alt = article.title;
    document.getElementById('articleExcerpt').textContent = article.excerpt;
    document.getElementById('articleContent').innerHTML = article.content;

    // Populate products
    if (article.products && article.products.length > 0) {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = article.products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">${product.price}</span>
                        <span class="product-rating">
                            <i class="fas fa-star"></i> ${product.rating}
                        </span>
                    </div>
                    <a href="${product.link}" class="product-link">View Details</a>
                </div>
            </div>
        `).join('');
    } else {
        document.getElementById('productsSection').style.display = 'none';
    }

    // Show related articles
    const relatedArticles = articlesData
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3);

    if (relatedArticles.length > 0) {
        const relatedGrid = document.getElementById('relatedGrid');
        relatedGrid.innerHTML = relatedArticles.map(related => `
            <article class="article-card" onclick="window.location.href='article.html?id=${related.id}'">
                <img src="${related.image}" alt="${related.title}" class="article-image" loading="lazy">
                <div class="article-content">
                    <div class="article-meta">
                        <span class="article-category">${related.categoryName}</span>
                        <span class="article-date">
                            <i class="far fa-calendar"></i> ${related.date}
                        </span>
                    </div>
                    <h3 class="article-title">${related.title}</h3>
                    <p class="article-excerpt">${related.excerpt}</p>
                    <a href="article.html?id=${related.id}" class="read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `).join('');
    } else {
        document.getElementById('relatedArticles').style.display = 'none';
    }

    // Mobile navigation
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form-sidebar, .newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! We\'ll send updates to ' + email);
            form.reset();
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe related articles
    document.querySelectorAll('#relatedGrid .article-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Initialize image fallbacks
    if (window.initImageFallbacks) {
        window.initImageFallbacks();
    }
});

// Share functions
function shareArticle(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.getElementById('articleTitle').textContent);
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'pinterest':
            const image = encodeURIComponent(document.getElementById('articleImage').src);
            shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard!');
    }
}

