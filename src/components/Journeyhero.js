import React from 'react'
import Images from '../Images'

const Journeyhero = () => {
  return (
    <div className='hero h-[100dvh] flex justify-center flex-col p-2'>
        <div className='journey_hero_left flex flex-col py-4'>
            <div className='journey_hero_left_note'>
                <h6 className='text-[#2196F3] py-2'>Learn With Tradiant</h6>
                <h2 className='text-[2.5rem] leading-[3rem]'><span className='text-[#2196F3]'>GOFX Tradiant</span>Trading Class Program</h2>
                <p className='py-4 text-[#485967]'>We present this program for you, in order to prepare your skills, mentality, and technical knowledge well before starting trading.</p>
                <div className='journey_hero_links'>
                    <button className='my-4'>Start Journey</button>
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