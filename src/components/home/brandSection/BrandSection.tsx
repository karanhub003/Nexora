import React from 'react'
import {brandLogoImage} from "@/data/brandLogs"


export default function BrandSection() {
  return (
    <div className='BrandSectionContainer  max-w-370 mx-auto flex justify-around items-center bg-gray-200/50 p-3 rounded-lg'>
        {
            brandLogoImage.map((logo)=>(
                <div key={logo.id} className=' w-18 '>
                    <img className='w-full ' src={logo.image.src} alt='logo'/>
                </div>
            ))
        }
    </div>
  )
}
