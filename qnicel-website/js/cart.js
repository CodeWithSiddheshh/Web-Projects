// ============================================
// Qnicel - Cart & Wishlist Management (Indian Rupees)
// ============================================

// Cart State
let cart = JSON.parse(localStorage.getItem('qnicel_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('qnicel_wishlist')) || [];
let appliedCoupon = localStorage.getItem('qnicel_coupon') || null;

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('qnicel_cart', JSON.stringify(cart));
    updateCartCount();
}

// Save wishlist to localStorage
function saveWishlist() {
    localStorage.setItem('qnicel_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

// Save coupon to localStorage
function saveCoupon() {
    if (appliedCoupon) {
        localStorage.setItem('qnicel_coupon', appliedCoupon);
    } else {
        localStorage.removeItem('qnicel_coupon');
    }
}

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;
    
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            product: product
        });
    }
    
    saveCart();
    showToast(`${product.name} added to cart!`, 'success');
    return true;
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
        }
    }
}

// Clear cart
function clearCart() {
    cart = [];
    appliedCoupon = null;
    saveCart();
    saveCoupon();
}

// Add to wishlist
function addToWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return false;
    
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        saveWishlist();
        showToast(`${product.name} added to wishlist!`, 'success');
        return true;
    }
    return false;
}

// Remove from wishlist
function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    saveWishlist();
    const product = getProductById(productId);
    if (product) {
        showToast(`${product.name} removed from wishlist`, 'info');
    }
}

// Toggle wishlist
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        removeFromWishlist(productId);
        return false;
    } else {
        addToWishlist(productId);
        return true;
    }
}

// Check if in wishlist
function isInWishlist(productId) {
    return wishlist.includes(productId);
}

// Apply coupon
function applyCoupon(code) {
    const upperCode = code.toUpperCase();
    if (coupons[upperCode]) {
        appliedCoupon = upperCode;
        saveCoupon();
        return true;
    }
    return false;
}

// Remove coupon
function removeCoupon() {
    appliedCoupon = null;
    saveCoupon();
}

// Get cart totals
function getCartTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.product.price * item.quantity;
    });
    
    let discount = 0;
    if (appliedCoupon && coupons[appliedCoupon]) {
        discount = (subtotal * coupons[appliedCoupon]) / 100;
    }
    
    const total = subtotal - discount;
    
    return { subtotal, discount, total };
}

// Update cart count badge
function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

// Update wishlist count badge
function updateWishlistCount() {
    const countElements = document.querySelectorAll('.wishlist-count');
    countElements.forEach(el => {
        el.textContent = wishlist.length;
        el.style.display = wishlist.length > 0 ? 'block' : 'none';
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) return;
    
    const toastId = 'toast-' + Date.now();
    const bgClass = type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : '';
    const iconClass = type === 'success' ? 'bi-check-circle-fill text-success' : type === 'error' ? 'bi-x-circle-fill text-danger' : 'bi-info-circle-fill text-info';
    
    const toastHtml = `
        <div id="${toastId}" class="toast ${bgClass} align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body d-flex align-items-center gap-2">
                    <i class="bi ${iconClass}"></i>
                    ${message}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
    
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

// Create product card HTML
function createProductCard(product, showAddToCart = true) {
    const inWishlist = isInWishlist(product.id);
    const badgeHtml = product.badge ? `<span class="product-badge ${product.discount ? 'sale' : product.isNew ? 'new' : ''}">${product.badge}</span>` : '';
    const originalPriceHtml = product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : '';
    
    return `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="product-card">
                <a href="product-detail.html?id=${product.id}" class="product-image d-block position-relative">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${badgeHtml}
                    <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="event.preventDefault(); toggleWishlist('${product.id}'); this.classList.toggle('active');">
                        <i class="bi bi-heart${inWishlist ? '-fill' : ''}"></i>
                    </button>
                </a>
                <div class="product-content">
                    <a href="product-detail.html?id=${product.id}">
                        <h4 class="product-name">${product.name}</h4>
                    </a>
                    <p class="product-weight">${product.weight}</p>
                    <div class="product-footer">
                        <div>
                            <span class="product-price">${formatPrice(product.price)}</span>
                            ${originalPriceHtml}
                        </div>
                        ${showAddToCart ? `
                        <button class="btn-add-cart" onclick="addToCart('${product.id}', 1)">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
});
