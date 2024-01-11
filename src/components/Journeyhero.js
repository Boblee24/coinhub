import React from 'react'
import Images from '../Images'

const Journeyhero = () => {
  return (
    <div className='hero flex justify-center flex-col p-2 md:pt-[5rem]'>
        <div className=' flex flex-col py-4 md:justify-between md:flex-row md:items-center gap-1 md:p-[2%]'>
            <div className='max-w-lg md:w-[50%]'>
                <h6 className='text-[#2196F3] py-2 font-[Poppins] font-semibold'>Learn With Tradiant</h6>
                <h2 className='text-[2.5rem] leading-[3rem] font-[Epilogue] font-bold'><span className='text-[#2196F3]'>GOFX Tradiant</span> Trading Class Program</h2>
                <p className='py-4 text-[#485967]  font-[Poppins]'>We present this program for you, in order to prepare your skills, mentality, and technical knowledge well before starting trading.</p>
                <div className='journey_hero_links'>
                    <button className='my-4'>Start Journey</button>
                </div>
            </div>
            <div className='md:w-[48%]'>
                <img className=' object-cover' src={Images.girlslooking} alt='girlslooking' />
            </div>
        </div>
    </div>
  )
}

export default Journeyhero