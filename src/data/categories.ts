import { Categories } from "@/types/categories";
import headphones from "@/images/Categories/headphone.webp"
import fashion from "@/images/Categories/fashion.webp"
import footwear from"@/images/Categories/footwear.webp"
import home from "@/images/Categories/home.webp"
import beauty from "@/images/Categories/beauty.webp"
import sport from "@/images/Categories/sports.webp"
import accessories from "@/images/Categories/accessories.webp"
import bags from "@/images/Categories/bags.webp"

export const categories:Categories[]=[
    {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    image: headphones,
    },
    {
    id: "fashion",
    name: "fashion",
    slug: "fashion",
    image: fashion,
    },
    {
    id: "Footwear",
    name: "Footwear",
    slug: "Footwear",
    image: footwear,
    },
    {
    id: "Home & Living",
    name: "Home & Living",
    slug: "Home & Living",
    image: home,
    },
    {
    id: "Beauty",
    name: "Beauty",
    slug: "Beauty",
    image: beauty,
    },
    {
    id: "Sports",
    name: "Sports",
    slug: "Sports",
    image: sport,
    },
    {
    id: "Accessories",
    name: "Accessories",
    slug: "Accessories",
    image: accessories,
    },
    {
    id: "Bags",
    name: "Bags",
    slug: "Bags",
    image: bags,
    },
    
]

