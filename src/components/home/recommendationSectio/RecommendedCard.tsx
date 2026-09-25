import { Product } from '@/types/Product'
import { Heart, Star } from 'lucide-react'
import { Span } from 'next/dist/trace'


type SearchProductProps={
    product:Product
}

export default function RecommendedCard({product}:SearchProductProps) {
  return (
    <div className="productCard max-w-70 ">
      <div className="productImg   flex items-start justify-between bg-gray-400/20  space-x-3 px-3 py-2 rounded-lg overflow-hidden">
       <div>
        {
            product.isNew &&(<span className='text-[12px]  py-1 px-2 font-body font-semibold rounded-full bg-[#C8F169] '>New</span>)
        }
       </div>
       <div className="imgBox w-50 h-50 flex-1 items-center justify-center   ">
         <img 
          className=" w-full h-full object-contain object-center "
          src={product.images}
          alt={product.name}
        />
       </div>
        <div className="">
          <Heart size="16px"/>
        </div>
      </div>
      <div className="productInfoWrapper p-2  flex flex-col gap-1.5">
        <div className="head">
          <p className="text-[14px] font-display font-semibold">{product.brandId}</p>
          <p className="text-[13px] font-body font-medium text-[#3B3935]">{product.name}</p>
        </div>
        <div className="ratingInfo flex items-center gap-1.5">
          <p className="flex items-center gap-1 text-[#E5A62B] text-[14px] font-medium">
            <Star size="14px" color="#E5A62B" fill="#E5A62B" /> {product.rating}
          </p>{" "}
          <span className="text-[14px] text-[#3B3935] font-medium">
           ({new Intl.NumberFormat("en-IN", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(product.reviewCount)})
          </span>
        </div>
        <div className="priceWrapper flex gap-1 items-center justify-between">
           <div className="div flex items-center gap-3">
             <p className="text-[18px] font-body font-bold ">₹ {product.price.toLocaleString("en-IN")}</p>
            {
                product.originalPrice &&(
                    <span className="text-[15px] decoration line-through text-[#77736D] font-body ">₹ {product.originalPrice.toLocaleString("en-IN")}</span>
                )
            }
           </div>
            {
                product.discountPercentage&&(
                    <p className=" p-1.5 text-[12px] text-red-800 font-bold font-body bg-red-500/30 rounded-lg">{product.discountPercentage}% OFF</p>
                )
            }
        </div>
      </div>
    </div>
  )
}
