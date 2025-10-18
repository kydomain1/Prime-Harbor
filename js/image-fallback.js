// 本地图片占位符 - 使用本地SVG图片文件
// 完全离线，不依赖任何外部服务

// 预定义的占位图路径（本地SVG文件）
const placeholderImages = {
    'fashion': 'images/placeholders/fashion.svg',
    'health': 'images/placeholders/health.svg',
    'home': 'images/placeholders/home.svg',
    'travel': 'images/placeholders/travel.svg',
    'finance': 'images/placeholders/finance.svg',
    'food': 'images/placeholders/food.svg',
    'product': 'images/placeholders/product.svg',
    'article': 'images/placeholders/article.svg',
    'default': 'images/placeholders/default.svg'
};

// 为图片添加错误处理
function setupImageFallback(img, category = 'default') {
    const placeholderPath = placeholderImages[category] || placeholderImages.default;
    
    img.addEventListener('error', function() {
        if (!this.dataset.fallbackApplied) {
            this.dataset.fallbackApplied = 'true';
            this.src = placeholderPath;
        }
    });
}

// 自动为所有图片添加错误处理
function initImageFallbacks() {
    // 文章卡片图片
    document.querySelectorAll('.article-card .article-image').forEach(img => {
        const card = img.closest('.article-card');
        const categoryText = card?.querySelector('.article-category')?.textContent || '';
        let category = 'default';
        
        if (categoryText.includes('Fashion')) category = 'fashion';
        else if (categoryText.includes('Health')) category = 'health';
        else if (categoryText.includes('Home')) category = 'home';
        else if (categoryText.includes('Travel')) category = 'travel';
        else if (categoryText.includes('Finance')) category = 'finance';
        else if (categoryText.includes('Food')) category = 'food';
        
        setupImageFallback(img, category, 800, 600);
    });
    
    // 产品图片
    document.querySelectorAll('.product-image').forEach(img => {
        setupImageFallback(img, 'product', 400, 300);
    });
    
    // 文章详情页特色图片
    const featuredImage = document.getElementById('articleImage');
    if (featuredImage) {
        setupImageFallback(featuredImage, 'article', 1000, 600);
    }
    
    // 文章内容中的图片
    document.querySelectorAll('#articleContent img, .article-content img').forEach(img => {
        setupImageFallback(img, 'article', 800, 600);
    });
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageFallbacks);
} else {
    initImageFallbacks();
}

// 导出函数供其他脚本使用
window.setupImageFallback = setupImageFallback;
window.initImageFallbacks = initImageFallbacks;
window.placeholderImages = placeholderImages;

