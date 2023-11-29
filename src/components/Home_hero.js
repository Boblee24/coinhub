import React from 'react'

const HOME_HERO = () => {
  return (
    <div className='bg-[#F5F5F5] home'>
        <div className='home_hero_left'>
            <div className='home_hero_left_note'>
                <p><span className='text-[#2196F3]'>Smart Investation</span></p>
                <h2>Invest Your Money With Us and <span className='home_hero_span'>Get Amazing Profit</span></h2>
                <p>Maximize your investment in the capital market world with the convenience and various features provided by Tradiant.</p>
                <div className='home_hero_links'>
                    <a href='/'>Get started</a>
                    <a href='/'>See How It Works</a>
                </div>
            </div>
            <div className='home_hero_left_sponsor'>
                <p>Registired and Surpervised by:</p>
                <div>
                    <div>Image 1</div>
                    <div>Image 2</div>
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