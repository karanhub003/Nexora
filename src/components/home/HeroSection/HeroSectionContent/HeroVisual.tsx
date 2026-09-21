import React from 'react'
import heroProduct from '../../../../images/heroSection/heroProduct.webp'
export default function HeroVisual() {
  return (
    <div className='heroVisualImgContainer'>
        <img className='w-full' src={heroProduct.src} alt="heroProduct" />

    </div>
  )
}
