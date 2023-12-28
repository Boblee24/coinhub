import React from 'react'
import Images from '../Images'

const ABOUT_HERO = () => {

  return (
    <div className="about-hero relative bg-no-repeat bg-cover h-[100dvh] m-0 p-0 bg-center" style={{backgroundImage:  `url(${Images.about_hero2})`}}>
      <div className="about_hero_note flex justify-right items-center h-full p-2 z-20">
      <div>
        <h2 className="py-3 leading-[4rem] text-black">Global Market Leader</h2>
        <p className="text-[#485967]">We’ve found to connect independent traders to the potential of the global stock market since 2021. Today, we continue to challenge ourselves to provide traders with what they need to succeed.</p>
        <button className='my-4'>Learn More</button>
      </div>
  </div>
</div>

  
  )
}

export default ABOUT_HERO