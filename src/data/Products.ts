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
