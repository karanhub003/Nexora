import React from 'react'
import HeroContent from './HeroSectionContent/HeroContent'
import bgOverlay from '../../../images/heroSection/bgOverlay.webp'
import { url } from 'inspector'
import HeroVisual from './HeroSectionContent/HeroVisual'
import HeroImageChanger from './HeroSectionContent/HeroImageChanger'

export default function HeroSection() {
  return (
    <section className="heroSectionContainer w-full min-h-160 bg-cover bg-center bg-no-repeat flex  py-8 px-3.5" style={{backgroundImage:`url(${bgOverlay.src})`}}>
        <div className='max-w-360 grid grid-cols-[500px_1fr]   gap-4  mx-auto  '>
            <div className='flex gap-8'>
            <HeroContent/> 
            </div>
            <div className='flex items-end'>
              <HeroVisual/>
              <HeroImageChanger/>
            </div>
            
        </div>
        

    </section>
  )
}
