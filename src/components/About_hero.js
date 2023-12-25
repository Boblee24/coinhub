import React from 'react'
import Images from '../Images'

const ABOUT_HERO = () => {

  return (
        <div className='about-hero bg-no-repeat bg-cover h-screen m-0 p-0 bg' style={{backgroundImage: `url(${Images.about_hero})`}} >
        <div className='about_hero_note flex justify-center items-center h-full'>
            <div>
              <h2>Global Market Leader</h2>
              <p>We’ve found to connect independent traders to the potential of the global stock market since 2021. Today, we continue to challenge ourselves to provide traders with what they need to succeed. </p>
              <button>Learn More</button>
              </div>
        </div>
    </div>
  )
}

export default ABOUT_HERO