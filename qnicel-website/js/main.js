// ============================================
// Qnicel - Main JavaScript (Indian Rupees)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page-specific functions
    initHomePage();
    initProductsPage();
    initCartPage();
    initProductDetailPage();
    initCategoryPage();
    initProfilePage();
    initWishlistPage();
    initCheckoutPage();
    initNewsletterForm();
    initSearch();
});

// Home Page
function initHomePage() {
    const trendingContainer = document.getElementById('trendingProducts');
    const saleContainer = document.getElementById('saleProducts');
    
    if (trendingContainer) {
        const trendingProducts = getTrendingProducts();
        trendingContainer.innerHTML = trendingProducts.map(p => createProductCard(p)).join('');
    }
    
    if (saleContainer) {
        const saleProducts = getSaleProducts();
        saleContainer.innerHTML = saleProducts.map(p => createProductCard(p)).join('');
    }
}

// Products Page
function initProductsPage() {
    const productsContainer = document.getElementById('allProducts');
    const productCount = document.getElementById('productCount');
    
    if (!productsContainer) return;
    
    // Get URL params
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search') || '';
    const categoryFilter = urlParams.get('category') || '';
    
    let filteredProducts = [...products];
    
    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
    }
    
    // Apply category filter
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }
    
    // Update count
    if (productCount) {
        productCount.textContent = `${filteredProducts.length} products`;
    }
    
    // Render products
    renderProducts(filteredProducts, productsContainer);
    
    // Setup filters
    setupProductFilters();
}

// Category Page
function initCategoryPage() {
    const categoryContainer = document.getElementById('categoryProducts');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    
    if (!categoryContainer) return;
    
    // Get category from URL
    const path = window.location.pathname;
    const categoryMatch = path.match(/category-(\w+)\.html/);
    const category = categoryMatch ? categoryMatch[1] : '';
    
    const categoryInfo = {
        fruits: { title: 'Fresh Fruits', description: 'Handpicked organic fruits sourced directly from local farms.', banner: 'images/categories/fruits-banner.png' },
        nuts: { title: 'Premium Nuts', description: 'Nutrient-rich nuts and seeds for a healthy lifestyle.', banner: 'images/categories/nuts-banner.png' },
        juices: { title: 'Cold Pressed Juices', description: 'Fresh, natural juices with no added sugar or preservatives.', banner: 'images/categories/juices-banner.png' },
        bakery: { title: 'Artisan Bakery', description: 'Freshly baked goods made with organic ingredients.', banner: 'images/categories/bakery-banner.png' }
    };
    
    if (categoryInfo[category]) {
        if (categoryTitle) categoryTitle.textContent = categoryInfo[category].title;
        if (categoryDescription) categoryDescription.textContent = categoryInfo[category].description;
        // Update banner image
        const bannerImg = document.querySelector('.category-banner-img');
        if (bannerImg) bannerImg.src = '../' + categoryInfo[category].banner;
    }
    
    const categoryProducts = getProductsByCategory(category);
    renderProducts(categoryProducts, categoryContainer);
    setupProductFilters();
}

// Render products helper
function renderProducts(productsList, container) {
    if (productsList.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted">No products found.</p>
                <button class="btn btn-outline-dark rounded-pill" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
    } else {
        container.innerHTML = productsList.map(p => createProductCard(p)).join('');
    }
}

// Setup product filters
function setupProductFilters() {
    const sortSelect = document.getElementById('sortSelect');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const inStockCheck = document.getElementById('inStockCheck');
    const onSaleCheck = document.getElementById('onSaleCheck');
    
    const applyFilters = () => {
        const productsContainer = document.getElementById('allProducts') || document.getElementById('categoryProducts');
        if (!productsContainer) return;
        
        let filtered = [...products];
        
        // Get current category if on category page
        const path = window.location.pathname;
        const categoryMatch = path.match(/category-(\w+)\.html/);
        if (categoryMatch) {
            filtered = filtered.filter(p => p.category === categoryMatch[1]);
        }
        
        // Apply price filter
        const min = priceMin ? parseFloat(priceMin.value) || 0 : 0;
        const max = priceMax ? parseFloat(priceMax.value) || 10000 : 10000;
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
        
        // Apply stock filter
        if (inStockCheck && inStockCheck.checked) {
            filtered = filtered.filter(p => p.inStock);
        }
        
        // Apply sale filter
        if (onSaleCheck && onSaleCheck.checked) {
            filtered = filtered.filter(p => p.isOnSale);
        }
        
        // Apply sorting
        if (sortSelect) {
            switch (sortSelect.value) {
                case 'price-low':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'rating':
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                case 'newest':
                    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                    break;
            }
        }
        
        renderProducts(filtered, productsContainer);
        
        const productCount = document.getElementById('productCount');
        if (productCount) {
            productCount.textContent = `${filtered.length} products`;
        }
    };
    
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (priceMin) priceMin.addEventListener('input', applyFilters);
    if (priceMax) priceMax.addEventListener('input', applyFilters);
    if (inStockCheck) inStockCheck.addEventListener('change', applyFilters);
    if (onSaleCheck) onSaleCheck.addEventListener('change', applyFilters);
}

// Clear filters
function clearFilters() {
    const sortSelect = document.getElementById('sortSelect');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const inStockCheck = document.getElementById('inStockCheck');
    const onSaleCheck = document.getElementById('onSaleCheck');
    
    if (sortSelect) sortSelect.value = 'featured';
    if (priceMin) priceMin.value = '';
    if (priceMax) priceMax.value = '';
    if (inStockCheck) inStockCheck.checked = false;
    if (onSaleCheck) onSaleCheck.checked = false;
    
    // Re-apply filters
    const event = new Event('change');
    if (sortSelect) sortSelect.dispatchEvent(event);
}

// Product Detail Page
function initProductDetailPage() {
    const productDetailContainer = document.getElementById('productDetail');
    if (!productDetailContainer) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
    
    if (!product) {
        productDetailContainer.innerHTML = `
            <div class="text-center py-5">
                <h2>Product Not Found</h2>
                <a href="products.html" class="btn btn-primary mt-3">Browse Products</a>
            </div>
        `;
        return;
    }
    
    // Update page title
    document.title = `${product.name} - Qnicel`;
    
    // Update breadcrumb
    const breadcrumbName = document.getElementById('breadcrumbName');
    if (breadcrumbName) breadcrumbName.textContent = product.name;
    
    // Render product detail
    const inWishlist = isInWishlist(product.id);
    const badgeHtml = product.badge ? `<span class="product-badge ${product.discount ? 'sale' : 'new'}">${product.badge}</span>` : '';
    const originalPriceHtml = product.originalPrice ? `<span class="text-muted text-decoration-line-through ms-2">${formatPrice(product.originalPrice)}</span>` : '';
    const discountHtml = product.discount ? `<span class="badge bg-danger ms-2">-${product.discount}%</span>` : '';
    
    productDetailContainer.innerHTML = `
        <div class="row g-5">
            <div class="col-lg-6">
                <div class="product-gallery">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" class="img-fluid" id="mainImage">
                </div>
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold mb-3">${product.name}</h1>
                <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="rating-stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="text-muted">(${product.reviews} reviews)</span>
                </div>
                <div class="mb-4">
                    <span class="display-6 fw-bold text-warning">${formatPrice(product.price)}</span>
                    ${originalPriceHtml}
                    ${discountHtml}
                </div>
                <p class="text-muted mb-4">${product.description}</p>
                
                <div class="d-flex align-items-center gap-3 mb-4">
                    <span class="fw-medium">Quantity:</span>
                    <div class="quantity-control">
                        <button onclick="updateDetailQuantity(-1)"><i class="bi bi-dash"></i></button>
                        <span id="detailQuantity">1</span>
                        <button onclick="updateDetailQuantity(1)"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
                
                <div class="d-flex gap-3 mb-4">
                    <button class="btn btn-warning btn-lg rounded-pill flex-grow-1" onclick="addDetailToCart()">
                        <i class="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-outline-warning btn-lg rounded-pill" onclick="buyNow()">
                        Buy Now
                    </button>
                    <button class="btn btn-outline-danger btn-lg rounded-circle ${inWishlist ? 'active' : ''}" id="detailWishlistBtn" onclick="toggleDetailWishlist()">
                        <i class="bi bi-heart${inWishlist ? '-fill' : ''}"></i>
                    </button>
                </div>
                
                <div class="row g-3">
                    <div class="col-4 text-center p-3 bg-light rounded">
                        <i class="bi bi-truck fs-4 text-success mb-2 d-block"></i>
                        <small class="text-muted">Free Delivery</small>
                    </div>
                    <div class="col-4 text-center p-3 bg-light rounded">
                        <i class="bi bi-shield-check fs-4 text-success mb-2 d-block"></i>
                        <small class="text-muted">Quality Guaranteed</small>
                    </div>
                    <div class="col-4 text-center p-3 bg-light rounded">
                        <i class="bi bi-arrow-return-left fs-4 text-success mb-2 d-block"></i>
                        <small class="text-muted">Easy Returns</small>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Tabs -->
        <div class="mt-5">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#description">Description</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nutrition">Nutritional Info</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button>
                </li>
            </ul>
            <div class="tab-content p-4 border border-top-0 rounded-bottom">
                <div class="tab-pane fade show active" id="description">
                    <p>${product.description}</p>
                    <ul class="list-unstyled mt-3">
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>100% Organic and certified</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>No artificial preservatives</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Sourced from sustainable farms</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Freshly packed for maximum quality</li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="nutrition">
                    <p>${product.nutritionalInfo}</p>
                    <div class="row g-3 mt-3">
                        <div class="col-6 col-md-3">
                            <div class="bg-light p-3 rounded text-center">
                                <span class="d-block fs-4 fw-bold">120</span>
                                <small class="text-muted">Calories</small>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="bg-light p-3 rounded text-center">
                                <span class="d-block fs-4 fw-bold">5g</span>
                                <small class="text-muted">Protein</small>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="bg-light p-3 rounded text-center">
                                <span class="d-block fs-4 fw-bold">2g</span>
                                <small class="text-muted">Fiber</small>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="bg-light p-3 rounded text-center">
                                <span class="d-block fs-4 fw-bold">0g</span>
                                <small class="text-muted">Added Sugar</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="reviews">
                    <div class="mb-4">
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <div class="rating-stars">${generateStars(5)}</div>
                            <span>Excellent product!</span>
                        </div>
                        <p class="text-muted">Sarah M. - 2024-02-15</p>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <div class="rating-stars">${generateStars(4)}</div>
                            <span>Great quality</span>
                        </div>
                        <p class="text-muted">John D. - 2024-02-10</p>
                    </div>
                    <hr>
                    <h5>Write a Review</h5>
                    <textarea class="form-control mb-3" rows="3" placeholder="Share your experience..."></textarea>
                    <button class="btn btn-primary">Submit Review</button>
                </div>
            </div>
        </div>
        
        <!-- Related Products -->
        <div class="mt-5">
            <h3 class="mb-4">You May Also Like</h3>
            <div class="row g-4" id="relatedProducts"></div>
        </div>
    `;
    
    // Render related products
    const relatedContainer = document.getElementById('relatedProducts');
    if (relatedContainer) {
        const relatedProducts = getRelatedProducts(product.category, product.id);
        relatedContainer.innerHTML = relatedProducts.map(p => createProductCard(p)).join('');
    }
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="bi bi-star-fill"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="bi bi-star-half"></i>';
        } else {
            stars += '<i class="bi bi-star"></i>';
        }
    }
    return stars;
}

// Detail page quantity
let detailQuantity = 1;
function updateDetailQuantity(change) {
    detailQuantity = Math.max(1, detailQuantity + change);
    const qtyEl = document.getElementById('detailQuantity');
    if (qtyEl) qtyEl.textContent = detailQuantity;
}

// Add to cart from detail page
function addDetailToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    addToCart(productId, detailQuantity);
}

// Buy now
function buyNow() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    addToCart(productId, detailQuantity);
    window.location.href = 'cart.html';
}

// Toggle wishlist from detail page
function toggleDetailWishlist() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const added = toggleWishlist(productId);
    const btn = document.getElementById('detailWishlistBtn');
    const icon = btn.querySelector('i');
    if (added) {
        btn.classList.add('active');
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
    } else {
        btn.classList.remove('active');
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
    }
}

// Cart Page
function initCartPage() {
    const cartContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.classList.remove('d-none');
        if (cartContent) cartContent.classList.add('d-none');
        return;
    }
    
    if (emptyCart) emptyCart.classList.add('d-none');
    if (cartContent) cartContent.classList.remove('d-none');
    
    renderCartItems();
    updateCartSummary();
}

// Render cart items
function renderCartItems() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.productId}">
            <div class="row align-items-center">
                <div class="col-md-2 mb-3 mb-md-0">
                    <div class="cart-item-image">
                        <img src="${item.product.image}" alt="${item.product.name}">
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <h5 class="mb-1">${item.product.name}</h5>
                    <p class="text-muted mb-0">${item.product.weight}</p>
                </div>
                <div class="col-md-3 mb-3 mb-md-0">
                    <div class="quantity-control d-inline-flex">
                        <button onclick="updateCartItemQuantity('${item.productId}', -1)"><i class="bi bi-dash"></i></button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartItemQuantity('${item.productId}', 1)"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
                <div class="col-md-2 text-md-end mb-3 mb-md-0">
                    <span class="fw-bold text-warning">${formatPrice(item.product.price * item.quantity)}</span>
                    ${item.product.originalPrice ? `<span class="text-muted text-decoration-line-through d-block small">${formatPrice(item.product.originalPrice * item.quantity)}</span>` : ''}
                </div>
                <div class="col-md-1 text-md-end">
                    <button class="btn btn-link text-danger" onclick="removeCartItem('${item.productId}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(i => i.productId === productId);
    if (item) {
        updateCartQuantity(productId, item.quantity + change);
        renderCartItems();
        updateCartSummary();
    }
}

// Remove cart item
function removeCartItem(productId) {
    removeFromCart(productId);
    renderCartItems();
    updateCartSummary();
    
    if (cart.length === 0) {
        const emptyCart = document.getElementById('emptyCart');
        const cartContent = document.getElementById('cartContent');
        if (emptyCart) emptyCart.classList.remove('d-none');
        if (cartContent) cartContent.classList.add('d-none');
    }
}

// Update cart summary
function updateCartSummary() {
    const { subtotal, discount, total } = getCartTotals();
    
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountEl = document.getElementById('cartDiscount');
    const totalEl = document.getElementById('cartTotal');
    const couponSection = document.getElementById('couponSection');
    const discountRow = document.getElementById('discountRow');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (discountEl) discountEl.textContent = '-' + formatPrice(discount);
    if (discountRow) discountRow.style.display = discount > 0 ? 'flex' : 'none';
    if (totalEl) totalEl.textContent = formatPrice(total);
    
    if (couponSection) {
        if (appliedCoupon) {
            couponSection.innerHTML = `
                <div class="coupon-applied">
                    <span><i class="bi bi-tag-fill me-2"></i>${appliedCoupon}</span>
                    <button class="btn btn-link text-danger p-0" onclick="removeAppliedCoupon()">Remove</button>
                </div>
            `;
        } else {
            couponSection.innerHTML = `
                <div class="coupon-box" onclick="showCouponModal()">
                    <i class="bi bi-tag me-2"></i>Apply Coupon
                </div>
            `;
        }
    }
}

// Show coupon modal
function showCouponModal() {
    const modal = new bootstrap.Modal(document.getElementById('couponModal'));
    modal.show();
}

// Apply coupon from modal
function applyCouponCode() {
    const input = document.getElementById('couponInput');
    const code = input.value.trim();
    
    if (!code) {
        showToast('Please enter a coupon code', 'error');
        return;
    }
    
    if (applyCoupon(code)) {
        showToast(`Coupon ${code} applied successfully!`, 'success');
        updateCartSummary();
        bootstrap.Modal.getInstance(document.getElementById('couponModal')).hide();
        input.value = '';
    } else {
        showToast('Invalid coupon code', 'error');
    }
}

// Remove applied coupon
function removeAppliedCoupon() {
    removeCoupon();
    showToast('Coupon removed', 'info');
    updateCartSummary();
}

// Wishlist Page
function initWishlistPage() {
    const wishlistContainer = document.getElementById('wishlistItems');
    const emptyWishlist = document.getElementById('emptyWishlist');
    const wishlistContent = document.getElementById('wishlistContent');
    
    if (!wishlistContainer) return;
    
    if (wishlist.length === 0) {
        if (emptyWishlist) emptyWishlist.classList.remove('d-none');
        if (wishlistContent) wishlistContent.classList.add('d-none');
        return;
    }
    
    if (emptyWishlist) emptyWishlist.classList.add('d-none');
    if (wishlistContent) wishlistContent.classList.remove('d-none');
    
    const wishlistProducts = wishlist.map(id => getProductById(id)).filter(p => p);
    
    wishlistContainer.innerHTML = wishlistProducts.map(product => `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="product-card wishlist-card">
                <button class="remove-btn" onclick="removeWishlistItem('${product.id}')">
                    <i class="bi bi-x"></i>
                </button>
                <a href="product-detail.html?id=${product.id}" class="product-image d-block position-relative">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<span class="product-badge ${product.discount ? 'sale' : 'new'}">${product.badge}</span>` : ''}
                </a>
                <div class="product-content">
                    <a href="product-detail.html?id=${product.id}">
                        <h4 class="product-name">${product.name}</h4>
                    </a>
                    <p class="product-weight">${product.weight}</p>
                    <div class="product-footer">
                        <div>
                            <span class="product-price">${formatPrice(product.price)}</span>
                            ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                        </div>
                    </div>
                    <button class="btn btn-warning w-100 rounded-pill mt-3" onclick="moveToCart('${product.id}')">
                        <i class="bi bi-cart-plus me-2"></i>Move to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Remove wishlist item
function removeWishlistItem(productId) {
    removeFromWishlist(productId);
    initWishlistPage();
}

// Move to cart
function moveToCart(productId) {
    addToCart(productId, 1);
    removeFromWishlist(productId);
    initWishlistPage();
}

// Profile Page
function initProfilePage() {
    const ordersContainer = document.getElementById('ordersList');
    if (!ordersContainer) return;
    
    // Load user data
    const user = JSON.parse(localStorage.getItem('qnicel_user')) || {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 98765 43210',
        addresses: ['123 Organic Street, Green City, Mumbai 400001']
    };
    
    // Update profile info
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    if (profileName) profileName.textContent = user.name;
    if (profileEmail) profileEmail.textContent = user.email;
    
    // Load orders
    const orders = JSON.parse(localStorage.getItem('qnicel_orders')) || sampleOrders;
    
    if (orders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-bag fs-1 text-muted mb-3 d-block"></i>
                <h5>No Orders Yet</h5>
                <p class="text-muted">Start shopping to see your orders here</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }
    
    const statusLabels = {
        placed: 'Order Placed',
        packed: 'Packed',
        shipped: 'Shipped',
        out_for_delivery: 'Out for Delivery',
        delivered: 'Delivered'
    };
    
    const statusClasses = {
        placed: 'placed',
        packed: 'packed',
        shipped: 'shipped',
        out_for_delivery: 'out_for_delivery',
        delivered: 'delivered'
    };
    
    ordersContainer.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="row align-items-center mb-3">
                <div class="col-md-3">
                    <p class="text-muted mb-1">Order ID</p>
                    <p class="fw-bold mb-0">${order.id}</p>
                </div>
                <div class="col-md-3">
                    <p class="text-muted mb-1">Date</p>
                    <p class="fw-bold mb-0">${order.date}</p>
                </div>
                <div class="col-md-3">
                    <p class="text-muted mb-1">Total</p>
                    <p class="fw-bold text-warning mb-0">${formatPrice(order.total)}</p>
                </div>
                <div class="col-md-3 text-md-end">
                    <span class="order-status ${statusClasses[order.status]}">${statusLabels[order.status]}</span>
                </div>
            </div>
            <hr>
            <div class="mb-3">
                <p class="text-muted mb-2">Items:</p>
                ${order.items.map(item => `
                    <div class="d-flex justify-content-between small">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>${formatPrice(item.price * item.quantity)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="d-flex gap-2">
                <a href="order-tracking.html?id=${order.id}" class="btn btn-outline-primary btn-sm">Track Order</a>
                <button class="btn btn-outline-secondary btn-sm">View Details</button>
            </div>
        </div>
    `).join('');
    
    // Load addresses
    const addressesContainer = document.getElementById('addressesList');
    if (addressesContainer) {
        addressesContainer.innerHTML = user.addresses.map((addr, idx) => `
            <div class="d-flex align-items-start gap-3 p-3 border rounded mb-2">
                <i class="bi bi-geo-alt text-success mt-1"></i>
                <div class="flex-grow-1">
                    <p class="fw-medium mb-1">Address ${idx + 1}</p>
                    <p class="text-muted mb-0">${addr}</p>
                </div>
                <button class="btn btn-link text-muted p-0"><i class="bi bi-pencil"></i></button>
            </div>
        `).join('');
    }
}

// Checkout Page
function initCheckoutPage() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (!checkoutForm) return;
    
    // Pre-fill user data
    const user = JSON.parse(localStorage.getItem('qnicel_user')) || {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 98765 43210'
    };
    
    document.getElementById('fullName').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    
    // Update order summary
    const { total } = getCartTotals();
    const totalEl = document.getElementById('checkoutTotal');
    if (totalEl) totalEl.textContent = formatPrice(total);
    
    // Handle form submission
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Create order
        const orderId = 'ORD-' + Date.now();
        const newOrder = {
            id: orderId,
            date: new Date().toISOString().split('T')[0],
            items: cart.map(item => ({
                name: item.product.name,
                quantity: item.quantity,
                price: item.product.price
            })),
            total: total,
            status: 'placed',
            address: document.getElementById('address').value
        };
        
        // Save order
        const orders = JSON.parse(localStorage.getItem('qnicel_orders')) || sampleOrders;
        orders.unshift(newOrder);
        localStorage.setItem('qnicel_orders', JSON.stringify(orders));
        
        // Clear cart
        clearCart();
        
        // Show success modal
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
    });
}

// Newsletter Form
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Thank you for subscribing!', 'success');
            form.reset();
        });
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('navSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}
