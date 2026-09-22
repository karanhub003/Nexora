import React from 'react'
import type { Categories } from "@/types/categories";
import Image from 'next/image';
import Link from 'next/link';

type CategoriesItemProps ={
    category:Categories
}

export default function CategoriesItem({category}:CategoriesItemProps) {
  return (
    
    <Link href="#" className='categoryItemBox  flex flex-col items-center  p-3 space-y-2.5'>
        <div className='imgBox w-25 h-25  rounded-full flex items-center justify-center bg-[#F1EDE9] '>
            <Image className='w-15 h-15' src={category.image} alt={category.name}/>
        </div>
        <p className='text-[13px] font-semibold font-body tracking-[0.5px]'>{category.name}</p>
    </Link>
   


  
  )
}
