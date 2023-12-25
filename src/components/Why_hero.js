import React from 'react'
import Images from '../Images'

const WHY_HERO = () => {
  return (
    <div className='why_hero bg-contain bg-no-repeat h-screen' style={{backgroundImage : `url(${Images.why_hero})`}}>
        <h2><span>Easy Transaction</span> with Tradiant</h2>
        <p>Confused about what to trade? When trading at Tradiant, you can use analytical tools from various well-known providers to get price movement reports, the latest market news, and other important information you need when trading.</p>
        <button>Get Started</button>
    </div>
  )
}

export default WHY_HERO