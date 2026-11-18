// ============================================
// Veloura Coffee - Shopping Cart System
// Full localStorage Implementation
// ============================================

// Cart key for localStorage
const CART_KEY = 'veloura_cart';

// Initialize cart from localStorage
function getCart() {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
}

// Save cart to localStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    return true;
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
    return false;
  }
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) {
    showToast('Product not found', 'error');
    return false;
  }

  let cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
    showToast(`Updated ${product.name} quantity in cart`, 'success');
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity
    });
    showToast(`${product.name} added to cart`, 'success');
  }

  saveCart(cart);
  return true;
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (!item) {
    showToast('Item not found in cart', 'error');
    return false;
  }

  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  showToast(`${item.name} removed from cart`, 'info');
  return true;
}

// Update item quantity
function updateQuantity(productId, quantity) {
  if (quantity < 1) {
    removeFromCart(productId);
    return true;
  }

  let cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (!item) {
    showToast('Item not found in cart', 'error');
    return false;
  }

  item.quantity = quantity;
  saveCart(cart);
  return true;
}

// Increase quantity by 1
function increaseQuantity(productId) {
  let cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (item) {
    item.quantity += 1;
    saveCart(cart);
    return true;
  }
  return false;
}

// Decrease quantity by 1
function decreaseQuantity(productId) {
  let cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      saveCart(cart);
      return true;
    } else {
      return removeFromCart(productId);
    }
  }
  return false;
}

// Get cart total
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Get cart items with full details
function getCartItems() {
  return getCart();
}

// Clear entire cart
function clearCart() {
  saveCart([]);
  showToast('Cart cleared', 'info');
  return true;
}

// Check if cart is empty
function isCartEmpty() {
  return getCart().length === 0;
}

// Update cart badge in navbar
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartItemCount();
  
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Render cart table (for cart.html)
function renderCart() {
  const cartTableBody = document.getElementById('cartTableBody');
  const cartSummary = document.getElementById('cartSummary');
  const emptyCart = document.getElementById('emptyCart');
  const cartContent = document.getElementById('cartContent');

  if (!cartTableBody) return;

  const cart = getCart();

  // Show empty cart state
  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = 'block';
    if (cartContent) cartContent.style.display = 'none';
    return;
  }

  // Show cart content
  if (emptyCart) emptyCart.style.display = 'none';
  if (cartContent) cartContent.style.display = 'block';

  // Render cart items
  cartTableBody.innerHTML = cart.map(item => `
    <tr>
      <td data-label="Product">
        <div class="cart-product">
          <img src="${item.image}" alt="${item.name}" class="cart-product-image">
          <div class="cart-product-info">
            <h5>${item.name}</h5>
            <span>${getCategoryName(item.category)}</span>
          </div>
        </div>
      </td>
      <td data-label="Price" class="cart-price">$${item.price.toFixed(2)}</td>
      <td data-label="Quantity">
        <div class="cart-quantity">
          <button onclick="decreaseQuantity(${item.id}); renderCart();" aria-label="Decrease quantity">
            <i class="bi bi-dash"></i>
          </button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id}); renderCart();" aria-label="Increase quantity">
            <i class="bi bi-plus"></i>
          </button>
        </div>
      </td>
      <td data-label="Subtotal" class="cart-subtotal">$${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button class="remove-btn" onclick="removeFromCart(${item.id}); renderCart();" aria-label="Remove item">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');

  // Update cart summary
  updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
  const subtotalElement = document.getElementById('cartSubtotal');
  const taxElement = document.getElementById('cartTax');
  const totalElement = document.getElementById('cartTotal');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
  if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Toast notification system
function showToast(message, type = 'info') {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => toast.remove());

  // Create toast container if it doesn't exist
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Icon based on type
  let icon = 'bi-info-circle';
  if (type === 'success') icon = 'bi-check-circle';
  if (type === 'error') icon = 'bi-x-circle';

  toast.innerHTML = `
    <i class="bi ${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
  
  // Render cart if on cart page
  if (document.getElementById('cartTableBody')) {
    renderCart();
  }
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getCart,
    saveCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
    getCartItemCount,
    getCartItems,
    clearCart,
    isCartEmpty,
    updateCartBadge,
    renderCart,
    showToast
  };
}
