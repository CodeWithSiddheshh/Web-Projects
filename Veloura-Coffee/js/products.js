// ============================================
// Veloura Coffee - Product Data
// 40 Premium Coffee Products
// ============================================

const products = [
  // HOT COFFEE (12 products)
  {
    id: 1,
    name: "Classic Espresso",
    category: "hot-coffee",
    price: 3.50,
    description: "Rich and bold single shot of premium Arabica espresso with a golden crema finish. Our signature blend delivers intense flavor with subtle chocolate notes.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80"
  },
  {
    id: 2,
    name: "Double Espresso",
    category: "hot-coffee",
    price: 4.50,
    description: "Two shots of our finest espresso for the true coffee connoisseur. Double the intensity, double the satisfaction.",
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80"
  },
  {
    id: 3,
    name: "Veloura Cappuccino",
    category: "hot-coffee",
    price: 4.75,
    description: "Perfectly balanced espresso with steamed milk and a thick layer of velvety foam. Topped with a dusting of cocoa powder.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80"
  },
  {
    id: 4,
    name: "Classic Latte",
    category: "hot-coffee",
    price: 4.95,
    description: "Smooth espresso combined with creamy steamed milk in perfect harmony. Available with vanilla, caramel, or hazelnut syrup.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80"
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    category: "hot-coffee",
    price: 5.50,
    description: "Steamed milk marked with espresso and topped with luscious caramel drizzle. A sweet indulgence for any time of day.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80"
  },
  {
    id: 6,
    name: "Mocha Delight",
    category: "hot-coffee",
    price: 5.25,
    description: "Espresso meets rich chocolate and steamed milk, finished with whipped cream. A chocolate lover's dream come true.",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80"
  },
  {
    id: 7,
    name: "Vanilla Latte",
    category: "hot-coffee",
    price: 5.25,
    description: "Our signature latte infused with Madagascar vanilla syrup. Smooth, aromatic, and utterly delightful.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80"
  },
  {
    id: 8,
    name: "Hazelnut Coffee",
    category: "hot-coffee",
    price: 4.95,
    description: "Freshly brewed coffee with a hint of roasted hazelnut flavor. Warm, nutty, and perfectly comforting.",
    image: "https://images.unsplash.com/photo-1497515114889-1c6a5e7cda6d?w=600&q=80"
  },
  {
    id: 9,
    name: "Cafe Americano",
    category: "hot-coffee",
    price: 3.95,
    description: "Espresso diluted with hot water for a smooth, full-bodied coffee experience. Simple yet satisfying.",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&q=80"
  },
  {
    id: 10,
    name: "Flat White",
    category: "hot-coffee",
    price: 4.75,
    description: "Australian-style coffee with espresso and microfoam. Silky texture with a strong coffee flavor.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80"
  },
  {
    id: 11,
    name: "Cortado",
    category: "hot-coffee",
    price: 4.25,
    description: "Equal parts espresso and warm milk, creating a perfectly balanced coffee experience. Smooth and elegant.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80"
  },
  {
    id: 12,
    name: "Irish Coffee",
    category: "hot-coffee",
    price: 7.50,
    description: "Premium coffee with Irish whiskey, brown sugar, and topped with fresh cream. A classic after-dinner treat.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=600&q=80"
  },

  // COLD COFFEE (12 products)
  {
    id: 13,
    name: "Iced Americano",
    category: "cold-coffee",
    price: 4.25,
    description: "Refreshing espresso poured over ice with cold water. Crisp, clean, and invigorating for hot days.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80"
  },
  {
    id: 14,
    name: "Iced Latte",
    category: "cold-coffee",
    price: 5.25,
    description: "Chilled espresso with cold milk over ice. Creamy, refreshing, and perfectly balanced.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
  },
  {
    id: 15,
    name: "Cold Brew",
    category: "cold-coffee",
    price: 5.50,
    description: "Steeped for 18 hours for a smooth, low-acidity coffee experience. Naturally sweet and incredibly refreshing.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80"
  },
  {
    id: 16,
    name: "Nitro Cold Brew",
    category: "cold-coffee",
    price: 6.50,
    description: "Cold brew infused with nitrogen for a creamy, stout-like texture. Served on tap with a beautiful cascade.",
    image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80"
  },
  {
    id: 17,
    name: "Iced Caramel Macchiato",
    category: "cold-coffee",
    price: 5.95,
    description: "Layered espresso, milk, and vanilla over ice, topped with caramel drizzle. Visually stunning and delicious.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80"
  },
  {
    id: 18,
    name: "Iced Mocha",
    category: "cold-coffee",
    price: 5.75,
    description: "Espresso, chocolate syrup, and cold milk over ice, topped with whipped cream. Chocolate perfection chilled.",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80"
  },
  {
    id: 19,
    name: "Frappuccino Classic",
    category: "cold-coffee",
    price: 6.25,
    description: "Blended coffee with ice and milk, topped with whipped cream. The ultimate frozen coffee treat.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80"
  },
  {
    id: 20,
    name: "Mocha Frappuccino",
    category: "cold-coffee",
    price: 6.75,
    description: "Blended coffee, chocolate, and ice topped with whipped cream and chocolate drizzle. Pure indulgence.",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&q=80"
  },
  {
    id: 21,
    name: "Vietnamese Iced Coffee",
    category: "cold-coffee",
    price: 5.95,
    description: "Strong Vietnamese coffee slowly dripped over sweetened condensed milk and ice. Rich and exotic.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80"
  },
  {
    id: 22,
    name: "Espresso Tonic",
    category: "cold-coffee",
    price: 5.50,
    description: "Double shot of espresso over tonic water with ice and a twist of lemon. Refreshing and sophisticated.",
    image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80"
  },
  {
    id: 23,
    name: "Iced Vanilla Latte",
    category: "cold-coffee",
    price: 5.50,
    description: "Espresso, cold milk, and vanilla syrup over ice. Sweet, creamy, and perfectly chilled.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
  },
  {
    id: 24,
    name: "Cold Brew Float",
    category: "cold-coffee",
    price: 7.25,
    description: "Our signature cold brew with a scoop of vanilla ice cream. The perfect dessert coffee.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80"
  },

  // DESSERTS (10 products)
  {
    id: 25,
    name: "Tiramisu",
    category: "desserts",
    price: 7.95,
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream. Dusting of cocoa on top.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80"
  },
  {
    id: 26,
    name: "Chocolate Lava Cake",
    category: "desserts",
    price: 8.50,
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream. Pure chocolate decadence.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80"
  },
  {
    id: 27,
    name: "New York Cheesecake",
    category: "desserts",
    price: 7.50,
    description: "Creamy cheesecake on a graham cracker crust, topped with berry compote. A timeless classic.",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df26?w=600&q=80"
  },
  {
    id: 28,
    name: "Croissant",
    category: "desserts",
    price: 3.95,
    description: "Buttery, flaky French croissant baked fresh daily. Perfect with your morning coffee.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80"
  },
  {
    id: 29,
    name: "Almond Croissant",
    category: "desserts",
    price: 4.95,
    description: "Butter croissant filled with almond cream and topped with sliced almonds. Sweet and nutty perfection.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"
  },
  {
    id: 30,
    name: "Chocolate Muffin",
    category: "desserts",
    price: 4.25,
    description: "Rich chocolate muffin with chocolate chips throughout. Moist, decadent, and utterly satisfying.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80"
  },
  {
    id: 31,
    name: "Blueberry Scone",
    category: "desserts",
    price: 4.50,
    description: "Buttery scone packed with fresh blueberries and topped with sugar crystals. Perfect with tea or coffee.",
    image: "https://images.unsplash.com/photo-1546552356-3fae876a61ca?w=600&q=80"
  },
  {
    id: 32,
    name: "Cinnamon Roll",
    category: "desserts",
    price: 5.25,
    description: "Soft, fluffy roll swirled with cinnamon and topped with cream cheese frosting. Warm and comforting.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80"
  },
  {
    id: 33,
    name: "Chocolate Chip Cookie",
    category: "desserts",
    price: 3.50,
    description: "Large, chewy cookie loaded with premium chocolate chips. Baked fresh throughout the day.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80"
  },
  {
    id: 34,
    name: "Affogato",
    category: "desserts",
    price: 6.50,
    description: "Vanilla gelato drowned in a shot of hot espresso. Simple, elegant, and absolutely divine.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80"
  },

  // SPECIAL BLENDS (6 products)
  {
    id: 35,
    name: "Veloura Signature Blend",
    category: "special-blends",
    price: 18.95,
    description: "Our house blend featuring beans from Ethiopia, Colombia, and Brazil. Notes of chocolate, caramel, and citrus. 12oz bag.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80"
  },
  {
    id: 36,
    name: "Ethiopian Yirgacheffe",
    category: "special-blends",
    price: 22.50,
    description: "Single-origin light roast with floral aromatics and bright citrus notes. A coffee connoisseur's choice. 12oz bag.",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80"
  },
  {
    id: 37,
    name: "Colombian Supremo",
    category: "special-blends",
    price: 19.95,
    description: "Medium roast with balanced acidity, caramel sweetness, and nutty undertones. Smooth and versatile. 12oz bag.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=80"
  },
  {
    id: 38,
    name: "Sumatra Mandheling",
    category: "special-blends",
    price: 21.50,
    description: "Dark roast with full body, low acidity, and earthy, spicy notes. Complex and satisfying. 12oz bag.",
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&q=80"
  },
  {
    id: 39,
    name: "Espresso Roast",
    category: "special-blends",
    price: 20.95,
    description: "Dark roast blend specifically crafted for espresso. Rich crema with chocolate and toasted nut flavors. 12oz bag.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80"
  },
  {
    id: 40,
    name: "Decaf House Blend",
    category: "special-blends",
    price: 18.50,
    description: "Swiss water processed decaf retaining all the flavor without the caffeine. Smooth and mellow. 12oz bag.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80"
  }
];

// Category display names
const categoryNames = {
  'hot-coffee': 'Hot Coffee',
  'cold-coffee': 'Cold Coffee',
  'desserts': 'Desserts',
  'special-blends': 'Special Blends'
};

// Get all categories
function getCategories() {
  return Object.keys(categoryNames);
}

// Get category display name
function getCategoryName(category) {
  return categoryNames[category] || category;
}

// Get products by category
function getProductsByCategory(category) {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

// Get product by ID
function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}

// Search products
function searchProducts(query) {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    getCategoryName(product.category).toLowerCase().includes(lowercaseQuery)
  );
}

// Get related products (same category, excluding current product)
function getRelatedProducts(productId, limit = 4) {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => product.category === currentProduct.category && product.id !== productId)
    .slice(0, limit);
}

// Get featured products (random selection)
function getFeaturedProducts(limit = 8) {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products,
    categoryNames,
    getCategories,
    getCategoryName,
    getProductsByCategory,
    getProductById,
    searchProducts,
    getRelatedProducts,
    getFeaturedProducts
  };
}
