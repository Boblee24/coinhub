import React from 'react'
import Images from '../Images'

const HOME_HERO = () => {
  return (
    <div className='bg-[#F5F5F5] home flex flex-col pt-14 font-[Epilogue]'>
        <div className='m-3 p-2'>
            <div className=''>
                <p><span className='text-[#91A3B2] ' >Smart Investation</span></p>
                <h2 className='text-[1.8rem] font-bold'>Invest Your Money With Us and <span className='text-[#2196F3]'>Get Amazing Profit</span></h2>
                <p className='my-4 '>Maximize your investment in the capital market world with the convenience and various features provided by Tradiant.</p>
                <div className='home_hero_links flex gap-4 items-center my-3'>
                    <a href='/' className=''>Get started</a>
                    <a className='remove ' href='/'>See How It Works &rarr;</a>
                </div>
            </div>
            <div className='home_hero_left_sponsor'>
                <p>Registired and Surpervised by :</p>
                <div className='w-[35%]'>
                    <img className='w-[full]'src={Images.sponsor} alt='sponsor'/>
                </div>
            </div>
        </div>
        <div className='my-4'>
            <img src={Images.home} alt='home'/>
        </div>
    </div>
  )
}

export default HOME_HERO

// git config --global user.email "bobleeswaggs123@gmail.com"
//   git config --global user.name "Aborisade Ayomiposi"