import React from 'react'
import Images from '../Images'

const WHY_HERO = () => {
  return (
    <div className='why_hero relative bg-no-repeat bg-cover h-[100dvh] m-0 p-0 bg-center' style={{backgroundImage : `url(${Images.why_hero})`}}>
      <div className='flex justify-center flex-col h-full p-2 z-20'>
      <div className='text-center'>
        <h2 className='text-5xl my-3 leading-[3.5rem]'><span>Easy Transaction</span> with Tradiant</h2>
        <p className='py-4'>Confused about what to trade? When trading at Tradiant, you can use analytical tools from various well-known providers to get price movement reports, the latest market news, and other important information you need when trading.</p>
        <button className=''>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default WHY_HERO