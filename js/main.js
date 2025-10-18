// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const articlesPerPage = 6;
    let currentPage = 1;
    let filteredArticles = [...articlesData];

    // DOM Elements
    const articlesGrid = document.getElementById('articlesGrid');
    const pagination = document.getElementById('pagination');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const categoryCards = document.querySelectorAll('.category-card');

    // Mobile Navigation Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Category card click handler
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (categoryFilter) {
                categoryFilter.value = category;
                filterArticles();
                // Scroll to articles section
                document.querySelector('#articles').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search functionality
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterArticles();
            }, 300);
        });
    }

    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterArticles);
    }

    // Filter articles function
    function filterArticles() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : 'all';

        filteredArticles = articlesData.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                                article.excerpt.toLowerCase().includes(searchTerm) ||
                                article.categoryName.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        currentPage = 1;
        renderArticles();
        renderPagination();
    }

    // Render articles
    function renderArticles() {
        if (!articlesGrid) return;

        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToShow = filteredArticles.slice(startIndex, endIndex);

        if (articlesToShow.length === 0) {
            articlesGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <h3 style="color: var(--text-medium);">No articles found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        articlesGrid.innerHTML = articlesToShow.map(article => `
            <article class="article-card" data-id="${article.id}">
                <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
                <div class="article-content">
                    <div class="article-meta">
                        <span class="article-category">${article.categoryName}</span>
                        <span class="article-date">
                            <i class="far fa-calendar"></i> ${article.date}
                        </span>
                    </div>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <a href="article.html?id=${article.id}" class="read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `).join('');

        // Add click handlers to article cards
        document.querySelectorAll('.article-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.read-more')) {
                    const articleId = card.dataset.id;
                    window.location.href = `article.html?id=${articleId}`;
                }
            });
        });

        // Initialize image fallbacks
        if (window.initImageFallbacks) {
            window.initImageFallbacks();
        }

        // Animate articles on load
        animateArticles();
    }

    // Render pagination
    function renderPagination() {
        if (!pagination) return;

        const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';

        // Previous button
        if (currentPage > 1) {
            paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">
                <i class="fas fa-chevron-left"></i>
            </button>`;
        }

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                    ${i}
                </button>`;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                paginationHTML += `<span class="page-dots">...</span>`;
            }
        }

        // Next button
        if (currentPage < totalPages) {
            paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">
                <i class="fas fa-chevron-right"></i>
            </button>`;
        }

        pagination.innerHTML = paginationHTML;

        // Add click handlers to pagination buttons
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentPage = parseInt(btn.dataset.page);
                renderArticles();
                renderPagination();
                // Scroll to top of articles section
                document.querySelector('#articles').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Animate articles on scroll
    function animateArticles() {
        const articles = document.querySelectorAll('.article-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        articles.forEach(article => {
            article.style.opacity = '0';
            article.style.transform = 'translateY(30px)';
            article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(article);
        });
    }

    // Newsletter form submission
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
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = '0 2px 20px var(--shadow)';
        } else {
            header.style.boxShadow = '0 4px 30px var(--shadow)';
        }
        
        lastScroll = currentScroll;
    });

    // Initialize
    if (articlesGrid) {
        renderArticles();
        renderPagination();
    }

    // Add animation classes to elements on page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

