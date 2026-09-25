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