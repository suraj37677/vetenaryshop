import React from 'react'
import './Hero.css';
import Headers from './Headers';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-side'>
        <Headers/>
      </div>
      <div className='right-side'></div>
    </div>
  )
}

export default Hero
