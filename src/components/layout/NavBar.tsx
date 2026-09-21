import Link from "next/link";
import { ChevronDown,Search,User,Heart,ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <div className="navBarContainer flex justify-between items-center max-w-370 mx-auto p-3">
      <div className="title ">
        <h2 className="text-[24px] font-semibold font-display  tracking-[8px]">NEXORA</h2>
      </div>
      <div className="navLinksBox  flex space-x-10 font-body text-[16px] font-semibold text-[#3B3935] ">
        <div className="shopBox flex items-center">
          <Link href="/">Shop</Link>
          <ChevronDown size="16px" />
        </div>
        <div className="categoriesBox flex flex-row-reverse items-center ">
          <div className="div flex justify-center items-center"><ChevronDown size="16px" /></div>
          <Link href="/">Categories</Link>
        </div>
        <Link href="/">Deals</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Brands</Link>
      </div>
      <div className="searchBarContainer border flex items-center w-100 py-1.5 px-2 rounded-full space-x-2 border-[#E4E0DA]">
        <Search size="16px" color="#77736D"/>
        <input className="w-full placeholder:text-[14px] placeholder:text-[#77736D] outline-none " type="text" placeholder="Search for products, brand and more..." />
      </div>
      <div className="userUtilBox flex space-x-8 ">
        <Link href="/"><User size="20px"/></Link>
        <Link href="/"><Heart size="20px"/></Link>
        <Link href="/"><ShoppingCart size="20px"/></Link>
      </div>
    </div>
  );
} 
