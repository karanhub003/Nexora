"use client"

import { categories } from '@/data/categories'
import { useState } from 'react'


export default function Categories() {

  const [selectedCategory,setSelectedCategory]=useState("Electronics")

  const activeCategory=categories.find((category)=>{
     return category.name === selectedCategory
  })


  return (
    <div className='categoriesDropDownContainer bg-white border grid grid-cols-2'>
        <div className="leftSideWrapper">
              {
                categories.map((category)=>(
                  <p onClick={()=>{setSelectedCategory(category.name)}} key={category.id}>{category.name}</p>
                ))
              }
          </div> 
          <div className="right">
            {
               activeCategory?.items.map((subcategories)=>(
                <p key={subcategories}>{subcategories}</p>
               ))
            }
          </div>

    </div>
  )
}
