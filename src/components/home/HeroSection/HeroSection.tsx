import React from 'react'
import HeroContent from './HeroSectionContent/HeroContent'
import bgOverlay from '../../../images/heroSection/bgOverlay.webp'
import { url } from 'inspector'
import HeroVisual from './HeroSectionContent/HeroVisual'
import HeroImageChanger from './HeroSectionContent/HeroImageChanger'

export default function HeroSection() {
  return (
    <section className="heroSectionContainer w-full min-h-120 bg-cover bg-center bg-no-repeat flex items-end justify-start py-8 px-3.5" style={{backgroundImage:`url(${bgOverlay.src})`}}>
        
        <div className='max-w-345 mx-auto flex px-4 py-2.5  items-center   '>
            <HeroContent/> 
            <HeroVisual/>
        </div>
        <HeroImageChanger/>

    </section>
  )
}
