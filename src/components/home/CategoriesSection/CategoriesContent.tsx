import React from 'react'
import { categories } from '@/data/categories'
import CategoriesItem from './CategoriesItem'


export default function CategoriesContent() {
  return (
    <div className='CategoriesContentContainer flex justify-between items-center max-w-370 mx-auto py-6 '>
        {
            categories.map((category)=>(
                <CategoriesItem key={category.id} category={category}/>
            ))
        }
        {/* <div className='categoryItemBox  flex flex-col items-center p-3 space-y-1'>
                <div className='imgBox w-20 h-20  rounded-full flex items-center justify-center bg-[#F1EDE9] '>
                    <Image className='w-10 h-10' src={category.image} alt={category.name}/>
                </div>
                <p className='text-[14px] font-semibold font-body'>{category.name}</p>
            </div> */}


    </div>
  )
}
