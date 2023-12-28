import React from 'react'
import Images from '../Images'

const Journeyhero = () => {
  return (
    <div className='hero h-[100dvh] flex justify-center flex-col p-2'>
        <div className='journey_hero_left flex flex-col py-4'>
            <div className='journey_hero_left_note'>
                <h6><span className='journey_hero_span'>Learn With Tradiant</span></h6>
                <h2><span className='home_hero_span'>GOFX Tradiant</span>Trading Class Program</h2>
                <p>We present this program for you, in order to prepare your skills, mentality, and technical knowledge well before starting trading.</p>
                <div className='journey_hero_links'>
                    <a href='/'>Start Journey</a>
                </div>
            </div>
            <div className=''>
                <img src={Images.girlslooking} alt='girlslooking' />
            </div>
        </div>
    </div>
  )
}

export default Journeyhero