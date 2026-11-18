// ============================================
// Qnicel - Product Data (Indian Rupees)
// ============================================

const products = [
    // Trending Products
    {
        id: 't1',
        name: 'Fresh Strawberries',
        price: 299,
        originalPrice: null,
        weight: '500g pack',
        category: 'fruits',
        image: 'images/products/strawberries.png',
        badge: 'New',
        discount: null,
        description: 'Sweet and juicy organic strawberries, handpicked at peak ripeness.',
        nutritionalInfo: 'Rich in Vitamin C, antioxidants, and fiber.',
        inStock: true,
        rating: 4.8,
        reviews: 128,
        isNew: true,
        isTrending: true,
        isOnSale: false
    },
    {
        id: 't2',
        name: 'Premium Mixed Nuts',
        price: 549,
        originalPrice: 649,
        weight: '750g pack',
        category: 'nuts',
        image: 'images/products/mixed-nuts.png',
        badge: '-15%',
        discount: 15,
        description: 'A delicious blend of almonds, cashews, walnuts, and pistachios.',
        nutritionalInfo: 'High in protein, healthy fats, and essential minerals.',
        inStock: true,
        rating: 4.9,
        reviews: 256,
        isNew: false,
        isTrending: true,
        isOnSale: true
    },
    {
        id: 't3',
        name: 'Organic Whole Grain Bread',
        price: 149,
        originalPrice: null,
        weight: '400g loaf',
        category: 'bakery',
        image: 'images/products/bread.png',
        badge: null,
        discount: null,
        description: 'Freshly baked whole grain bread with no preservatives.',
        nutritionalInfo: 'High in fiber and whole grains.',
        inStock: true,
        rating: 4.7,
        reviews: 89,
        isNew: false,
        isTrending: true,
        isOnSale: false
    },
    {
        id: 't4',
        name: 'Fresh Blueberries',
        price: 399,
        originalPrice: null,
        weight: '300g pack',
        category: 'fruits',
        image: 'images/products/blueberries.png',
        badge: 'New',
        discount: null,
        description: 'Plump, sweet blueberries perfect for snacking or baking.',
        nutritionalInfo: 'Packed with antioxidants and Vitamin K.',
        inStock: true,
        rating: 4.9,
        reviews: 167,
        isNew: true,
        isTrending: true,
        isOnSale: false
    },
    {
        id: 't5',
        name: 'Almond Butter',
        price: 449,
        originalPrice: null,
        weight: '350g jar',
        category: 'nuts',
        image: 'images/products/almond-butter.png',
        badge: null,
        discount: null,
        description: 'Creamy, all-natural almond butter with no added sugar.',
        nutritionalInfo: 'Excellent source of protein and healthy fats.',
        inStock: true,
        rating: 4.8,
        reviews: 203,
        isNew: false,
        isTrending: true,
        isOnSale: false
    },
    {
        id: 't6',
        name: 'Cold Pressed Orange Juice',
        price: 199,
        originalPrice: null,
        weight: '1L bottle',
        category: 'juices',
        image: 'images/products/orange-juice.png',
        badge: 'Fresh',
        discount: null,
        description: '100% pure orange juice, cold-pressed daily for maximum freshness.',
        nutritionalInfo: 'Rich in Vitamin C and natural electrolytes.',
        inStock: true,
        rating: 4.7,
        reviews: 145,
        isNew: false,
        isTrending: true,
        isOnSale: false
    },

    // Super Sale Products
    {
        id: 's1',
        name: 'Organic Bananas',
        price: 89,
        originalPrice: 129,
        weight: '1kg bunch',
        category: 'fruits',
        image: 'images/products/bananas.png',
        badge: '-31%',
        discount: 31,
        description: 'Ripe, organic bananas perfect for smoothies or snacking.',
        nutritionalInfo: 'Great source of potassium and natural energy.',
        inStock: true,
        rating: 4.6,
        reviews: 312,
        isNew: false,
        isTrending: false,
        isOnSale: true
    },
    {
        id: 's2',
        name: 'Walnuts Premium',
        price: 399,
        originalPrice: 499,
        weight: '500g pack',
        category: 'nuts',
        image: 'images/products/walnuts.png',
        badge: '-20%',
        discount: 20,
        description: 'Premium quality walnuts, perfect for baking or snacking.',
        nutritionalInfo: 'High in Omega-3 fatty acids and antioxidants.',
        inStock: true,
        rating: 4.8,
        reviews: 178,
        isNew: false,
        isTrending: false,
        isOnSale: true
    },
    {
        id: 's3',
        name: 'Green Apple Juice',
        price: 149,
        originalPrice: 199,
        weight: '750ml bottle',
        category: 'juices',
        image: 'images/products/green-apple-juice.png',
        badge: '-25%',
        discount: 25,
        description: 'Refreshing green apple juice with no added sugar.',
        nutritionalInfo: 'Rich in antioxidants and Vitamin C.',
        inStock: true,
        rating: 4.5,
        reviews: 98,
        isNew: false,
        isTrending: false,
        isOnSale: true
    },
    {
        id: 's4',
        name: 'Croissants Pack',
        price: 249,
        originalPrice: 349,
        weight: 'Pack of 6',
        category: 'bakery',
        image: 'images/products/croissants.png',
        badge: '-29%',
        discount: 29,
        description: 'Buttery, flaky croissants baked fresh daily.',
        nutritionalInfo: 'Made with real butter for authentic taste.',
        inStock: true,
        rating: 4.7,
        reviews: 134,
        isNew: false,
        isTrending: false,
        isOnSale: true
    },

    // Fruits Category
    {
        id: 'f1',
        name: 'Organic Apples',
        price: 179,
        originalPrice: null,
        weight: '1kg pack',
        category: 'fruits',
        image: 'images/products/apples.png',
        badge: null,
        discount: null,
        description: 'Crisp, sweet organic apples from local orchards.',
        nutritionalInfo: 'High in fiber and Vitamin C.',
        inStock: true,
        rating: 4.7,
        reviews: 234,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'f2',
        name: 'Fresh Mangoes',
        price: 249,
        originalPrice: null,
        weight: '3 pieces',
        category: 'fruits',
        image: 'images/products/mangoes.png',
        badge: 'Seasonal',
        discount: null,
        description: 'Sweet, juicy mangoes at peak ripeness.',
        nutritionalInfo: 'Rich in Vitamin A and Vitamin C.',
        inStock: true,
        rating: 4.9,
        reviews: 189,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'f3',
        name: 'Organic Avocados',
        price: 199,
        originalPrice: null,
        weight: 'Pack of 4',
        category: 'fruits',
        image: 'images/products/avocados.png',
        badge: null,
        discount: null,
        description: 'Creamy, ripe avocados perfect for toast or salads.',
        nutritionalInfo: 'Excellent source of healthy fats and potassium.',
        inStock: true,
        rating: 4.6,
        reviews: 267,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'f4',
        name: 'Fresh Pineapple',
        price: 149,
        originalPrice: null,
        weight: '1 piece',
        category: 'fruits',
        image: 'images/products/pineapple.png',
        badge: null,
        discount: null,
        description: 'Sweet, tropical pineapple ready to eat.',
        nutritionalInfo: 'Contains bromelain and Vitamin C.',
        inStock: true,
        rating: 4.5,
        reviews: 156,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },

    // Nuts Category
    {
        id: 'n1',
        name: 'Raw Almonds',
        price: 349,
        originalPrice: null,
        weight: '500g pack',
        category: 'nuts',
        image: 'images/products/almonds.png',
        badge: null,
        discount: null,
        description: 'Premium raw almonds, perfect for snacking or baking.',
        nutritionalInfo: 'High in Vitamin E and magnesium.',
        inStock: true,
        rating: 4.8,
        reviews: 298,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'n2',
        name: 'Cashew Nuts',
        price: 399,
        originalPrice: null,
        weight: '500g pack',
        category: 'nuts',
        image: 'images/products/cashews.png',
        badge: null,
        discount: null,
        description: 'Creamy, buttery cashews with a delicate flavor.',
        nutritionalInfo: 'Good source of protein and healthy fats.',
        inStock: true,
        rating: 4.7,
        reviews: 187,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'n3',
        name: 'Pistachios',
        price: 449,
        originalPrice: null,
        weight: '400g pack',
        category: 'nuts',
        image: 'images/products/pistachios.png',
        badge: null,
        discount: null,
        description: 'Roasted and salted pistachios in shell.',
        nutritionalInfo: 'Rich in protein, fiber, and antioxidants.',
        inStock: true,
        rating: 4.9,
        reviews: 145,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'n4',
        name: 'Chia Seeds',
        price: 199,
        originalPrice: null,
        weight: '250g pack',
        category: 'nuts',
        image: 'images/products/chia-seeds.png',
        badge: null,
        discount: null,
        description: 'Nutrient-dense chia seeds for smoothies and baking.',
        nutritionalInfo: 'Excellent source of Omega-3 and fiber.',
        inStock: true,
        rating: 4.6,
        reviews: 112,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },

    // Juices Category
    {
        id: 'j1',
        name: 'Carrot Ginger Juice',
        price: 179,
        originalPrice: null,
        weight: '500ml bottle',
        category: 'juices',
        image: 'images/products/carrot-juice.png',
        badge: null,
        discount: null,
        description: 'Refreshing carrot juice with a ginger kick.',
        nutritionalInfo: 'High in Vitamin A and antioxidants.',
        inStock: true,
        rating: 4.5,
        reviews: 87,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'j2',
        name: 'Beetroot Blast',
        price: 189,
        originalPrice: null,
        weight: '500ml bottle',
        category: 'juices',
        image: 'images/products/beetroot-juice.png',
        badge: 'New',
        discount: null,
        description: 'Nutrient-rich beetroot juice with apple and ginger.',
        nutritionalInfo: 'Rich in nitrates and antioxidants.',
        inStock: true,
        rating: 4.4,
        reviews: 67,
        isNew: true,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'j3',
        name: 'Tropical Mix',
        price: 229,
        originalPrice: null,
        weight: '1L bottle',
        category: 'juices',
        image: 'images/products/tropical-juice.png',
        badge: null,
        discount: null,
        description: 'Blend of pineapple, mango, and passion fruit.',
        nutritionalInfo: 'Packed with vitamins and tropical flavor.',
        inStock: true,
        rating: 4.8,
        reviews: 156,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'j4',
        name: 'Green Detox',
        price: 199,
        originalPrice: null,
        weight: '500ml bottle',
        category: 'juices',
        image: 'images/products/green-detox.png',
        badge: null,
        discount: null,
        description: 'Kale, spinach, cucumber, and apple blend.',
        nutritionalInfo: 'Rich in chlorophyll and essential nutrients.',
        inStock: true,
        rating: 4.3,
        reviews: 98,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },

    // Bakery Category
    {
        id: 'b1',
        name: 'Sourdough Bread',
        price: 249,
        originalPrice: null,
        weight: '800g loaf',
        category: 'bakery',
        image: 'images/products/sourdough.png',
        badge: null,
        discount: null,
        description: 'Traditional sourdough with a crispy crust.',
        nutritionalInfo: 'Fermented for 24 hours for better digestion.',
        inStock: true,
        rating: 4.9,
        reviews: 234,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'b2',
        name: 'Muffins Variety',
        price: 299,
        originalPrice: null,
        weight: 'Pack of 6',
        category: 'bakery',
        image: 'images/products/muffins.png',
        badge: null,
        discount: null,
        description: 'Assorted blueberry, chocolate, and banana muffins.',
        nutritionalInfo: 'Made with organic flour and natural ingredients.',
        inStock: true,
        rating: 4.7,
        reviews: 178,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'b3',
        name: 'Bagels Pack',
        price: 229,
        originalPrice: null,
        weight: 'Pack of 5',
        category: 'bakery',
        image: 'images/products/bagels.png',
        badge: null,
        discount: null,
        description: 'Freshly baked bagels, perfect for breakfast.',
        nutritionalInfo: 'Low in fat and high in carbohydrates.',
        inStock: true,
        rating: 4.6,
        reviews: 145,
        isNew: false,
        isTrending: false,
        isOnSale: false
    },
    {
        id: 'b4',
        name: 'Cinnamon Rolls',
        price: 279,
        originalPrice: null,
        weight: 'Pack of 4',
        category: 'bakery',
        image: 'images/products/cinnamon-rolls.png',
        badge: 'Popular',
        discount: null,
        description: 'Soft, gooey cinnamon rolls with cream cheese frosting.',
        nutritionalInfo: 'Indulgent treat made with real cinnamon.',
        inStock: true,
        rating: 4.9,
        reviews: 312,
        isNew: false,
        isTrending: false,
        isOnSale: false
    }
];

// Helper functions
function getTrendingProducts() {
    return products.filter(p => p.isTrending);
}

function getSaleProducts() {
    return products.filter(p => p.isOnSale);
}

function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function getRelatedProducts(category, excludeId) {
    return products.filter(p => p.category === category && p.id !== excludeId).slice(0, 4);
}

// Format price in Indian Rupees
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Sample orders data (in Rupees)
const sampleOrders = [
    {
        id: 'ORD-001',
        date: '2024-03-01',
        items: [
            { name: 'Fresh Strawberries', quantity: 2, price: 299 },
            { name: 'Organic Whole Grain Bread', quantity: 1, price: 149 }
        ],
        total: 747,
        status: 'delivered',
        address: '123 Organic Street, Green City, EC 12345'
    },
    {
        id: 'ORD-002',
        date: '2024-03-05',
        items: [
            { name: 'Premium Mixed Nuts', quantity: 1, price: 549 },
            { name: 'Cold Pressed Orange Juice', quantity: 2, price: 199 }
        ],
        total: 947,
        status: 'shipped',
        address: '123 Organic Street, Green City, EC 12345'
    },
    {
        id: 'ORD-003',
        date: '2024-03-07',
        items: [
            { name: 'Fresh Blueberries', quantity: 3, price: 399 }
        ],
        total: 1197,
        status: 'packed',
        address: '123 Organic Street, Green City, EC 12345'
    }
];

// Coupons
const coupons = {
    'WELCOME10': 10,
    'SUPER20': 20,
    'FRUIT15': 15
};
