import { Product } from "@/types/Product";



export const featuredProducts: Product[] = [
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    categoryId: "electronics",
    brandId: "Sony",
    price: 29990,
    originalPrice: 34990,
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 2100,
    stock: 25,
    images: "/featuredProduct/headphone.webp",

    description:
      "Premium wireless noise-cancelling headphones with immersive sound.",
  },
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    slug: "nike-air-max-270",
    categoryId: "footwear",
    brandId: "Nike",
    price: 8999,
    originalPrice: 11995,
    discountPercentage: 25,
    rating: 4.6,
    reviewCount: 3400,
    stock: 32,
    images: "/featuredProduct/nike shoe.webp",

    description: "Comfortable everyday sneakers featuring Nike Air cushioning.",
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    slug: "apple-watch-series-9",
    categoryId: "electronics",
    brandId: "Apple",
    price: 41900,
    originalPrice: 45900,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 1800,
    stock: 18,
    images: "/featuredProduct/watch.webp",

    description:
      "Advanced smartwatch with health, fitness and smart connectivity features.",
  },
  {
    id: "the-ordinary-niacinamide",
    name: "The Ordinary",
    slug: "the-ordinary-niacinamide-10",
    categoryId: "beauty",
    brandId: "The-Ordinary",
    price: 699,
    originalPrice: 899,
    discountPercentage: 22,
    rating: 4.5,
    reviewCount: 892,
    stock: 45,
    images: "/featuredProduct/serum.webp",

    description: "Niacinamide 10% serum formulated for everyday skincare.",
  },
  {
    id: "adidas-urban-backpack",
    name: "Adidas",
    slug: "adidas-urban-backpack",
    categoryId: "bags",
    brandId: "Adidas",
    price: 3499,
    originalPrice: 4499,
    discountPercentage: 22,
    rating: 4.6,
    reviewCount: 1100,
    stock: 27,
    images: "/featuredProduct/bag.webp",

    description: "A versatile urban backpack designed for everyday use.",
  },
];

export const searchProduct:Product[]=[
  {
    id: "elec-005",
    name: "Samsung 55-inch Crystal 4K TV",
    slug: "samsung-55-inch-crystal-4k-tv",
    categoryId: "electronics",
    brandId: "samsung",
    price: 42999,
    originalPrice: 59999,
    discountPercentage: 28,
    rating: 4.5,
    reviewCount: 720,
    stock: 14,
    images: "/ProductsImages/Samsung Crystal UHD 4K TV Product Hero.webp",
    description:
      "4K smart television with vivid colors, smart streaming apps and a slim design.",
      isNew:false

  },
  {
     id: "elec-007",
    name: "Samsung Galaxy Tab S9 FE",
    slug: "samsung-galaxy-tab-s9-fe",
    categoryId: "electronics",
    brandId: "samsung",
    price: 32999,
    originalPrice: 39999,
    discountPercentage: 18,
    rating: 4.6,
    reviewCount: 860,
    stock: 24,
    images: "/ProductsImages/p3.webp",
    description:
      "Versatile Android tablet for entertainment, productivity and creative work.",
      isNew:true

  },
  {
    id: "elec-010",
    name: "Samsung 990 EVO SSD 1TB",
    slug: "samsung-990-evo-1tb",
    categoryId: "electronics",
    brandId: "samsung",
    price: 8499,
    originalPrice: 10999,
    discountPercentage: 23,
    rating: 4.7,
    reviewCount: 410,
    stock: 63,
    images: "/ProductsImages/p2.webp",
    description:
      "High-performance NVMe SSD designed for fast storage and responsive computing.",
      isNew:false

  },{
     id: "fashion-001",
    name: "Classic Oversized Cotton Shirt",
    slug: "classic-oversized-cotton-shirt",
    categoryId: "fashion",
    brandId: "zara",
    price: 1990,
    originalPrice: 2990,
    discountPercentage: 33,
    rating: 4.5,
    reviewCount: 820,
    stock: 91,
    images: "/ProductsImages/p1.webp",
    description:
      "Relaxed-fit cotton shirt designed for effortless everyday styling.",
      isNew:false

  },{ 
    
    id: "fashion-002",
    name: "Premium Relaxed Fit T-Shirt",
    slug: "premium-relaxed-fit-tshirt",
    categoryId: "fashion",
    brandId: "hm",
    price: 999,
    originalPrice: 1499,
    discountPercentage: 33,
    rating: 4.4,
    reviewCount: 1150,
    stock: 128,
    images: "/ProductsImages/overSizedShirt.webp",
    description:
      "Soft premium cotton T-shirt with a modern relaxed silhouette.",
     isNew:true
}
]

  // =========================================================
  // ELECTRONICS — 10
  // =========================================================

//   {
//     id: "elec-001",
//     name: "Sony WH-1000XM5",
//     slug: "sony-wh-1000xm5",
//     categoryId: "electronics",
//     brandId: "sony",
//     price: 29990,
//     originalPrice: 34990,
//     discountPercentage: 14,
//     rating: 4.8,
//     reviewCount: 2100,
//     stock: 42,
//     images: ["/images/products/electronics/sony-wh-1000xm5.webp"],
//     description:
//       "Premium wireless noise-cancelling headphones with immersive sound and long battery life.",
//   },

//   {
//     id: "elec-002",
//     name: "Apple AirPods Pro 2",
//     slug: "apple-airpods-pro-2",
//     categoryId: "electronics",
//     brandId: "apple",
//     price: 19900,
//     originalPrice: 24900,
//     discountPercentage: 20,
//     rating: 4.7,
//     reviewCount: 1850,
//     stock: 35,
//     images: ["/images/products/electronics/apple-airpods-pro-2.webp"],
//     description:
//       "Wireless earbuds with active noise cancellation, transparency mode and spatial audio.",
//   },

//   {
//     id: "elec-003",
//     name: "Samsung Galaxy Buds3 Pro",
//     slug: "samsung-galaxy-buds3-pro",
//     categoryId: "electronics",
//     brandId: "samsung",
//     price: 14999,
//     originalPrice: 17999,
//     discountPercentage: 17,
//     rating: 4.6,
//     reviewCount: 940,
//     stock: 58,
//     images: ["/images/products/electronics/samsung-galaxy-buds3-pro.webp"],
//     description:
//       "Premium wireless earbuds with intelligent noise cancellation and high-resolution audio.",
//   },

//   {
//     id: "elec-004",
//     name: "Apple Watch Series 9",
//     slug: "apple-watch-series-9",
//     categoryId: "electronics",
//     brandId: "apple",
//     price: 41900,
//     originalPrice: 45900,
//     discountPercentage: 9,
//     rating: 4.7,
//     reviewCount: 1800,
//     stock: 27,
//     images: ["/images/products/electronics/apple-watch-series-9.webp"],
//     description:
//       "Smartwatch with fitness tracking, notifications, health features and a bright Retina display.",
//   },

//   {
//     id: "elec-005",
//     name: "Samsung 55-inch Crystal 4K TV",
//     slug: "samsung-55-inch-crystal-4k-tv",
//     categoryId: "electronics",
//     brandId: "samsung",
//     price: 42999,
//     originalPrice: 59999,
//     discountPercentage: 28,
//     rating: 4.5,
//     reviewCount: 720,
//     stock: 14,
//     images: ["/images/products/electronics/samsung-55-inch-tv.webp"],
//     description:
//       "4K smart television with vivid colours, smart streaming apps and a slim design.",
//   },

//   {
//     id: "elec-006",
//     name: "Sony Bravia Soundbar",
//     slug: "sony-bravia-soundbar",
//     categoryId: "electronics",
//     brandId: "sony",
//     price: 18990,
//     originalPrice: 22990,
//     discountPercentage: 17,
//     rating: 4.5,
//     reviewCount: 530,
//     stock: 31,
//     images: ["/images/products/electronics/sony-bravia-soundbar.webp"],
//     description:
//       "Compact soundbar designed to deliver cinematic audio for your living room.",
//   },

//   {
//     id: "elec-007",
//     name: "Samsung Galaxy Tab S9 FE",
//     slug: "samsung-galaxy-tab-s9-fe",
//     categoryId: "electronics",
//     brandId: "samsung",
//     price: 32999,
//     originalPrice: 39999,
//     discountPercentage: 18,
//     rating: 4.6,
//     reviewCount: 860,
//     stock: 24,
//     images: ["/images/products/electronics/samsung-galaxy-tab-s9-fe.webp"],
//     description:
//       "Versatile Android tablet for entertainment, productivity and creative work.",
//   },

//   {
//     id: "elec-008",
//     name: "Sony WH-CH720N",
//     slug: "sony-wh-ch720n",
//     categoryId: "electronics",
//     brandId: "sony",
//     price: 8490,
//     originalPrice: 12990,
//     discountPercentage: 35,
//     rating: 4.4,
//     reviewCount: 1240,
//     stock: 76,
//     images: ["/images/products/electronics/sony-wh-ch720n.webp"],
//     description:
//       "Lightweight wireless headphones featuring noise cancellation and all-day comfort.",
//   },

//   {
//     id: "elec-009",
//     name: "Apple Magic Mouse",
//     slug: "apple-magic-mouse",
//     categoryId: "electronics",
//     brandId: "apple",
//     price: 7990,
//     originalPrice: 9490,
//     discountPercentage: 16,
//     rating: 4.3,
//     reviewCount: 620,
//     stock: 44,
//     images: ["/images/products/electronics/apple-magic-mouse.webp"],
//     description:
//       "Wireless rechargeable mouse with a minimalist multi-touch surface.",
//   },

//   {
//     id: "elec-010",
//     name: "Samsung 990 EVO SSD 1TB",
//     slug: "samsung-990-evo-1tb",
//     categoryId: "electronics",
//     brandId: "samsung",
//     price: 8499,
//     originalPrice: 10999,
//     discountPercentage: 23,
//     rating: 4.7,
//     reviewCount: 410,
//     stock: 63,
//     images: ["/images/products/electronics/samsung-990-evo-1tb.webp"],
//     description:
//       "High-performance NVMe SSD designed for fast storage and responsive computing.",
//   },

//   // =========================================================
//   // FASHION — 10
//   // =========================================================

//   {
//     id: "fashion-001",
//     name: "Classic Oversized Cotton Shirt",
//     slug: "classic-oversized-cotton-shirt",
//     categoryId: "fashion",
//     brandId: "zara",
//     price: 1990,
//     originalPrice: 2990,
//     discountPercentage: 33,
//     rating: 4.5,
//     reviewCount: 820,
//     stock: 91,
//     images: ["/images/products/fashion/oversized-cotton-shirt.webp"],
//     description:
//       "Relaxed-fit cotton shirt designed for effortless everyday styling.",
//   },

//   {
//     id: "fashion-002",
//     name: "Premium Relaxed Fit T-Shirt",
//     slug: "premium-relaxed-fit-tshirt",
//     categoryId: "fashion",
//     brandId: "hm",
//     price: 999,
//     originalPrice: 1499,
//     discountPercentage: 33,
//     rating: 4.4,
//     reviewCount: 1150,
//     stock: 128,
//     images: ["/images/products/fashion/relaxed-fit-tshirt.webp"],
//     description:
//       "Soft premium cotton T-shirt with a modern relaxed silhouette.",
//   },

//   {
//     id: "fashion-003",
//     name: "Slim Fit Oxford Shirt",
//     slug: "slim-fit-oxford-shirt",
//     categoryId: "fashion",
//     brandId: "zara",
//     price: 2490,
//     originalPrice: 3490,
//     discountPercentage: 29,
//     rating: 4.6,
//     reviewCount: 690,
//     stock: 52,
//     images: ["/images/products/fashion/slim-oxford-shirt.webp"],
//     description:
//       "Smart Oxford shirt suitable for work, casual evenings and occasions.",
//   },

//   {
//     id: "fashion-004",
//     name: "Straight Fit Denim Jeans",
//     slug: "straight-fit-denim-jeans",
//     categoryId: "fashion",
//     brandId: "hm",
//     price: 2299,
//     originalPrice: 3299,
//     discountPercentage: 30,
//     rating: 4.5,
//     reviewCount: 930,
//     stock: 73,
//     images: ["/images/products/fashion/straight-fit-jeans.webp"],
//     description:
//       "Classic straight-fit denim with a comfortable everyday construction.",
//   },

//   {
//     id: "fashion-005",
//     name: "Minimal Linen Blend Shirt",
//     slug: "minimal-linen-blend-shirt",
//     categoryId: "fashion",
//     brandId: "zara",
//     price: 2790,
//     originalPrice: 3990,
//     discountPercentage: 30,
//     rating: 4.7,
//     reviewCount: 470,
//     stock: 38,
//     images: ["/images/products/fashion/linen-blend-shirt.webp"],
//     description:
//       "Breathable linen-blend shirt with a clean minimal design.",
//   },

//   {
//     id: "fashion-006",
//     name: "Essential Polo T-Shirt",
//     slug: "essential-polo-tshirt",
//     categoryId: "fashion",
//     brandId: "hm",
//     price: 1499,
//     originalPrice: 1999,
//     discountPercentage: 25,
//     rating: 4.3,
//     reviewCount: 710,
//     stock: 85,
//     images: ["/images/products/fashion/essential-polo.webp"],
//     description:
//       "Classic polo T-shirt with a versatile design for everyday wear.",
//   },

//   {
//     id: "fashion-007",
//     name: "Premium Knit Sweater",
//     slug: "premium-knit-sweater",
//     categoryId: "fashion",
//     brandId: "zara",
//     price: 3290,
//     originalPrice: 4490,
//     discountPercentage: 27,
//     rating: 4.6,
//     reviewCount: 360,
//     stock: 29,
//     images: ["/images/products/fashion/knit-sweater.webp"],
//     description:
//       "Soft knit sweater designed for a refined cold-weather wardrobe.",
//   },

//   {
//     id: "fashion-008",
//     name: "Relaxed Cargo Trousers",
//     slug: "relaxed-cargo-trousers",
//     categoryId: "fashion",
//     brandId: "hm",
//     price: 2199,
//     originalPrice: 2999,
//     discountPercentage: 27,
//     rating: 4.4,
//     reviewCount: 580,
//     stock: 61,
//     images: ["/images/products/fashion/cargo-trousers.webp"],
//     description:
//       "Relaxed cargo trousers with multiple utility pockets.",
//   },

//   {
//     id: "fashion-009",
//     name: "Classic Denim Jacket",
//     slug: "classic-denim-jacket",
//     categoryId: "fashion",
//     brandId: "zara",
//     price: 3990,
//     originalPrice: 5490,
//     discountPercentage: 27,
//     rating: 4.7,
//     reviewCount: 410,
//     stock: 34,
//     images: ["/images/products/fashion/denim-jacket.webp"],
//     description:
//       "Timeless denim jacket that works across casual outfits and seasons.",
//   },

//   {
//     id: "fashion-010",
//     name: "Everyday Chino Pants",
//     slug: "everyday-chino-pants",
//     categoryId: "fashion",
//     brandId: "hm",
//     price: 1999,
//     originalPrice: 2799,
//     discountPercentage: 29,
//     rating: 4.5,
//     reviewCount: 760,
//     stock: 69,
//     images: ["/images/products/fashion/chino-pants.webp"],
//     description:
//       "Comfortable chino trousers designed for everyday smart-casual outfits.",
//   },

//   // =========================================================
//   // FOOTWEAR — 10
//   // =========================================================

//   {
//     id: "foot-001",
//     name: "Nike Air Max 270",
//     slug: "nike-air-max-270",
//     categoryId: "footwear",
//     brandId: "nike",
//     price: 8999,
//     originalPrice: 11995,
//     discountPercentage: 25,
//     rating: 4.6,
//     reviewCount: 3400,
//     stock: 47,
//     images: ["/images/products/footwear/nike-air-max-270.webp"],
//     description:
//       "Lifestyle sneakers featuring visible Air cushioning and a bold modern silhouette.",
//   },

//   {
//     id: "foot-002",
//     name: "Adidas Ultraboost Light",
//     slug: "adidas-ultraboost-light",
//     categoryId: "footwear",
//     brandId: "adidas",
//     price: 10999,
//     originalPrice: 16999,
//     discountPercentage: 35,
//     rating: 4.7,
//     reviewCount: 2100,
//     stock: 39,
//     images: ["/images/products/footwear/adidas-ultraboost.webp"],
//     description:
//       "Responsive running shoes built for comfortable everyday movement.",
//   },

//   {
//     id: "foot-003",
//     name: "Nike Court Vision Low",
//     slug: "nike-court-vision-low",
//     categoryId: "footwear",
//     brandId: "nike",
//     price: 5499,
//     originalPrice: 7495,
//     discountPercentage: 27,
//     rating: 4.4,
//     reviewCount: 1320,
//     stock: 58,
//     images: ["/images/products/footwear/nike-court-vision.webp"],
//     description:
//       "Clean low-top sneakers inspired by classic basketball styling.",
//   },

//   {
//     id: "foot-004",
//     name: "Adidas Grand Court 2.0",
//     slug: "adidas-grand-court-2",
//     categoryId: "footwear",
//     brandId: "adidas",
//     price: 4499,
//     originalPrice: 6499,
//     discountPercentage: 31,
//     rating: 4.5,
//     reviewCount: 1180,
//     stock: 72,
//     images: ["/images/products/footwear/adidas-grand-court.webp"],
//     description:
//       "Classic court-inspired sneakers with a versatile everyday design.",
//   },

//   {
//     id: "foot-005",
//     name: "Nike Revolution 7",
//     slug: "nike-revolution-7",
//     categoryId: "footwear",
//     brandId: "nike",
//     price: 3299,
//     originalPrice: 4995,
//     discountPercentage: 34,
//     rating: 4.4,
//     reviewCount: 970,
//     stock: 83,
//     images: ["/images/products/footwear/nike-revolution-7.webp"],
//     description:
//       "Lightweight running shoes designed for daily training and casual use.",
//   },

//   {
//     id: "foot-006",
//     name: "Adidas Samba OG",
//     slug: "adidas-samba-og",
//     categoryId: "footwear",
//     brandId: "adidas",
//     price: 10999,
//     originalPrice: 12999,
//     discountPercentage: 15,
//     rating: 4.8,
//     reviewCount: 890,
//     stock: 25,
//     images: ["/images/products/footwear/adidas-samba-og.webp"],
//     description:
//       "Iconic low-profile sneakers with a timeless streetwear aesthetic.",
//   },

//   {
//     id: "foot-007",
//     name: "Nike Air Force 1 '07",
//     slug: "nike-air-force-1-07",
//     categoryId: "footwear",
//     brandId: "nike",
//     price: 7499,
//     originalPrice: 8495,
//     discountPercentage: 12,
//     rating: 4.7,
//     reviewCount: 2650,
//     stock: 44,
//     images: ["/images/products/footwear/nike-air-force-1.webp"],
//     description:
//       "Iconic everyday sneakers with a clean leather-inspired upper.",
//   },

//   {
//     id: "foot-008",
//     name: "Adidas Runfalcon 5",
//     slug: "adidas-runfalcon-5",
//     categoryId: "footwear",
//     brandId: "adidas",
//     price: 3599,
//     originalPrice: 4999,
//     discountPercentage: 28,
//     rating: 4.3,
//     reviewCount: 630,
//     stock: 91,
//     images: ["/images/products/footwear/adidas-runfalcon.webp"],
//     description:
//       "Comfort-focused running shoes for everyday training and walking.",
//   },

//   {
//     id: "foot-009",
//     name: "Nike Dunk Low",
//     slug: "nike-dunk-low",
//     categoryId: "footwear",
//     brandId: "nike",
//     price: 8299,
//     originalPrice: 9995,
//     discountPercentage: 17,
//     rating: 4.6,
//     reviewCount: 1740,
//     stock: 33,
//     images: ["/images/products/footwear/nike-dunk-low.webp"],
//     description:
//       "Low-top sneakers combining classic basketball inspiration with modern styling.",
//   },

//   {
//     id: "foot-010",
//     name: "Adidas Lite Racer Adapt",
//     slug: "adidas-lite-racer-adapt",
//     categoryId: "footwear",
//     brandId: "adidas",
//     price: 2999,
//     originalPrice: 4299,
//     discountPercentage: 30,
//     rating: 4.4,
//     reviewCount: 540,
//     stock: 67,
//     images: ["/images/products/footwear/adidas-lite-racer.webp"],
//     description:
//       "Easy-slip lifestyle shoes designed for lightweight everyday comfort.",
//   },

//   // =========================================================
//   // HOME & LIVING — 10
//   // =========================================================

//   {
//     id: "home-001",
//     name: "Minimal Ceramic Table Lamp",
//     slug: "minimal-ceramic-table-lamp",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 1899,
//     originalPrice: 2499,
//     discountPercentage: 24,
//     rating: 4.6,
//     reviewCount: 420,
//     stock: 36,
//     images: ["/images/products/home-living/ceramic-table-lamp.webp"],
//     description:
//       "Minimal ceramic table lamp designed to add warm ambient lighting.",
//   },

//   {
//     id: "home-002",
//     name: "Premium Cotton Bedsheet",
//     slug: "premium-cotton-bedsheet",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 1499,
//     originalPrice: 2199,
//     discountPercentage: 32,
//     rating: 4.5,
//     reviewCount: 860,
//     stock: 73,
//     images: ["/images/products/home-living/cotton-bedsheet.webp"],
//     description:
//       "Soft cotton bedsheet with a clean contemporary pattern.",
//   },

//   {
//     id: "home-003",
//     name: "Nordic Accent Chair",
//     slug: "nordic-accent-chair",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 8999,
//     originalPrice: 11999,
//     discountPercentage: 25,
//     rating: 4.7,
//     reviewCount: 190,
//     stock: 12,
//     images: ["/images/products/home-living/accent-chair.webp"],
//     description:
//       "Modern accent chair with a comfortable seat and minimalist silhouette.",
//   },

//   {
//     id: "home-004",
//     name: "Wooden Floating Shelf",
//     slug: "wooden-floating-shelf",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 1299,
//     originalPrice: 1799,
//     discountPercentage: 28,
//     rating: 4.4,
//     reviewCount: 310,
//     stock: 48,
//     images: ["/images/products/home-living/floating-shelf.webp"],
//     description:
//       "Simple wall-mounted shelf for displaying books, decor and accessories.",
//   },

//   {
//     id: "home-005",
//     name: "Aroma Diffuser",
//     slug: "aroma-diffuser",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 1599,
//     originalPrice: 2299,
//     discountPercentage: 30,
//     rating: 4.5,
//     reviewCount: 580,
//     stock: 64,
//     images: ["/images/products/home-living/aroma-diffuser.webp"],
//     description:
//       "Compact aroma diffuser designed to create a relaxing home atmosphere.",
//   },

//   {
//     id: "home-006",
//     name: "Stoneware Dinner Set",
//     slug: "stoneware-dinner-set",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 2999,
//     originalPrice: 3999,
//     discountPercentage: 25,
//     rating: 4.6,
//     reviewCount: 270,
//     stock: 29,
//     images: ["/images/products/home-living/dinner-set.webp"],
//     description:
//       "Modern stoneware dinner set designed for everyday dining and entertaining.",
//   },

//   {
//     id: "home-007",
//     name: "Minimal Wall Clock",
//     slug: "minimal-wall-clock",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 1199,
//     originalPrice: 1699,
//     discountPercentage: 29,
//     rating: 4.3,
//     reviewCount: 340,
//     stock: 55,
//     images: ["/images/products/home-living/wall-clock.webp"],
//     description:
//       "Minimal wall clock with a clean face and contemporary design.",
//   },

//   {
//     id: "home-008",
//     name: "Memory Foam Cushion",
//     slug: "memory-foam-cushion",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 899,
//     originalPrice: 1299,
//     discountPercentage: 31,
//     rating: 4.4,
//     reviewCount: 490,
//     stock: 82,
//     images: ["/images/products/home-living/memory-foam-cushion.webp"],
//     description:
//       "Supportive memory foam cushion designed for comfortable seating.",
//   },

//   {
//     id: "home-009",
//     name: "Matte Ceramic Vase",
//     slug: "matte-ceramic-vase",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 999,
//     originalPrice: 1499,
//     discountPercentage: 33,
//     rating: 4.5,
//     reviewCount: 230,
//     stock: 47,
//     images: ["/images/products/home-living/ceramic-vase.webp"],
//     description:
//       "Decorative matte ceramic vase with a modern sculptural shape.",
//   },

//   {
//     id: "home-010",
//     name: "Premium Throw Blanket",
//     slug: "premium-throw-blanket",
//     categoryId: "home-living",
//     brandId: "nexora-home",
//     price: 1799,
//     originalPrice: 2499,
//     discountPercentage: 28,
//     rating: 4.6,
//     reviewCount: 360,
//     stock: 41,
//     images: ["/images/products/home-living/throw-blanket.webp"],
//     description:
//       "Soft textured throw blanket for bedrooms, sofas and relaxing spaces.",
//   },

//   // =========================================================
//   // BEAUTY — 10
//   // =========================================================

//   {
//     id: "beauty-001",
//     name: "The Ordinary Niacinamide 10%",
//     slug: "the-ordinary-niacinamide-10",
//     categoryId: "beauty",
//     brandId: "the-ordinary",
//     price: 699,
//     originalPrice: 899,
//     discountPercentage: 22,
//     rating: 4.5,
//     reviewCount: 892,
//     stock: 120,
//     images: ["/images/products/beauty/the-ordinary-niacinamide.webp"],
//     description:
//       "Lightweight facial serum formulated with niacinamide and zinc.",
//   },

//   {
//     id: "beauty-002",
//     name: "Minimalist Vitamin C 10%",
//     slug: "minimalist-vitamin-c-10",
//     categoryId: "beauty",
//     brandId: "minimalist",
//     price: 599,
//     originalPrice: 699,
//     discountPercentage: 14,
//     rating: 4.4,
//     reviewCount: 1250,
//     stock: 95,
//     images: ["/images/products/beauty/minimalist-vitamin-c.webp"],
//     description:
//       "Vitamin C facial serum designed for a simple everyday skincare routine.",
//   },

//   {
//     id: "beauty-003",
//     name: "Minimalist Vitamin B5 Moisturizer",
//     slug: "minimalist-vitamin-b5-moisturizer",
//     categoryId: "beauty",
//     brandId: "minimalist",
//     price: 349,
//     originalPrice: 399,
//     discountPercentage: 13,
//     rating: 4.5,
//     reviewCount: 970,
//     stock: 88,
//     images: ["/images/products/beauty/minimalist-b5-moisturizer.webp"],
//     description:
//       "Lightweight moisturizer formulated for everyday hydration.",
//   },

//   {
//     id: "beauty-004",
//     name: "The Ordinary Hyaluronic Acid 2%",
//     slug: "the-ordinary-hyaluronic-acid-2",
//     categoryId: "beauty",
//     brandId: "the-ordinary",
//     price: 749,
//     originalPrice: 999,
//     discountPercentage: 25,
//     rating: 4.6,
//     reviewCount: 1130,
//     stock: 74,
//     images: ["/images/products/beauty/the-ordinary-hyaluronic.webp"],
//     description:
//       "Hydrating serum designed to support a smooth and hydrated skin feel.",
//   },

//   {
//     id: "beauty-005",
//     name: "Minimalist SPF 50 Sunscreen",
//     slug: "minimalist-spf-50-sunscreen",
//     categoryId: "beauty",
//     brandId: "minimalist",
//     price: 449,
//     originalPrice: 499,
//     discountPercentage: 10,
//     rating: 4.5,
//     reviewCount: 1640,
//     stock: 110,
//     images: ["/images/products/beauty/minimalist-spf-50.webp"],
//     description:
//       "Lightweight daily sunscreen designed for broad-spectrum sun protection.",
//   },

//   {
//     id: "beauty-006",
//     name: "The Ordinary Squalane Cleanser",
//     slug: "the-ordinary-squalane-cleanser",
//     categoryId: "beauty",
//     brandId: "the-ordinary",
//     price: 899,
//     originalPrice: 1099,
//     discountPercentage: 18,
//     rating: 4.4,
//     reviewCount: 670,
//     stock: 57,
//     images: ["/images/products/beauty/squalane-cleanser.webp"],
//     description:
//       "Gentle cleanser designed to remove everyday dirt and makeup.",
//   },

//   {
//     id: "beauty-007",
//     name: "Minimalist Salicylic Acid 2%",
//     slug: "minimalist-salicylic-acid-2",
//     categoryId: "beauty",
//     brandId: "minimalist",
//     price: 549,
//     originalPrice: 599,
//     discountPercentage: 8,
//     rating: 4.3,
//     reviewCount: 820,
//     stock: 67,
//     images: ["/images/products/beauty/minimalist-salicylic-acid.webp"],
//     description:
//       "Exfoliating serum designed for targeted skincare routines.",
//   },

//   {
//     id: "beauty-008",
//     name: "Hydrating Face Cleanser",
//     slug: "hydrating-face-cleanser",
//     categoryId: "beauty",
//     brandId: "nexora-beauty",
//     price: 399,
//     originalPrice: 549,
//     discountPercentage: 27,
//     rating: 4.4,
//     reviewCount: 460,
//     stock: 91,
//     images: ["/images/products/beauty/hydrating-cleanser.webp"],
//     description:
//       "Gentle everyday face cleanser designed to leave skin feeling refreshed.",
//   },

//   {
//     id: "beauty-009",
//     name: "Daily Lip Care Balm",
//     slug: "daily-lip-care-balm",
//     categoryId: "beauty",
//     brandId: "nexora-beauty",
//     price: 249,
//     originalPrice: 349,
//     discountPercentage: 29,
//     rating: 4.3,
//     reviewCount: 390,
//     stock: 143,
//     images: ["/images/products/beauty/lip-care-balm.webp"],
//     description:
//       "Moisturizing lip balm designed for everyday lip care.",
//   },

//   {
//     id: "beauty-010",
//     name: "Daily Body Moisturizer",
//     slug: "daily-body-moisturizer",
//     categoryId: "beauty",
//     brandId: "nexora-beauty",
//     price: 499,
//     originalPrice: 699,
//     discountPercentage: 29,
//     rating: 4.4,
//     reviewCount: 510,
//     stock: 76,
//     images: ["/images/products/beauty/body-moisturizer.webp"],
//     description:
//       "Lightweight body moisturizer designed for everyday hydration.",
//   },

//   // =========================================================
//   // SPORTS — 10
//   // =========================================================

//   {
//     id: "sport-001",
//     name: "Nike Training Dri-FIT T-Shirt",
//     slug: "nike-training-dri-fit-tshirt",
//     categoryId: "sports",
//     brandId: "nike",
//     price: 1799,
//     originalPrice: 2495,
//     discountPercentage: 28,
//     rating: 4.5,
//     reviewCount: 740,
//     stock: 64,
//     images: ["/images/products/sports/nike-dri-fit-tshirt.webp"],
//     description:
//       "Lightweight training T-shirt designed for comfortable workouts.",
//   },

//   {
//     id: "sport-002",
//     name: "Adidas Training Shorts",
//     slug: "adidas-training-shorts",
//     categoryId: "sports",
//     brandId: "adidas",
//     price: 1599,
//     originalPrice: 2299,
//     discountPercentage: 30,
//     rating: 4.4,
//     reviewCount: 520,
//     stock: 78,
//     images: ["/images/products/sports/adidas-training-shorts.webp"],
//     description:
//       "Lightweight athletic shorts suitable for training and everyday activity.",
//   },

//   {
//     id: "sport-003",
//     name: "Nike Yoga Mat",
//     slug: "nike-yoga-mat",
//     categoryId: "sports",
//     brandId: "nike",
//     price: 2499,
//     originalPrice: 3295,
//     discountPercentage: 24,
//     rating: 4.5,
//     reviewCount: 310,
//     stock: 42,
//     images: ["/images/products/sports/nike-yoga-mat.webp"],
//     description:
//       "Cushioned exercise mat designed for yoga, stretching and floor workouts.",
//   },

//   {
//     id: "sport-004",
//     name: "Adidas Training Gloves",
//     slug: "adidas-training-gloves",
//     categoryId: "sports",
//     brandId: "adidas",
//     price: 899,
//     originalPrice: 1299,
//     discountPercentage: 31,
//     rating: 4.3,
//     reviewCount: 290,
//     stock: 57,
//     images: ["/images/products/sports/adidas-training-gloves.webp"],
//     description:
//       "Training gloves designed to provide grip and comfort during workouts.",
//   },

//   {
//     id: "sport-005",
//     name: "Nike Resistance Band Set",
//     slug: "nike-resistance-band-set",
//     categoryId: "sports",
//     brandId: "nike",
//     price: 1499,
//     originalPrice: 1995,
//     discountPercentage: 25,
//     rating: 4.6,
//     reviewCount: 410,
//     stock: 69,
//     images: ["/images/products/sports/nike-resistance-bands.webp"],
//     description:
//       "Resistance band set for strength training and mobility exercises.",
//   },

//   {
//     id: "sport-006",
//     name: "Adidas Football Training Ball",
//     slug: "adidas-football-training-ball",
//     categoryId: "sports",
//     brandId: "adidas",
//     price: 1299,
//     originalPrice: 1799,
//     discountPercentage: 28,
//     rating: 4.5,
//     reviewCount: 680,
//     stock: 85,
//     images: ["/images/products/sports/adidas-football.webp"],
//     description:
//       "Durable training football designed for recreational and practice sessions.",
//   },

//   {
//     id: "sport-007",
//     name: "Nike Running Cap",
//     slug: "nike-running-cap",
//     categoryId: "sports",
//     brandId: "nike",
//     price: 999,
//     originalPrice: 1495,
//     discountPercentage: 33,
//     rating: 4.4,
//     reviewCount: 330,
//     stock: 71,
//     images: ["/images/products/sports/nike-running-cap.webp"],
//     description:
//       "Lightweight running cap designed for outdoor training sessions.",
//   },

//   {
//     id: "sport-008",
//     name: "Adidas Performance Water Bottle",
//     slug: "adidas-performance-water-bottle",
//     categoryId: "sports",
//     brandId: "adidas",
//     price: 699,
//     originalPrice: 999,
//     discountPercentage: 30,
//     rating: 4.4,
//     reviewCount: 420,
//     stock: 96,
//     images: ["/images/products/sports/adidas-water-bottle.webp"],
//     description:
//       "Reusable sports bottle designed for workouts and outdoor activities.",
//   },

//   {
//     id: "sport-009",
//     name: "Nike Training Backpack",
//     slug: "nike-training-backpack",
//     categoryId: "sports",
//     brandId: "nike",
//     price: 2499,
//     originalPrice: 3495,
//     discountPercentage: 28,
//     rating: 4.6,
//     reviewCount: 570,
//     stock: 38,
//     images: ["/images/products/sports/nike-training-backpack.webp"],
//     description:
//       "Functional training backpack with dedicated storage for daily essentials.",
//   },

//   {
//     id: "sport-010",
//     name: "Adidas Foam Roller",
//     slug: "adidas-foam-roller",
//     categoryId: "sports",
//     brandId: "adidas",
//     price: 1199,
//     originalPrice: 1699,
//     discountPercentage: 29,
//     rating: 4.5,
//     reviewCount: 260,
//     stock: 49,
//     images: ["/images/products/sports/adidas-foam-roller.webp"],
//     description:
//       "Textured foam roller designed for recovery and mobility routines.",
//   },

//   // =========================================================
//   // ACCESSORIES — 10
//   // =========================================================

//   {
//     id: "acc-001",
//     name: "Minimal Steel Analog Watch",
//     slug: "minimal-steel-analog-watch",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 2499,
//     originalPrice: 3499,
//     discountPercentage: 29,
//     rating: 4.5,
//     reviewCount: 680,
//     stock: 46,
//     images: ["/images/products/accessories/steel-watch.webp"],
//     description:
//       "Minimal analog watch with a stainless steel-inspired design.",
//   },

//   {
//     id: "acc-002",
//     name: "Classic Leather Wallet",
//     slug: "classic-leather-wallet",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 1299,
//     originalPrice: 1799,
//     discountPercentage: 28,
//     rating: 4.6,
//     reviewCount: 820,
//     stock: 73,
//     images: ["/images/products/accessories/leather-wallet.webp"],
//     description:
//       "Compact wallet with multiple card slots and a timeless design.",
//   },

//   {
//     id: "acc-003",
//     name: "Polarized Square Sunglasses",
//     slug: "polarized-square-sunglasses",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 1599,
//     originalPrice: 2299,
//     discountPercentage: 30,
//     rating: 4.4,
//     reviewCount: 510,
//     stock: 61,
//     images: ["/images/products/accessories/square-sunglasses.webp"],
//     description:
//       "Modern square sunglasses with polarized lenses and lightweight frames.",
//   },

//   {
//     id: "acc-004",
//     name: "Premium Canvas Belt",
//     slug: "premium-canvas-belt",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 799,
//     originalPrice: 1199,
//     discountPercentage: 33,
//     rating: 4.3,
//     reviewCount: 340,
//     stock: 92,
//     images: ["/images/products/accessories/canvas-belt.webp"],
//     description:
//       "Durable canvas belt with an adjustable fit for everyday outfits.",
//   },

//   {
//     id: "acc-005",
//     name: "Classic Metal Frame Glasses",
//     slug: "classic-metal-frame-glasses",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 1899,
//     originalPrice: 2499,
//     discountPercentage: 24,
//     rating: 4.5,
//     reviewCount: 270,
//     stock: 37,
//     images: ["/images/products/accessories/metal-frame-glasses.webp"],
//     description:
//       "Minimal metal-frame glasses designed for a sophisticated everyday look.",
//   },

//   {
//     id: "acc-006",
//     name: "Everyday Baseball Cap",
//     slug: "everyday-baseball-cap",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 699,
//     originalPrice: 999,
//     discountPercentage: 30,
//     rating: 4.3,
//     reviewCount: 490,
//     stock: 104,
//     images: ["/images/products/accessories/baseball-cap.webp"],
//     description:
//       "Classic everyday cap with an adjustable back closure.",
//   },

//   {
//     id: "acc-007",
//     name: "Slim Card Holder",
//     slug: "slim-card-holder",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 599,
//     originalPrice: 899,
//     discountPercentage: 33,
//     rating: 4.4,
//     reviewCount: 370,
//     stock: 88,
//     images: ["/images/products/accessories/card-holder.webp"],
//     description:
//       "Slim card holder designed for carrying essential cards without bulk.",
//   },

//   {
//     id: "acc-008",
//     name: "Minimal Chain Bracelet",
//     slug: "minimal-chain-bracelet",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 999,
//     originalPrice: 1499,
//     discountPercentage: 33,
//     rating: 4.2,
//     reviewCount: 210,
//     stock: 45,
//     images: ["/images/products/accessories/chain-bracelet.webp"],
//     description:
//       "Minimal chain bracelet designed to complement casual and smart outfits.",
//   },

//   {
//     id: "acc-009",
//     name: "Classic Analog Sunglasses",
//     slug: "classic-analog-sunglasses",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 1199,
//     originalPrice: 1699,
//     discountPercentage: 29,
//     rating: 4.4,
//     reviewCount: 430,
//     stock: 67,
//     images: ["/images/products/accessories/analog-sunglasses.webp"],
//     description:
//       "Classic sunglasses with a clean frame and versatile everyday styling.",
//   },

//   {
//     id: "acc-010",
//     name: "Textured Everyday Scarf",
//     slug: "textured-everyday-scarf",
//     categoryId: "accessories",
//     brandId: "nexora",
//     price: 899,
//     originalPrice: 1299,
//     discountPercentage: 31,
//     rating: 4.5,
//     reviewCount: 180,
//     stock: 54,
//     images: ["/images/products/accessories/textured-scarf.webp"],
//     description:
//       "Soft textured scarf designed to add a refined layer to everyday outfits.",
//   },

//   // =========================================================
//   // BAGS — 10
//   // =========================================================

//   {
//     id: "bag-001",
//     name: "Adidas Urban Backpack",
//     slug: "adidas-urban-backpack",
//     categoryId: "bags",
//     brandId: "adidas",
//     price: 3499,
//     originalPrice: 4499,
//     discountPercentage: 22,
//     rating: 4.6,
//     reviewCount: 1100,
//     stock: 52,
//     images: ["/images/products/bags/adidas-urban-backpack.webp"],
//     description:
//       "Modern everyday backpack with practical compartments for work and travel.",
//   },

//   {
//     id: "bag-002",
//     name: "Nike Everyday Backpack",
//     slug: "nike-everyday-backpack",
//     categoryId: "bags",
//     brandId: "nike",
//     price: 2999,
//     originalPrice: 3995,
//     discountPercentage: 25,
//     rating: 4.5,
//     reviewCount: 860,
//     stock: 48,
//     images: ["/images/products/bags/nike-everyday-backpack.webp"],
//     description:
//       "Versatile backpack designed for commuting, college and everyday use.",
//   },

//   {
//     id: "bag-003",
//     name: "Minimal Laptop Backpack",
//     slug: "minimal-laptop-backpack",
//     categoryId: "bags",
//     brandId: "nexora",
//     price: 2199,
//     originalPrice: 2999,
//     discountPercentage: 27,
//     rating: 4.6,
//     reviewCount: 640,
//     stock: 71,
//     images: ["/images/products/bags/minimal-laptop-backpack.webp"],
//     description:
//       "Clean laptop backpack with padded storage and organized compartments.",
//   },

//   {
//     id: "bag-004",
//     name: "Classic Canvas Tote",
//     slug: "classic-canvas-tote",
//     categoryId: "bags",
//     brandId: "nexora",
//     price: 899,
//     originalPrice: 1299,
//     discountPercentage: 31,
//     rating: 4.4,
//     reviewCount: 380,
//     stock: 96,
//     images: ["/images/products/bags/canvas-tote.webp"],
//     description:
//       "Reusable canvas tote designed for everyday shopping and casual use.",
//   },

//   {
//     id: "bag-005",
//     name: "Premium Travel Duffel",
//     slug: "premium-travel-duffel",
//     categoryId: "bags",
//     brandId: "nexora",
//     price: 2899,
//     originalPrice: 3999,
//     discountPercentage: 28,
//     rating: 4.7,
//     reviewCount: 450,
//     stock: 32,
//     images: ["/images/products/bags/travel-duffel.webp"],
//     description:
//       "Spacious travel duffel with multiple compartments and durable construction.",
//   },

//   {
//     id: "bag-006",
//     name: "Compact Crossbody Bag",
//     slug: "compact-crossbody-bag",
//     categoryId: "bags",
//     brandId: "nexora",
//     price: 1299,
//     originalPrice: 1799,
//     discountPercentage: 28,
//     rating: 4.5,
//     reviewCount: 510,
//     stock: 62,
//     images: ["/images/products/bags/crossbody-bag.webp"],
//     description:
//       "Compact crossbody bag designed to carry everyday essentials.",
//   },

//   {
//     id: "bag-007",
//     name: "Adidas Gym Training Bag",
//     slug: "adidas-gym-training-bag",
//     categoryId: "bags",
//     brandId: "adidas",
//     price: 2499,
//     originalPrice: 3299,
//     discountPercentage: 24,
//     rating: 4.5,
//     reviewCount: 380,
//     stock: 43,
//     images: ["/images/products/bags/adidas-gym-bag.webp"],
//     description:
//       "Functional gym bag with spacious storage for training essentials.",
//   },

//   {
//     id: "bag-008",
//     name: "Nike Heritage Shoulder Bag",
//     slug: "nike-heritage-shoulder-bag",
//     categoryId: "bags",
//     brandId: "nike",
//     price: 1599,
//     originalPrice: 2195,
//     discountPercentage: 27,
//     rating: 4.4,
//     reviewCount: 620,
//     stock: 57,
//     images: ["/images/products/bags/nike-shoulder-bag.webp"],
//     description:
//       "Compact shoulder bag designed for casual everyday carry.",
//   },

//   {
//     id: "bag-009",
//     name: "Structured Office Tote",
//     slug: "structured-office-tote",
//     categoryId: "bags",
//     brandId: "nexora",
//     price: 2399,
//     originalPrice: 3299,
//     discountPercentage: 27,
//     rating: 4.6,
//     reviewCount: 290,
//     stock: 36,
//     images: ["/images/products/bags/office-tote.webp"],
//     description:
//       "Structured tote with dedicated storage for laptops and work essentials.",
//   },

//   {
//     id: "bag-010",
//     name: "Water Resistant Daypack",
//     slug: "water-resistant-daypack",
//     categoryId: "bags",
//     brandId: "nexora",
//     price: 1999,
//     originalPrice: 2799,
//     discountPercentage: 29,
//     rating: 4.5,
//     reviewCount: 410,
//     stock: 49,
//     images: ["/images/products/bags/water-resistant-daypack.webp"],
//     description:
//       "Lightweight water-resistant daypack designed for commuting and travel.",
//   },
// ];


