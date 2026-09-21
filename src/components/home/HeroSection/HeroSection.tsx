import React from 'react'
import HeroContent from './HeroSectionContent/HeroContent'
import bgOverlay from '../../../images/heroSection/bgOverlay.webp'
import { url } from 'inspector'
import HeroVisual from './HeroSectionContent/HeroVisual'

export default function HeroSection() {
  return (
    <section className="heroSectionContainer w-full  flex items-center justify-center bg-[#F3EBE2]">
        
        <div className='w-full grid grid-cols-[450px_1.1fr] bg-contain bg-center bg-no-repeat'style={{backgroundImage:`url(${bgOverlay.src})`}}>
            <HeroContent/> 
            <HeroVisual/>
        </div>

    </section>
  )
}
