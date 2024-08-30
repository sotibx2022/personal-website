import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'
import CauraselSlider from '../cauroselSlider/CauraselSlider'
import BasicSlider from '../basicSlider/BasicSlider'
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center'>
        {/* <ImageSlider/> */}
        {/* <CauraselSlider/> */}
        <BasicSlider/>
    </div>
  )
}
export default HeroSection