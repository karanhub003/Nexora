import React from 'react'
import heroProduct from '../../../../images/heroSection/heroProduct.webp'
export default function HeroVisual() {
  return (
    <div className='heroVisualImgContainer w-200 '>
        <img className='w-full' src={heroProduct.src} alt="heroProduct" />

    </div>
  )
}
