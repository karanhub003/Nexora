import { StaticImageData } from "next/image"

export type Product={
    id:string,
    name:string,
    slug:string,
    categoryId:string,
    brandId:string,
    price:number,
    originalPrice?:number,
    discountPercentage?:number,
    rating:number,
    reviewCount:number,
    stock:number,
    images:string,
    description:string
}