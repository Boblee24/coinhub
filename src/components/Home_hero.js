import React from 'react'
import Images from '../Images'

const HOME_HERO = () => {
  return (
    <div className='bg-[#F5F5F5] home flex flex-col pt-14'>
        <div className='home_hero_left'>
            <div className='home_hero_left_note'>
                <p><span className='text-[#91A3B2]'>Smart Investation</span></p>
                <h2 className='text-[1.8rem]'>Invest Your Money With Us and <span className='home_hero_span'>Get Amazing Profit</span></h2>
                <p className='my-4'>Maximize your investment in the capital market world with the convenience and various features provided by Tradiant.</p>
                <div className='home_hero_links flex gap-4 items-center my-3'>
                    <a href='/'>Get started</a>
                    <a className='remove' href='/'>See How It Works</a>
                </div>
            </div>
            <div className='home_hero_left_sponsor'>
                <p>Registired and Surpervised by:</p>
                <div className='w-[35%]'>
                    <img className='w-[full]'src={Images.sponsor} alt='sponsor'/>
                </div>
            </div>
        </div>
        <div className='home_hero_right'>
            <div>Image 3</div>
            <div>Box</div>
        </div>
    </div>
  )
}

export default HOME_HERO