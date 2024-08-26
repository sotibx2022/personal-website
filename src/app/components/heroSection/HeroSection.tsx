import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'
import CauraselSlider from '../cauroselSlider/CauraselSlider'
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        {/* <ImageSlider/> */}
        <CauraselSlider/>
    </div>
  )
}
export default HeroSection