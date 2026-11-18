// ============================================
// Veloura Coffee - UI Interactions & Utilities
// ============================================

// ============================================
// Search Functionality
// ============================================

let searchTimeout;

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(this.value);
    }, 300);
  });
}

function performSearch(query) {
  const productsContainer = document.getElementById('productsContainer');
  const noResults = document.getElementById('noResults');
  
  if (!productsContainer) return;

  const filteredProducts = searchProducts(query);
  
  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
  } else {
    if (noResults) noResults.style.display = 'none';
    renderProducts(filteredProducts, productsContainer);
  }
}

// ============================================
// Category Filter Functionality
// ============================================

let currentFilter = 'all';

function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Apply filter
      const category = this.dataset.category;
      currentFilter = category;
      filterProducts(category);
    });
  });
}

function filterProducts(category) {
  const productsContainer = document.getElementById('productsContainer');
  const noResults = document.getElementById('noResults');
  const searchInput = document.getElementById('searchInput');
  
  if (!productsContainer) return;

  // Get search query if exists
  const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
  
  // Filter products
  let filteredProducts = category === 'all' ? products : getProductsByCategory(category);
  
  // Apply search if query exists
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
    );
  }
  
  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
  } else {
    if (noResults) noResults.style.display = 'none';
    renderProducts(filteredProducts, productsContainer);
  }
}

// ============================================
// Product Rendering
// ============================================

function renderProducts(productsToRender, container) {
  if (!container) return;

  container.innerHTML = productsToRender.map(product => `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="product-card">
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          <div class="product-overlay">
            <a href="product-details.html?id=${product.id}" class="btn btn-gold btn-sm">
              <i class="bi bi-eye"></i> View
            </a>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id}, 1)">
              <i class="bi bi-cart-plus"></i> Add
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${getCategoryName(product.category)}</span>
          <h5 class="product-name">${product.name}</h5>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <a href="product-details.html?id=${product.id}" class="btn btn-outline-gold btn-sm">Details</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProductsContainer');
  if (!container) return;

  const featuredProducts = getFeaturedProducts(8);
  renderProducts(featuredProducts, container);
}

function renderAllProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  renderProducts(products, container);
}

// ============================================
// Product Details Page
// ============================================

function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    showToast('Product not found', 'error');
    window.location.href = 'menu.html';
    return;
  }

  const product = getProductById(productId);
  
  if (!product) {
    showToast('Product not found', 'error');
    window.location.href = 'menu.html';
    return;
  }

  // Update page title
  document.title = `${product.name} - Veloura Coffee`;

  // Render product details
  const detailsContainer = document.getElementById('productDetailsContainer');
  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="product-details-image">
            <img src="${product.image}" alt="${product.name}" class="img-fluid">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-details-info">
            <span class="product-details-category">${getCategoryName(product.category)}</span>
            <h1 class="product-details-name">${product.name}</h1>
            <p class="product-details-price">$${product.price.toFixed(2)}</p>
            <p class="product-details-description">${product.description}</p>
            
            <div class="quantity-selector">
              <label>Quantity:</label>
              <div class="quantity-controls">
                <button onclick="updateDetailQuantity(-1)" aria-label="Decrease quantity">
                  <i class="bi bi-dash"></i>
                </button>
                <input type="number" id="detailQuantity" value="1" min="1" max="99" readonly>
                <button onclick="updateDetailQuantity(1)" aria-label="Increase quantity">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
            
            <button class="btn btn-primary btn-lg" onclick="addDetailToCart(${product.id})">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Render related products
  renderRelatedProducts(productId);
}

let detailQuantity = 1;

function updateDetailQuantity(change) {
  detailQuantity += change;
  if (detailQuantity < 1) detailQuantity = 1;
  if (detailQuantity > 99) detailQuantity = 99;
  
  const quantityInput = document.getElementById('detailQuantity');
  if (quantityInput) {
    quantityInput.value = detailQuantity;
  }
}

function addDetailToCart(productId) {
  addToCart(productId, detailQuantity);
  detailQuantity = 1;
  const quantityInput = document.getElementById('detailQuantity');
  if (quantityInput) {
    quantityInput.value = 1;
  }
}

function renderRelatedProducts(productId) {
  const container = document.getElementById('relatedProductsContainer');
  if (!container) return;

  const relatedProducts = getRelatedProducts(productId, 4);
  
  if (relatedProducts.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">No related products found</p>';
    return;
  }

  renderProducts(relatedProducts, container);
}

// ============================================
// Contact Form Validation
// ============================================

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateContactForm()) {
      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="loading"></span> Sending...';
      
      setTimeout(() => {
        showToast('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1500);
    }
  });
}

function validateContactForm() {
  const name = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const subject = document.getElementById('contactSubject');
  const message = document.getElementById('contactMessage');
  
  let isValid = true;

  // Reset errors
  clearFormErrors();

  // Validate name
  if (!name || name.value.trim().length < 2) {
    showFieldError(name, 'Please enter your name (at least 2 characters)');
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.value.trim())) {
    showFieldError(email, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate subject
  if (!subject || subject.value.trim().length < 3) {
    showFieldError(subject, 'Please enter a subject (at least 3 characters)');
    isValid = false;
  }

  // Validate message
  if (!message || message.value.trim().length < 10) {
    showFieldError(message, 'Please enter a message (at least 10 characters)');
    isValid = false;
  }

  return isValid;
}

function showFieldError(field, message) {
  if (!field) return;
  
  field.classList.add('is-invalid');
  
  // Check if error message already exists
  let errorDiv = field.parentNode.querySelector('.invalid-feedback');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    field.parentNode.appendChild(errorDiv);
  }
  errorDiv.textContent = message;
}

function clearFormErrors() {
  const invalidFields = document.querySelectorAll('.is-invalid');
  invalidFields.forEach(field => field.classList.remove('is-invalid'));
}

// ============================================
// Navbar Scroll Effect
// ============================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.style.padding = '10px 0';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.padding = '15px 0';
    }
  });
}

// ============================================
// Scroll to Top Button
// ============================================

function initScrollToTop() {
  // Create button if it doesn't exist
  let scrollBtn = document.getElementById('scrollToTop');
  if (!scrollBtn) {
    scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
  }

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// Animation on Scroll
// ============================================

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.feature-card, .product-card, .mission-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ============================================
// Initialize All Functions on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize common features
  initNavbarScroll();
  initScrollToTop();
  initSmoothScroll();
  initScrollAnimations();
  
  // Initialize page-specific features
  const currentPage = window.location.pathname.split('/').pop();
  
  switch(currentPage) {
    case 'index.html':
    case '':
    case '/':
      renderFeaturedProducts();
      break;
      
    case 'menu.html':
      renderAllProducts();
      initSearch();
      initCategoryFilters();
      break;
      
    case 'product-details.html':
      loadProductDetails();
      break;
      
    case 'contact.html':
      initContactForm();
      break;
  }
});

// ============================================
// Utility Functions
// ============================================

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format currency
function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initSearch,
    initCategoryFilters,
    renderProducts,
    renderFeaturedProducts,
    loadProductDetails,
    initContactForm,
    formatCurrency,
    debounce
  };
}
