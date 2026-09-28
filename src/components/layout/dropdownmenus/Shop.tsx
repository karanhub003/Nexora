import Link from 'next/link'
import headphone from "../../../images/Categories/headphone.webp"
import fashion from "../../../images/Categories/fashion.webp"
import home from "../../../images/Categories/home.webp"
import beauty from "../../../images/Categories/beauty.webp"

export default function Shop() {
  return (
    <div className='shopContainer border border-[#D2CDC5] grid  grid-cols-[150px_220px_160px]   bg-white  rounded-lg  '>
        <div className='leftSideNavigatorContainer  flex flex-col gap-3.5 px-3.5 py-10'>
           
            <Link  href="/" className='text-[14px] font-body font-semibold '>All Products</Link >
             <Link href="/"  className='text-[14px] font-body font-semibold '>New Arrivals</Link >
             <Link href="/"  className='text-[14px] font-body font-semibold '>Best Sellers</Link >
             <Link href="/"  className='text-[14px] font-body font-semibold '>Deals</Link>
             <Link  href="/" className='text-[14px] font-body font-semibold '>Gifts Cards</Link>
             <Link href="/"  className='text-[14px] font-body font-semibold '>Shop by Price</Link >
           
        </div>
       
        <div className='featuredNavigatorContainer  px-3.5 py-4.5 flex flex-col gap-2.5 border-x border-[#D2CDC5] '>
           <h3 className='text-[15px] font-display font-medium text-[#77736D]'>Featured</h3> 
           <div className="cardsWrapper flex flex-col gap-4">
            <div className="card flex items-center  gap-2 ">
                <div className='w-16 h-16  flex items-center justify-center bg-gray-300/30 rounded-lg'>
                    <img className='w-12' src={headphone.src} alt="headphone" />
                </div>
                <div className="info leading-5">
                    <p className='text-[14px] font-semibold font-body'>Latest tech</p>
                    <Link className='text-[12px] font-semibold text-[#9B968E]' href="/">Explore</Link>
                </div>
            </div>
            <div className="card flex items-center gap-2">
                <div className='w-16 h-16  flex items-center justify-center bg-gray-300/30 rounded-lg'>
                    <img className='w-12' src={fashion.src} alt="fashion" />
                </div>
                <div className="info leading-5">
                    <p className='text-[14px] font-semibold font-body'>Everyday Fashion</p>
                    <Link className='text-[12px] font-semibold text-[#9B968E]' href="/">Explore</Link>
                </div>
            </div>
            <div className="card flex items-center gap-2">
                <div className='w-16 h-16  flex items-center justify-center bg-gray-300/30 rounded-lg'>
                    <img className='w-12' src={home.src} alt="home" />
                </div>
                <div className="info leading-5">
                    <p className='text-[14px] font-semibold font-body'>Home Essentials</p>
                    <Link className='text-[12px] font-semibold text-[#9B968E]' href="/">Explore</Link>
                </div>
            </div>
            <div className="card flex items-center gap-2">
                <div className='w-16 h-16  flex items-center justify-center bg-gray-300/30 rounded-lg'>
                    <img className='w-12' src={beauty.src} alt="beauty" />
                </div>
                <div className="info leading-5">
                    <p className='text-[14px] font-semibold font-body'>Beauty Favorites</p>
                    <Link className='text-[12px] font-semibold text-[#9B968E]' href="/">Explore</Link>
                </div>
            </div>
           </div>
        </div>
      
        <div className='trendingNavigatorContainer  list-none px-3.5 py-4.5 flex flex-col gap-2.5'>
            <h3 className='text-[15px] font-display font-medium text-[#77736D]'>Trending</h3>
            <li className='flex flex-col gap-2 text-[13px] font-bold'>
                <ul>Smartphones</ul>
                <ul>Laptops</ul>
                <ul>Headphones</ul>
                <ul>Smart Watches</ul>
                <ul>T-Shirts</ul>
                <ul>Sneakers</ul>
                <ul>Skincare</ul>
                <ul>Home Decor</ul>
                <ul>Backpacks</ul>
                <ul>Sunglass</ul>
            </li>
        </div>
    </div>
  )
}
