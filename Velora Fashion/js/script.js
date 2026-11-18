/* ============================================================
   VELORA — Premium Fashion E-Commerce
   Shared JavaScript (Vanilla JS, no frameworks)
   ============================================================ */
"use strict";

/* ---------- Image helper (Unsplash CDN) ---------- */
const U = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ---------- Product Catalogue (20+ products, INR pricing) ---------- */
const PRODUCTS = [
  // WOMEN
  {
    id: 1,
    name: "Luna Satin Dress",
    category: "Dresses",
    gender: "Women",
    price: 3499,
    oldPrice: 4299,
    image: U("photo-1595777457583-95e059d581b8"),
    gallery: [
      U("photo-1595777457583-95e059d581b8", 1200),
      U("photo-1441984904996-e0b6ba687e04"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Ivory"],
    rating: 4.8,
    reviews: 124,
    badge: "Sale",
    description:
      "A fluid satin slip dress cut on the bias for a graceful drape. The Luna moves beautifully — from evening dinners to quiet mornings.",
  },
  {
    id: 2,
    name: "Sienna Knit Top",
    category: "Tops",
    gender: "Women",
    price: 1899,
    oldPrice: null,
    image: U("photo-1515886657613-9f3515b0c78f"),
    gallery: [
      U("photo-1515886657613-9f3515b0c78f", 1200),
      U("photo-1523381210434-271e8be1f52b"),
      U("photo-1489987707025-afc232f7bdaf"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Mustard", "Cream"],
    rating: 4.6,
    reviews: 86,
    badge: "New",
    description:
      "A soft-touch knit in a warm sienna tone. Slightly cropped with a relaxed shoulder — made to be worn on repeat.",
  },
  {
    id: 3,
    name: "Mila Linen Dress",
    category: "Dresses",
    gender: "Women",
    price: 2799,
    oldPrice: null,
    image: U("photo-1572804013309-59a88b7e92f1"),
    gallery: [
      U("photo-1572804013309-59a88b7e92f1", 1200),
      U("photo-1558769132-cb1aea458c5e"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Sand", "White"],
    rating: 4.7,
    reviews: 64,
    badge: null,
    description:
      "Breathable European flax linen, garment-washed for softness. The Mila is the dress you will reach for all summer.",
  },
  {
    id: 4,
    name: "Ava Silk Slip Dress",
    category: "Dresses",
    gender: "Women",
    price: 4999,
    oldPrice: 5999,
    image: U("photo-1515372039744-b8f02a3ae446"),
    gallery: [
      U("photo-1515372039744-b8f02a3ae446", 1200),
      U("photo-1496747611176-843222e1e57c"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Black"],
    rating: 4.9,
    reviews: 152,
    badge: "Bestseller",
    description:
      "Pure mulberry silk with adjustable straps and a delicate cowl neckline. Quiet luxury, distilled into one dress.",
  },
  {
    id: 5,
    name: "Rose Pleated Midi Skirt",
    category: "Skirts",
    gender: "Women",
    price: 2299,
    oldPrice: null,
    image: U("photo-1594633312681-425c7b97ccd1"),
    gallery: [
      U("photo-1594633312681-425c7b97ccd1", 1200),
      U("photo-1489987707025-afc232f7bdaf"),
      U("photo-1558769132-cb1aea458c5e"),
    ],
    sizes: ["S", "M", "L"],
    colors: ["Rose", "Black"],
    rating: 4.5,
    reviews: 47,
    badge: null,
    description:
      "Knife pleats that catch the light with every step. Elasticated back waist for all-day ease.",
  },
  {
    id: 6,
    name: "Ivy Belted Trench Coat",
    category: "Outerwear",
    gender: "Women",
    price: 6499,
    oldPrice: 7999,
    image: U("photo-1539109136881-3be0616acf4b"),
    gallery: [
      U("photo-1539109136881-3be0616acf4b", 1200),
      U("photo-1529139574466-a303027c1d8b"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Navy"],
    rating: 4.8,
    reviews: 98,
    badge: "Sale",
    description:
      "A timeless trench in water-resistant cotton gabardine with horn buttons and a waist-cinching belt.",
  },
  {
    id: 7,
    name: "Celeste Wide-Leg Trousers",
    category: "Trousers",
    gender: "Women",
    price: 2499,
    oldPrice: null,
    image: U("photo-1581044777550-4cfa60707c03"),
    gallery: [
      U("photo-1581044777550-4cfa60707c03", 1200),
      U("photo-1489987707025-afc232f7bdaf"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Charcoal"],
    rating: 4.6,
    reviews: 73,
    badge: "New",
    description:
      "High-rise, wide-leg trousers with a fluid crepe finish. Tailored enough for work, easy enough for Sunday.",
  },
  {
    id: 8,
    name: "Bianca Cashmere Crewneck",
    category: "Tops",
    gender: "Women",
    price: 4499,
    oldPrice: null,
    image: U("photo-1487412720507-e7ab37603c6f"),
    gallery: [
      U("photo-1487412720507-e7ab37603c6f", 1200),
      U("photo-1523381210434-271e8be1f52b"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["S", "M", "L"],
    colors: ["Oat", "Grey"],
    rating: 4.9,
    reviews: 141,
    badge: "Bestseller",
    description:
      "Grade-A Mongolian cashmere, spun for a featherlight hand-feel. The Bianca only gets softer with wear.",
  },
  {
    id: 9,
    name: "Noir Tailored Blazer",
    category: "Jackets",
    gender: "Women",
    price: 5499,
    oldPrice: 6499,
    image: U("photo-1524504388940-b1c1722653e1"),
    gallery: [
      U("photo-1524504388940-b1c1722653e1", 1200),
      U("photo-1488426862026-3ee34a7d66df"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Stone"],
    rating: 4.7,
    reviews: 88,
    badge: "Sale",
    description:
      "A sharply tailored single-breasted blazer with structured shoulders and a nipped waist. Power dressing, refined.",
  },
  {
    id: 10,
    name: "Esme Denim Jacket",
    category: "Jackets",
    gender: "Women",
    price: 2999,
    oldPrice: null,
    image: U("photo-1469334031218-e382a71b716b"),
    gallery: [
      U("photo-1469334031218-e382a71b716b", 1200),
      U("photo-1523381210434-271e8be1f52b"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Mid Wash", "Ecru"],
    rating: 4.5,
    reviews: 59,
    badge: null,
    description:
      "A boxy-fit denim jacket in rigid organic cotton that breaks in beautifully. The throw-on-everything layer.",
  },

  // MEN
  {
    id: 11,
    name: "Aero Oversized Shirt",
    category: "Shirts",
    gender: "Men",
    price: 2199,
    oldPrice: null,
    image: U("photo-1602810318383-e386cc2a3ccf"),
    gallery: [
      U("photo-1602810318383-e386cc2a3ccf", 1200),
      U("photo-1608234807905-4466023792f5"),
      U("photo-1489987707025-afc232f7bdaf"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Sky"],
    rating: 4.6,
    reviews: 92,
    badge: "New",
    description:
      "Crisp cotton poplin with a dropped shoulder and relaxed body. Tuck it, layer it, live in it.",
  },
  {
    id: 12,
    name: "Essential Oxford Shirt",
    category: "Shirts",
    gender: "Men",
    price: 1899,
    oldPrice: 2299,
    image: U("photo-1596755094514-f87e34085b2c"),
    gallery: [
      U("photo-1596755094514-f87e34085b2c", 1200),
      U("photo-1608234807905-4466023792f5"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Pink"],
    rating: 4.7,
    reviews: 134,
    badge: "Sale",
    description:
      "The definitive oxford — brushed cotton, a button-down collar and a classic regular fit. A wardrobe cornerstone.",
  },
  {
    id: 13,
    name: "Noir Tailored Blazer",
    category: "Jackets",
    gender: "Men",
    price: 6999,
    oldPrice: null,
    image: U("photo-1594938298603-c8148c4dae35"),
    gallery: [
      U("photo-1594938298603-c8148c4dae35", 1200),
      U("photo-1593030761757-71fae45fa0e7"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal"],
    rating: 4.8,
    reviews: 76,
    badge: "Bestseller",
    description:
      "Half-canvassed construction, natural shoulders, Italian wool twill. A blazer built like a suit jacket, worn like a cardigan.",
  },
  {
    id: 14,
    name: "Urban Relaxed Trousers",
    category: "Trousers",
    gender: "Men",
    price: 2499,
    oldPrice: null,
    image: U("photo-1624378439575-d8705ad7ae80"),
    gallery: [
      U("photo-1624378439575-d8705ad7ae80", 1200),
      U("photo-1542272604-787c3835535d"),
      U("photo-1489987707025-afc232f7bdaf"),
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Taupe", "Black"],
    rating: 4.5,
    reviews: 68,
    badge: null,
    description:
      "Tapered, cropped and endlessly comfortable. A drawcord waist hides beneath a clean flat front.",
  },
  {
    id: 15,
    name: "Monochrome Cargo Jacket",
    category: "Outerwear",
    gender: "Men",
    price: 4299,
    oldPrice: 5199,
    image: U("photo-1551028719-00167b16eac5"),
    gallery: [
      U("photo-1551028719-00167b16eac5", 1200),
      U("photo-1520975954732-35dd22299614"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive"],
    rating: 4.7,
    reviews: 105,
    badge: "Sale",
    description:
      "A sleek take on the utility jacket — matte hardware, bellow pockets and a silhouette that layers clean.",
  },
  {
    id: 16,
    name: "Atlas Heavyweight Tee",
    category: "T-Shirts",
    gender: "Men",
    price: 999,
    oldPrice: null,
    image: U("photo-1521572163474-6864f9cf17ab"),
    gallery: [
      U("photo-1521572163474-6864f9cf17ab", 1200),
      U("photo-1620012253295-c15cc3e65df4"),
      U("photo-1523381210434-271e8be1f52b"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey"],
    rating: 4.8,
    reviews: 212,
    badge: "Bestseller",
    description:
      "240 GSM ring-spun cotton with a substantial, structured drape. The perfect tee exists — this is it.",
  },
  {
    id: 17,
    name: "Maverick Slim Jeans",
    category: "Trousers",
    gender: "Men",
    price: 2799,
    oldPrice: 3499,
    image: U("photo-1542272604-787c3835535d"),
    gallery: [
      U("photo-1542272604-787c3833835535d".replace("383383", "383"), 1200),
      U("photo-1541099649105-f69ad21f3246"),
      U("photo-1489987707025-afc232f7bdaf"),
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Indigo", "Black"],
    rating: 4.6,
    reviews: 117,
    badge: "Sale",
    description:
      "Japanese selvedge denim in a modern slim taper. Fades that tell your story, one wear at a time.",
  },
  {
    id: 18,
    name: "Orion Wool Overcoat",
    category: "Outerwear",
    gender: "Men",
    price: 8999,
    oldPrice: null,
    image: U("photo-1520975954732-35dd22299614"),
    gallery: [
      U("photo-1520975954732-35dd22299614", 1200),
      U("photo-1488161628813-04466f872be2"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Charcoal"],
    rating: 4.9,
    reviews: 63,
    badge: "New",
    description:
      "Double-faced Italian wool with a raglan shoulder and hidden placket. The last coat you will ever need.",
  },
  {
    id: 19,
    name: "Harbor Linen Shirt",
    category: "Shirts",
    gender: "Men",
    price: 1999,
    oldPrice: null,
    image: U("photo-1608234807905-4466023792f5"),
    gallery: [
      U("photo-1608234807905-4466023792f5", 1200),
      U("photo-1558769132-cb1aea458c5e"),
      U("photo-1489987707025-afc232f7bdaf"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Sand", "White", "Olive"],
    rating: 4.5,
    reviews: 54,
    badge: null,
    description:
      "Airy linen with a camp collar and relaxed fit. Built for warm evenings and long weekends.",
  },
  {
    id: 20,
    name: "Ridge Merino Sweater",
    category: "T-Shirts",
    gender: "Men",
    price: 3299,
    oldPrice: 3999,
    image: U("photo-1617137968427-85924c800a22"),
    gallery: [
      U("photo-1617137968427-85924c800a22", 1200),
      U("photo-1523381210434-271e8be1f52b"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest", "Charcoal"],
    rating: 4.7,
    reviews: 81,
    badge: "Sale",
    description:
      "Extra-fine merino knit in a classic crew silhouette. Naturally temperature-regulating, impossibly soft.",
  },

  // ACCESSORIES / UNISEX
  {
    id: 21,
    name: "Meridian Leather Watch",
    category: "Accessories",
    gender: "Unisex",
    price: 7499,
    oldPrice: null,
    image: U("photo-1523170335258-f5ed11844a34"),
    gallery: [
      U("photo-1523170335258-f5ed11844a34", 1200),
      U("photo-1576871337622-98d48d1cf531"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["One Size"],
    colors: ["Tan", "Black"],
    rating: 4.9,
    reviews: 167,
    badge: "Bestseller",
    description:
      "Swiss quartz movement, sapphire glass and a vegetable-tanned leather strap that ages with character.",
  },
  {
    id: 22,
    name: "Voyager Canvas Tote",
    category: "Accessories",
    gender: "Unisex",
    price: 1899,
    oldPrice: null,
    image: U("photo-1590874103328-eac38a683ce7"),
    gallery: [
      U("photo-1590874103328-eac38a683ce7", 1200),
      U("photo-1553062407-98eeb64c6a62"),
      U("photo-1489987707025-afc232f7bdaf"),
    ],
    sizes: ["One Size"],
    colors: ["Ecru", "Black"],
    rating: 4.4,
    reviews: 39,
    badge: null,
    description:
      "Heavyweight 18oz canvas with leather handles and an interior zip pocket. Fits a 15-inch laptop with room to spare.",
  },
  {
    id: 23,
    name: "Stride Leather Sneakers",
    category: "Shoes",
    gender: "Men",
    price: 4499,
    oldPrice: 5499,
    image: U("photo-1549298916-b41d501d3772"),
    gallery: [
      U("photo-1549298916-b41d501d3772", 1200),
      U("photo-1560769629-975ec94e6a86"),
      U("photo-1525966222134-fcfa99b8ae77"),
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["White", "Black"],
    rating: 4.7,
    reviews: 143,
    badge: "Sale",
    description:
      "Full-grain leather uppers on a cushioned cupsole. Minimal design, maximum wearability.",
  },
  {
    id: 24,
    name: "Solstice Acetate Sunglasses",
    category: "Accessories",
    gender: "Unisex",
    price: 2499,
    oldPrice: null,
    image: U("photo-1572635196237-14b3f281503f"),
    gallery: [
      U("photo-1572635196237-14b3f281503f", 1200),
      U("photo-1511499767150-a48a237f0083"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["One Size"],
    colors: ["Tortoise", "Black"],
    rating: 4.6,
    reviews: 58,
    badge: "New",
    description:
      "Hand-polished Italian acetate frames with UV400 lenses. A silhouette that flatters every face.",
  },
  {
    id: 25,
    name: "Woven Leather Belt",
    category: "Accessories",
    gender: "Men",
    price: 1299,
    oldPrice: null,
    image: U("photo-1624222247344-550fb60583dc"),
    gallery: [
      U("photo-1624222247344-550fb60583dc", 1200),
      U("photo-1553062407-98eeb64c6a62"),
      U("photo-1434389677669-e08b4cac3105"),
    ],
    sizes: ["S", "M", "L"],
    colors: ["Brown", "Black"],
    rating: 4.5,
    reviews: 33,
    badge: null,
    description:
      "Braided full-grain leather with a brushed brass buckle. No holes, infinite adjustability.",
  },
  {
    id: 26,
    name: "Aurora Pleated Maxi Dress",
    category: "Dresses",
    gender: "Women",
    price: 3999,
    oldPrice: null,
    image: U("photo-1496747611176-843222e1e57c"),
    gallery: [
      U("photo-1496747611176-843222e1e57c", 1200),
      U("photo-1558769132-cb1aea458c5e"),
      U("photo-1441984904996-e0b6ba687e04"),
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Sage"],
    rating: 4.8,
    reviews: 71,
    badge: "New",
    description:
      "Sunray pleats in a weightless crepe that flows with every step. Effortless from ceremony to sidewalk.",
  },
];

/* ---------- Sample reviews (used on product page) ---------- */
const SAMPLE_REVIEWS = [
  {
    name: "Ananya Sharma",
    date: "September 2026",
    text: "The fabric quality is exceptional — it feels far more expensive than it is. Fit is true to size and shipping was quick.",
  },
  {
    name: "Rohan Mehta",
    date: "August 2026",
    text: "Ordered this for a wedding and got so many compliments. The tailoring is clean and the colour is exactly as pictured.",
  },
  {
    name: "Priya Nair",
    date: "July 2026",
    text: "Second purchase from VELORA and I am never disappointed. The detailing on this piece is genuinely thoughtful.",
  },
];

/* ---------- Global State (localStorage persistence) ---------- */
const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },
};
let cart = store.get("velora_cart", []); // [{id, qty, size, color}]
let wishlist = store.get("velora_wishlist", []); // [id]

/* ---------- Utility helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
const findProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));

function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

const FALLBACK_IMG = U("photo-1441984904996-e0b6ba687e04", 900);

/* Global image error fallback — swap broken images for a safe image */
document.addEventListener(
  "error",
  (e) => {
    const t = e.target;
    if (t.tagName === "IMG" && !t.dataset.fallback) {
      t.dataset.fallback = "1";
      t.src = FALLBACK_IMG;
    }
  },
  true,
);

/* Star rating renderer */
function stars(rating) {
  const full = Math.round(rating);
  return `<span class="rating" aria-label="Rated ${rating} out of 5">${Array.from(
    { length: 5 },
    (_, i) => `<i class="fa-${i < full ? "solid" : "regular"} fa-star"></i>`,
  ).join("")}<span class="reviews">(${rating})</span></span>`;
}

/* ---------- Toast notifications ---------- */
let toastZone;
function toast(msg, icon = "fa-circle-check") {
  if (!toastZone) {
    toastZone = document.createElement("div");
    toastZone.className = "toast-zone";
    document.body.appendChild(toastZone);
  }
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<i class="fa-solid ${icon}"></i><span>${msg}</span>`;
  toastZone.appendChild(el);
  setTimeout(() => {
    el.classList.add("out");
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

/* ---------- Header badge counters ---------- */
function updateBadges() {
  const cartQty = cart.reduce((s, i) => s + i.qty, 0);
  $$("#cartCount").forEach((b) => {
    b.textContent = cartQty;
    b.classList.add("pop");
    setTimeout(() => b.classList.remove("pop"), 300);
  });
  $$("#wishCount").forEach((b) => {
    b.textContent = wishlist.length;
    b.classList.add("pop");
    setTimeout(() => b.classList.remove("pop"), 300);
  });
}

/* ---------- Cart operations ---------- */
function addToCart(id, qty = 1, size = null, color = null) {
  const p = findProduct(id);
  if (!p) return;
  size = size || p.sizes[0];
  color = color || p.colors[0];
  const existing = cart.find(
    (i) => i.id === p.id && i.size === size && i.color === color,
  );
  if (existing) existing.qty += qty;
  else cart.push({ id: p.id, qty, size, color });
  store.set("velora_cart", cart);
  updateBadges();
  toast(`${p.name} added to bag`, "fa-bag-shopping");
}
function removeFromCart(idx) {
  cart.splice(idx, 1);
  store.set("velora_cart", cart);
  updateBadges();
}
function setCartQty(idx, qty) {
  if (qty < 1) return removeFromCart(idx);
  cart[idx].qty = qty;
  store.set("velora_cart", cart);
  updateBadges();
}

/* ---------- Wishlist operations ---------- */
function toggleWishlist(id) {
  id = Number(id);
  const p = findProduct(id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((w) => w !== id);
    toast(`${p.name} removed from wishlist`, "fa-heart-crack");
  } else {
    wishlist.push(id);
    toast(`${p.name} saved to wishlist`, "fa-heart");
  }
  store.set("velora_wishlist", wishlist);
  updateBadges();
  syncWishButtons();
}
function syncWishButtons() {
  $$("[data-wish]").forEach((btn) => {
    btn.classList.toggle("active", wishlist.includes(Number(btn.dataset.wish)));
  });
}

/* ---------- Product card template ---------- */
function productCard(p) {
  const badge = p.badge
    ? `<span class="product-card__badge ${p.badge === "Sale" ? "product-card__badge--sale" : p.badge === "New" ? "product-card__badge--new" : ""}">${p.badge}</span>`
    : "";
  return `
  <article class="product-card reveal" data-id="${p.id}">
    <div class="product-card__media">
      ${badge}
      <button class="wish-btn ${wishlist.includes(p.id) ? "active" : ""}" data-wish="${p.id}" aria-label="Add ${esc(p.name)} to wishlist"><i class="fa-regular fa-heart"></i></button>
      <a href="product.html?id=${p.id}" aria-label="View ${esc(p.name)}">
        <img src="${p.image}" alt="${esc(p.name)} — ${esc(p.category)} by VELORA" loading="lazy">
      </a>
      <div class="product-card__actions">
        <button class="btn btn--light btn--sm" data-quickview="${p.id}"><i class="fa-regular fa-eye"></i> Quick View</button>
        <button class="btn btn--sm" data-addcart="${p.id}"><i class="fa-solid fa-bag-shopping"></i> Add</button>
      </div>
    </div>
    <div class="product-card__info">
      ${stars(p.rating)}
      <h3 class="product-card__name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
      <p class="product-card__cat">${esc(p.gender)} · ${esc(p.category)}</p>
      <p class="product-card__price">${inr(p.price)}${p.oldPrice ? `<span class="product-card__old">${inr(p.oldPrice)}</span>` : ""}</p>
    </div>
  </article>`;
}

/* Delegate global clicks: wishlist / add-to-cart / quick view */
document.addEventListener("click", (e) => {
  const wishBtn = e.target.closest("[data-wish]");
  if (wishBtn) {
    e.preventDefault();
    toggleWishlist(wishBtn.dataset.wish);
    return;
  }
  const addBtn = e.target.closest("[data-addcart]");
  if (addBtn) {
    e.preventDefault();
    addToCart(addBtn.dataset.addcart);
    return;
  }
  const qvBtn = e.target.closest("[data-quickview]");
  if (qvBtn) {
    e.preventDefault();
    openQuickView(qvBtn.dataset.quickview);
  }
});

/* ---------- Quick View Modal ---------- */
function openQuickView(id) {
  const p = findProduct(id);
  if (!p) return;
  closeModal();
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "qvOverlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Quick view — ${esc(p.name)}">
      <button class="modal__close" data-close aria-label="Close quick view"><i class="fa-solid fa-xmark"></i></button>
      <div class="qv">
        <div class="qv__media"><img src="${p.image}" alt="${esc(p.name)}"></div>
        <div class="qv__body">
          <span class="pd-info__eyebrow">${esc(p.gender)} · ${esc(p.category)}</span>
          <h3>${esc(p.name)}</h3>
          ${stars(p.rating)}
          <p class="pd-info__price">${inr(p.price)}${p.oldPrice ? `<span class="pd-info__old">${inr(p.oldPrice)}</span>` : ""}</p>
          <p>${esc(p.description)}</p>
          <p class="opt-label">Select Size</p>
          <div class="size-row" id="qvSizes">
            ${p.sizes.map((s, i) => `<button class="size-chip ${i === 0 ? "active" : ""}" data-size="${esc(s)}">${esc(s)}</button>`).join("")}
          </div>
          <div class="pd-actions">
            <button class="btn" id="qvAdd"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
            <a class="btn btn--outline" href="product.html?id=${p.id}">Full Details</a>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => overlay.classList.add("open"));

  $("#qvSizes", overlay).addEventListener("click", (e) => {
    const chip = e.target.closest(".size-chip");
    if (!chip) return;
    $$(".size-chip", overlay).forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
  });
  $("#qvAdd", overlay).addEventListener("click", () => {
    const size = $(".size-chip.active", overlay)?.dataset.size;
    addToCart(p.id, 1, size);
    closeModal();
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.closest("[data-close]")) closeModal();
  });
}

function closeModal() {
  const overlay = $("#qvOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => overlay.remove(), 350);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeLightbox();
  }
});

/* ============================================================
   PAGE INITIALISERS — each runs only if its elements exist
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initNewsletter();
  initBackToTop();
  syncWishButtons();
  updateBadges();

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "shop" || page === "men" || page === "women" || page === "new")
    initCatalog(page);
  if (page === "product") initProductPage();
  if (page === "cart") initCartPage();
  if (page === "wishlist") initWishlistPage();
  if (page === "lookbook") initLookbook();
  if (page === "contact") initContact();
  if (page === "login") initAuth();
});

/* ---------- Header: sticky, mobile nav, search ---------- */
function initHeader() {
  const header = $("#siteHeader");
  const navToggle = $("#navToggle");
  const mobileNav = $("#mobileNav");
  const overlay = $(".nav-overlay");
  const searchToggle = $("#searchToggle");
  const searchBar = $("#searchBar");

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
      const bt = $("#backTop");
      if (bt) bt.classList.toggle("show", window.scrollY > 600);
    },
    { passive: true },
  );

  /* active nav link */
  const current = location.pathname.split("/").pop() || "index.html";
  $$(".main-nav a, .mobile-nav a.nav-link").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.setAttribute("aria-current", "page");
  });

  const openNav = () => {
    mobileNav.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  };
  const closeNav = () => {
    mobileNav.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  };
  navToggle?.addEventListener("click", openNav);
  $("#mobileNavClose")?.addEventListener("click", closeNav);
  overlay?.addEventListener("click", closeNav);
  $$(".mobile-nav a").forEach((a) => a.addEventListener("click", closeNav));

  searchToggle?.addEventListener("click", () => {
    searchBar.classList.toggle("open");
    if (searchBar.classList.contains("open")) $("#globalSearch")?.focus();
  });

  const doSearch = () => {
    const q = $("#globalSearch").value.trim();
    if (q) location.href = `shop.html?q=${encodeURIComponent(q)}`;
    else toast("Type something to search", "fa-magnifying-glass");
  };
  $("#searchGo")?.addEventListener("click", doSearch);
  $("#globalSearch")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const bt = document.createElement("button");
  bt.className = "back-top";
  bt.id = "backTop";
  bt.setAttribute("aria-label", "Back to top");
  bt.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  document.body.appendChild(bt);
  bt.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ---------- Newsletter validation ---------- */
function initNewsletter() {
  const form = $("#newsletterForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("#newsletterEmail");
    const msg = $("#newsletterMsg");
    const email = input.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!valid) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "newsletter__msg err";
      input.focus();
      return;
    }
    msg.textContent =
      "Thank you for subscribing. Welcome to the VELORA circle.";
    msg.className = "newsletter__msg ok";
    form.reset();
    toast("Subscribed successfully", "fa-envelope-circle-check");
  });
}

/* ---------- Home page ---------- */
function initHome() {
  /* New Arrivals grid — 8 newest products */
  const grid = $("#newArrivalsGrid");
  if (grid) {
    const newest = [...PRODUCTS]
      .sort((a, b) => (b.badge === "New") - (a.badge === "New") || b.id - a.id)
      .slice(0, 8);
    grid.innerHTML = newest.map(productCard).join("");
    initReveal();
  }

  /* Trending horizontal showcase */
  const track = $("#trendingTrack");
  if (track) {
    const trending = [...PRODUCTS]
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, 8);
    track.innerHTML = trending.map(productCard).join("");
    $("#trendPrev")?.addEventListener("click", () =>
      track.scrollBy({ left: -320, behavior: "smooth" }),
    );
    $("#trendNext")?.addEventListener("click", () =>
      track.scrollBy({ left: 320, behavior: "smooth" }),
    );
  }
}

/* ---------- Catalog pages: Shop / Men / Women / New Arrivals ---------- */
function initCatalog(page) {
  const grid = $("#catalogGrid");
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  let state = {
    q: params.get("q") || "",
    category: "All",
    size: "All",
    color: "All",
    price: "all",
    sort: "featured",
  };

  /* Determine the base pool of products per page */
  let pool = [...PRODUCTS];
  if (page === "men") pool = PRODUCTS.filter((p) => p.gender === "Men");
  if (page === "women") pool = PRODUCTS.filter((p) => p.gender === "Women");
  if (page === "new")
    pool = PRODUCTS.filter(
      (p) => p.badge === "New" || p.badge === "Bestseller",
    );

  /* Populate category & color filter options */
  const categories = ["All", ...new Set(pool.map((p) => p.category))];
  $("#filterCategory").innerHTML = categories
    .map((c) => `<option value="${esc(c)}">${esc(c)}</option>`)
    .join("");
  const colors = ["All", ...new Set(pool.flatMap((p) => p.colors))];
  $("#filterColor").innerHTML = colors
    .map((c) => `<option value="${esc(c)}">${esc(c)}</option>`)
    .join("");

  if (state.q) $("#searchInput").value = state.q;

  function applyFilters() {
    let list = pool.filter((p) => {
      const matchQ =
        !state.q ||
        (p.name + " " + p.category + " " + p.gender)
          .toLowerCase()
          .includes(state.q.toLowerCase());
      const matchCat =
        state.category === "All" || p.category === state.category;
      const matchSize = state.size === "All" || p.sizes.includes(state.size);
      const matchColor =
        state.color === "All" || p.colors.includes(state.color);
      let matchPrice = true;
      if (state.price === "under2k") matchPrice = p.price < 2000;
      if (state.price === "2k-4k")
        matchPrice = p.price >= 2000 && p.price <= 4000;
      if (state.price === "4k-7k")
        matchPrice = p.price > 4000 && p.price <= 7000;
      if (state.price === "over7k") matchPrice = p.price > 7000;
      return matchQ && matchCat && matchSize && matchColor && matchPrice;
    });

    /* sorting */
    if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (state.sort === "name")
      list.sort((a, b) => a.name.localeCompare(b.name));
    if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (state.sort === "popular") list.sort((a, b) => b.reviews - a.reviews);

    $("#resultCount").textContent =
      `${list.length} product${list.length === 1 ? "" : "s"} found`;

    if (!list.length) {
      grid.className = "product-grid";
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>No products found</h3>
          <p>Try adjusting your search or clearing the filters.</p>
          <button class="btn" id="clearFilters">Clear Filters</button>
        </div>`;
      $("#clearFilters").addEventListener("click", () => {
        state = {
          q: "",
          category: "All",
          size: "All",
          color: "All",
          price: "all",
          sort: "featured",
        };
        $("#searchInput").value = "";
        $("#filterCategory").value = "All";
        $("#filterSize").value = "All";
        $("#filterColor").value = "All";
        $("#filterPrice").value = "all";
        $("#filterSort").value = "featured";
        applyFilters();
      });
      return;
    }

    grid.innerHTML = list.map(productCard).join("");
    initReveal();
    syncWishButtons();
  }

  /* Wire up controls */
  let searchTimer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.q = e.target.value.trim();
      applyFilters();
    }, 250);
  });
  $("#filterCategory").addEventListener("change", (e) => {
    state.category = e.target.value;
    applyFilters();
  });
  $("#filterSize").addEventListener("change", (e) => {
    state.size = e.target.value;
    applyFilters();
  });
  $("#filterColor").addEventListener("change", (e) => {
    state.color = e.target.value;
    applyFilters();
  });
  $("#filterPrice").addEventListener("change", (e) => {
    state.price = e.target.value;
    applyFilters();
  });
  $("#filterSort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    applyFilters();
  });

  /* Grid / list view toggle */
  $("#viewGrid").addEventListener("click", () => {
    grid.classList.remove("list-view");
    $("#viewGrid").classList.add("active");
    $("#viewList").classList.remove("active");
  });
  $("#viewList").addEventListener("click", () => {
    grid.classList.add("list-view");
    $("#viewList").classList.add("active");
    $("#viewGrid").classList.remove("active");
  });

  applyFilters();
}

/* ---------- Product detail page ---------- */
function initProductPage() {
  const wrap = $("#productDetail");
  if (!wrap) return;
  const id = new URLSearchParams(location.search).get("id") || 1;
  const p = findProduct(id) || PRODUCTS[0];

  document.title = `${p.name} — VELORA`;

  wrap.innerHTML = `
    <div class="pd">
      <div class="pd-gallery reveal">
        <div class="pd-gallery__main"><img id="pdMainImg" src="${p.gallery[0]}" alt="${esc(p.name)} — main view"></div>
        <div class="pd-thumbs" id="pdThumbs">
          ${p.gallery.map((g, i) => `<button class="pd-thumb ${i === 0 ? "active" : ""}" data-src="${g}" aria-label="View image ${i + 1}"><img src="${g}" alt="${esc(p.name)} — thumbnail ${i + 1}" loading="lazy"></button>`).join("")}
        </div>
      </div>
      <div class="pd-info reveal">
        <span class="pd-info__eyebrow">${esc(p.gender)} · ${esc(p.category)}</span>
        <h1>${esc(p.name)}</h1>
        ${stars(p.rating)}
        <p class="pd-info__price">${inr(p.price)}${p.oldPrice ? `<span class="pd-info__old">${inr(p.oldPrice)}</span>` : ""}</p>
        <p class="pd-info__desc">${esc(p.description)}</p>

        <p class="opt-label">Colour: <span id="pdColorName" style="letter-spacing:0;text-transform:none;font-weight:400;color:var(--stone)">${esc(p.colors[0])}</span></p>
        <div class="color-dots" id="pdColors">
          ${p.colors.map((c, i) => `<button class="color-dot ${i === 0 ? "active" : ""}" data-color="${esc(c)}" style="background:${colorHex(c)}" aria-label="Colour ${esc(c)}"></button>`).join("")}
        </div>

        <p class="opt-label">Select Size <button type="button" id="sizeGuideBtn">Size Guide</button></p>
        <div class="size-row" id="pdSizes">
          ${p.sizes.map((s, i) => `<button class="size-chip ${i === 0 ? "active" : ""}" data-size="${esc(s)}">${esc(s)}</button>`).join("")}
        </div>

        <p class="opt-label">Quantity</p>
        <div class="qty">
          <button id="qtyMinus" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
          <input id="qtyInput" value="1" inputmode="numeric" aria-label="Quantity">
          <button id="qtyPlus" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
        </div>

        <div class="pd-actions">
          <button class="btn" id="pdAddCart"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
          <button class="btn btn--outline" id="pdBuyNow">Buy Now</button>
          <button class="pd-wish ${wishlist.includes(p.id) ? "active" : ""}" id="pdWish" data-wish="${p.id}" aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
        </div>

        <div class="pd-meta">
          <div><i class="fa-solid fa-truck-fast"></i> Free shipping on orders above ₹4,999</div>
          <div><i class="fa-solid fa-rotate-left"></i> Easy 30-day returns &amp; exchanges</div>
          <div><i class="fa-solid fa-shield-halved"></i> 2-year VELORA quality guarantee</div>
        </div>
      </div>
    </div>

    <div class="tabs reveal">
      <div class="tabs__nav" role="tablist">
        <button class="active" data-tab="details" role="tab">Product Details</button>
        <button data-tab="materials" role="tab">Materials &amp; Care</button>
        <button data-tab="shipping" role="tab">Shipping &amp; Returns</button>
        <button data-tab="reviews" role="tab">Reviews (${p.reviews})</button>
      </div>
      <div class="tabs__panel active" data-panel="details">
        <p>${esc(p.description)}</p>
        <ul>
          <li>Designed in our Mumbai atelier</li>
          <li>Model wears size ${esc(p.sizes[Math.min(1, p.sizes.length - 1)])} and is 178 cm tall</li>
          <li>Available in ${p.colors.length} colour${p.colors.length > 1 ? "s" : ""}: ${p.colors.map(esc).join(", ")}</li>
          <li>Product code: VLR-${String(p.id).padStart(4, "0")}</li>
        </ul>
      </div>
      <div class="tabs__panel" data-panel="materials">
        <p>Premium natural fibres sourced from certified mills. Each piece is pre-washed and inspected by hand before dispatch.</p>
        <ul>
          <li>Machine wash cold on a gentle cycle</li>
          <li>Do not bleach; line dry in shade</li>
          <li>Warm iron on reverse where needed</li>
          <li>Store folded to preserve shape</li>
        </ul>
      </div>
      <div class="tabs__panel" data-panel="shipping">
        <p>Orders are dispatched within 24 hours from our Bengaluru fulfilment centre.</p>
        <ul>
          <li>Standard delivery: 3–5 business days (free over ₹4,999, else ₹199)</li>
          <li>Express delivery: 1–2 business days — ₹399</li>
          <li>Cash on delivery available across India</li>
          <li>Free 30-day returns, no questions asked</li>
        </ul>
      </div>
      <div class="tabs__panel" data-panel="reviews">
        ${SAMPLE_REVIEWS.map(
          (r) => `
          <div class="review">
            <div class="review__head"><span class="review__name">${esc(r.name)}</span><span class="review__date">${esc(r.date)}</span></div>
            ${stars(5)}
            <p>${esc(r.text)}</p>
          </div>`,
        ).join("")}
      </div>
    </div>

    <section class="section section--tight">
      <div class="section-head"><span class="section-eyebrow">Complete the look</span><h2 class="section-title">You May Also Like</h2></div>
      <div class="product-grid cols-3" id="relatedGrid"></div>
    </section>`;

  /* related products */
  const related = PRODUCTS.filter(
    (x) =>
      x.id !== p.id && (x.category === p.category || x.gender === p.gender),
  ).slice(0, 3);
  $("#relatedGrid").innerHTML = (
    related.length ? related : PRODUCTS.slice(0, 3)
  )
    .map(productCard)
    .join("");

  /* gallery switching */
  $("#pdThumbs").addEventListener("click", (e) => {
    const thumb = e.target.closest(".pd-thumb");
    if (!thumb) return;
    $$(".pd-thumb").forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    const main = $("#pdMainImg");
    main.style.opacity = 0;
    setTimeout(() => {
      main.src = thumb.dataset.src;
      main.style.opacity = 1;
    }, 200);
  });

  /* colour + size selection */
  $("#pdColors").addEventListener("click", (e) => {
    const dot = e.target.closest(".color-dot");
    if (!dot) return;
    $$("#pdColors .color-dot").forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
    $("#pdColorName").textContent = dot.dataset.color;
  });
  $("#pdSizes").addEventListener("click", (e) => {
    const chip = e.target.closest(".size-chip");
    if (!chip) return;
    $$("#pdSizes .size-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
  });
  $("#sizeGuideBtn").addEventListener("click", () =>
    toast(
      "Size guide: XS 32 | S 34 | M 36 | L 38 | XL 40 | XXL 42 (chest, inches)",
      "fa-ruler-combined",
    ),
  );

  /* quantity controls */
  const qtyInput = $("#qtyInput");
  $("#qtyMinus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value) || 1) - 1);
  });
  $("#qtyPlus").addEventListener("click", () => {
    qtyInput.value = Math.min(10, (parseInt(qtyInput.value) || 1) + 1);
  });
  qtyInput.addEventListener("change", () => {
    qtyInput.value = Math.min(10, Math.max(1, parseInt(qtyInput.value) || 1));
  });

  const selected = () => ({
    size: $(".size-chip.active")?.dataset.size,
    color: $(".color-dot.active")?.dataset.color,
    qty: parseInt(qtyInput.value) || 1,
  });

  $("#pdAddCart").addEventListener("click", () => {
    const s = selected();
    addToCart(p.id, s.qty, s.size, s.color);
  });
  $("#pdBuyNow").addEventListener("click", () => {
    const s = selected();
    addToCart(p.id, s.qty, s.size, s.color);
    location.href = "cart.html";
  });

  /* tabs */
  $$(".tabs__nav button").forEach((btn) =>
    btn.addEventListener("click", () => {
      $$(".tabs__nav button").forEach((b) => b.classList.remove("active"));
      $$(".tabs__panel").forEach((pn) => pn.classList.remove("active"));
      btn.classList.add("active");
      $(`.tabs__panel[data-panel="${btn.dataset.tab}"]`).classList.add(
        "active",
      );
    }),
  );

  initReveal();
  syncWishButtons();
}

/* Colour names → CSS hex for swatches */
function colorHex(name) {
  const map = {
    Black: "#1a1a1a",
    Ivory: "#f3efe6",
    White: "#ffffff",
    Cream: "#efe9db",
    Mustard: "#c9a227",
    Sand: "#cbb391",
    Champagne: "#e6d3b3",
    Rose: "#c98a8a",
    Camel: "#a97c50",
    Navy: "#1f2a44",
    Charcoal: "#3d3d3d",
    Taupe: "#a89880",
    Olive: "#6b6b47",
    Forest: "#2e4b3f",
    Sage: "#9caf88",
    Oat: "#d8cfbd",
    Grey: "#8f8f8f",
    Sky: "#a8c3d6",
    Pink: "#dba7b0",
    "Mid Wash": "#7a93ad",
    Ecru: "#e5dcc8",
    Stone: "#b5b0a6",
    Brown: "#6f4e37",
    Tan: "#b07d4f",
    Indigo: "#3b4a6b",
  };
  return map[name] || "#cccccc";
}

/* ---------- Cart page ---------- */
function initCartPage() {
  const wrap = $("#cartContent");
  if (!wrap) return;
  let discount = 0;

  function shippingFor(sub) {
    return sub === 0 ? 0 : sub >= 4999 ? 0 : 199;
  }

  function render() {
    if (!cart.length) {
      wrap.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-bag-shopping"></i>
          <h3>Your bag is empty</h3>
          <p>Discover the collection and find something you love.</p>
          <a href="shop.html" class="btn">Continue Shopping</a>
        </div>`;
      return;
    }
    wrap.innerHTML = `
      <div class="cart-layout">
        <div>
          ${cart
            .map((item, i) => {
              const p = findProduct(item.id);
              if (!p) return "";
              return `
            <div class="cart-item">
              <a href="product.html?id=${p.id}"><img class="cart-item__img" src="${p.image}" alt="${esc(p.name)}"></a>
              <div>
                <p class="cart-item__name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></p>
                <p class="cart-item__meta">Size: ${esc(item.size)} · Colour: ${esc(item.color)}</p>
                <div class="qty">
                  <button data-dec="${i}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                  <input value="${item.qty}" readonly aria-label="Quantity">
                  <button data-inc="${i}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class="cart-item__remove" data-del="${i}"><i class="fa-regular fa-trash-can"></i> Remove</button>
              </div>
              <p class="cart-item__price">${inr(p.price * item.qty)}</p>
            </div>`;
            })
            .join("")}
        </div>
        <aside class="summary">
          <h3>Order Summary</h3>
          <div class="coupon">
            <input id="couponInput" placeholder="Coupon code (try VELORA10)">
            <button id="couponApply">Apply</button>
          </div>
          <div id="summaryRows"></div>
          <button class="btn btn--block" id="checkoutBtn"><i class="fa-solid fa-lock"></i> Proceed to Checkout</button>
          <a href="shop.html" class="btn btn--outline btn--block" style="margin-top:10px;">Continue Shopping</a>
          <p class="summary__note"><i class="fa-solid fa-shield-halved"></i> Secure checkout · COD available</p>
        </aside>
      </div>`;

    $$("[data-inc]", wrap).forEach((b) =>
      b.addEventListener("click", () => {
        setCartQty(+b.dataset.inc, cart[+b.dataset.inc].qty + 1);
        render();
      }),
    );
    $$("[data-dec]", wrap).forEach((b) =>
      b.addEventListener("click", () => {
        setCartQty(+b.dataset.dec, cart[+b.dataset.dec].qty - 1);
        render();
      }),
    );
    $$("[data-del]", wrap).forEach((b) =>
      b.addEventListener("click", () => {
        removeFromCart(+b.dataset.del);
        toast("Item removed from bag", "fa-trash-can");
        render();
      }),
    );

    $("#couponApply").addEventListener("click", () => {
      const code = $("#couponInput").value.trim().toUpperCase();
      if (code === "VELORA10") {
        discount = 0.1;
        toast("Coupon applied — 10% off", "fa-tag");
      } else {
        discount = 0;
        toast("Invalid coupon code", "fa-circle-exclamation");
      }
      renderSummary();
    });
    $("#checkoutBtn").addEventListener("click", checkoutSimulation);
    renderSummary();
  }

  function renderSummary() {
    const sub = cart.reduce((s, i) => s + findProduct(i.id).price * i.qty, 0);
    const ship = shippingFor(sub);
    const disc = Math.round(sub * discount);
    const total = sub - disc + ship;
    $("#summaryRows").innerHTML = `
      <div class="summary__row"><span>Subtotal</span><span>${inr(sub)}</span></div>
      <div class="summary__row"><span>Shipping</span><span>${ship === 0 ? '<span class="free">FREE</span>' : inr(ship)}</span></div>
      ${disc ? `<div class="summary__row"><span>Discount (VELORA10)</span><span>− ${inr(disc)}</span></div>` : ""}
      <div class="summary__row total"><span>Total</span><span>${inr(total)}</span></div>`;
  }

  function checkoutSimulation() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" style="max-width:460px;text-align:center;padding:50px 36px;" role="dialog" aria-modal="true" aria-label="Order confirmation">
        <div class="form-success">
          <i class="fa-solid fa-circle-check"></i>
          <h3 style="font-size:26px;margin-bottom:10px;">Order Placed</h3>
          <p style="color:var(--stone);font-weight:300;margin-bottom:26px;">Thank you for shopping with VELORA. This is a demo checkout — no payment was processed. Your order confirmation is #VLR-${Math.floor(100000 + Math.random() * 900000)}.</p>
          <a href="index.html" class="btn">Back to Home</a>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("open"));
    cart = [];
    store.set("velora_cart", cart);
    updateBadges();
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.remove();
        render();
      }
    });
  }

  render();
}

/* ---------- Wishlist page ---------- */
function initWishlistPage() {
  const wrap = $("#wishlistContent");
  if (!wrap) return;

  function render() {
    if (!wishlist.length) {
      wrap.innerHTML = `
        <div class="empty-state">
          <i class="fa-regular fa-heart"></i>
          <h3>Your wishlist is empty</h3>
          <p>Save pieces you love and find them here anytime.</p>
          <a href="shop.html" class="btn">Explore the Collection</a>
        </div>`;
      return;
    }
    wrap.innerHTML = wishlist
      .map((id) => {
        const p = findProduct(id);
        if (!p) return "";
        return `
      <div class="wishlist-item">
        <a href="product.html?id=${p.id}"><img src="${p.image}" alt="${esc(p.name)}"></a>
        <div>
          <p class="cart-item__name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></p>
          <p class="cart-item__meta">${esc(p.gender)} · ${esc(p.category)}</p>
          ${stars(p.rating)}
          <p class="cart-item__price" style="margin-top:8px;">${inr(p.price)}${p.oldPrice ? ` <span class="cart-item__meta" style="text-decoration:line-through;">${inr(p.oldPrice)}</span>` : ""}</p>
        </div>
        <div class="wishlist-item__actions">
          <button class="btn btn--sm" data-movecart="${p.id}"><i class="fa-solid fa-bag-shopping"></i> Move to Bag</button>
          <button class="btn btn--outline btn--sm" data-removewish="${p.id}"><i class="fa-regular fa-trash-can"></i> Remove</button>
        </div>
      </div>`;
      })
      .join("");

    $$("[data-movecart]", wrap).forEach((b) =>
      b.addEventListener("click", () => {
        addToCart(+b.dataset.movecart);
        wishlist = wishlist.filter((w) => w !== +b.dataset.movecart);
        store.set("velora_wishlist", wishlist);
        updateBadges();
        syncWishButtons();
        render();
      }),
    );
    $$("[data-removewish]", wrap).forEach((b) =>
      b.addEventListener("click", () => {
        toggleWishlist(+b.dataset.removewish);
        render();
      }),
    );
  }
  render();
}

/* ---------- Lookbook lightbox ---------- */
let lbItems = [],
  lbIndex = 0;
function initLookbook() {
  const items = $$(".look-item");
  lbItems = items.map((el) => ({
    src: $("img", el).src.replace(/w=\d+/, "w=1600"),
    caption:
      ($(".look-item__collection", el)?.textContent || "") +
      " — " +
      ($(".look-item__desc", el)?.textContent || ""),
  }));
  items.forEach((el, i) => el.addEventListener("click", () => openLightbox(i)));

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Lookbook image viewer");
  lb.innerHTML = `
    <button class="lightbox__btn lightbox__close" data-lbclose aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <button class="lightbox__btn lightbox__prev" data-lbprev aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
    <img class="lightbox__img" alt="Lookbook look">
    <button class="lightbox__btn lightbox__next" data-lbnext aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
    <p class="lightbox__caption"></p>`;
  document.body.appendChild(lb);

  $("[data-lbclose]", lb).addEventListener("click", closeLightbox);
  $("[data-lbprev]", lb).addEventListener("click", () => showLb(lbIndex - 1));
  $("[data-lbnext]", lb).addEventListener("click", () => showLb(lbIndex + 1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
}
function openLightbox(i) {
  lbIndex = i;
  showLb(i);
  $("#lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function showLb(i) {
  if (!lbItems.length) return;
  lbIndex = (i + lbItems.length) % lbItems.length;
  const img = $(".lightbox__img");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = lbItems[lbIndex].src;
    img.alt = lbItems[lbIndex].caption;
    img.style.opacity = 1;
  }, 150);
  $(".lightbox__caption").textContent = lbItems[lbIndex].caption;
}
function closeLightbox() {
  const lb = $("#lightbox");
  if (!lb || !lb.classList.contains("open")) return;
  lb.classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  const lb = $("#lightbox");
  if (lb && lb.classList.contains("open")) {
    if (e.key === "ArrowRight") showLb(lbIndex + 1);
    if (e.key === "ArrowLeft") showLb(lbIndex - 1);
  }
});

/* ---------- Contact form ---------- */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = {
      name: { el: $("#cName"), test: (v) => v.length >= 2 },
      email: {
        el: $("#cEmail"),
        test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
      },
      phone: {
        el: $("#cPhone"),
        test: (v) => /^[+\d][\d\s-]{8,14}$/.test(v.trim()),
      },
      subject: { el: $("#cSubject"), test: (v) => v.length >= 3 },
      message: { el: $("#cMessage"), test: (v) => v.length >= 10 },
    };
    let valid = true;
    for (const key of Object.keys(fields)) {
      const f = fields[key];
      const ok = f.test(f.el.value.trim());
      f.el.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    }
    const msg = $("#contactMsg");
    if (!valid) {
      msg.textContent = "Please correct the highlighted fields and try again.";
      msg.className = "form-msg err";
      return;
    }
    form.innerHTML = `
      <div class="form-success">
        <i class="fa-solid fa-circle-check"></i>
        <h3>Message Sent</h3>
        <p>Thank you for reaching out. Our concierge team will respond within 24 hours.</p>
      </div>`;
    toast("Message sent successfully", "fa-paper-plane");
  });
}

/* ---------- Login / Register (demo) ---------- */
function initAuth() {
  const tabs = $$(".auth-tabs button");
  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      $$(".auth-form").forEach((f) => f.classList.remove("active"));
      $(`#${t.dataset.form}`).classList.add("active");
    }),
  );

  /* Login */
  const loginForm = $("#loginForm");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#loginEmail").value.trim();
    const pass = $("#loginPassword").value;
    const msg = $("#loginMsg");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "form-msg err";
      return;
    }
    if (pass.length < 6) {
      msg.textContent = "Password must be at least 6 characters.";
      msg.className = "form-msg err";
      return;
    }
    store.set("velora_user", {
      email,
      remember: $("#rememberMe").checked,
      name: email.split("@")[0],
    });
    msg.textContent = "Welcome back. Redirecting…";
    msg.className = "form-msg ok";
    toast(`Signed in as ${email}`, "fa-circle-check");
    setTimeout(() => (location.href = "index.html"), 900);
  });
  $("#forgotLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    toast("A reset link has been sent to your email (demo).", "fa-envelope");
  });

  /* Register */
  const regForm = $("#registerForm");
  regForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#regName").value.trim();
    const email = $("#regEmail").value.trim();
    const pass = $("#regPassword").value;
    const confirm = $("#regConfirm").value;
    const msg = $("#registerMsg");
    if (name.length < 2) {
      msg.textContent = "Please enter your full name.";
      msg.className = "form-msg err";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "form-msg err";
      return;
    }
    if (pass.length < 6) {
      msg.textContent = "Password must be at least 6 characters.";
      msg.className = "form-msg err";
      return;
    }
    if (pass !== confirm) {
      msg.textContent = "Passwords do not match.";
      msg.className = "form-msg err";
      return;
    }
    store.set("velora_user", { email, name });
    msg.textContent = "Account created. Welcome to VELORA.";
    msg.className = "form-msg ok";
    toast("Account created successfully", "fa-circle-check");
    setTimeout(() => (location.href = "index.html"), 900);
  });
}

/* If user is logged in, reflect it subtly in the account icon tooltip */
document.addEventListener("DOMContentLoaded", () => {
  const user = store.get("velora_user", null);
  const acc = $('a[href="login.html"].icon-btn');
  if (user && acc) acc.setAttribute("title", `Signed in: ${user.email}`);
});
