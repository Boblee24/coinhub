import React from 'react'

const Partner = () => {
  return (
    <div className='partner'>
        <div className='partner_note'>
            <h3>A trading partner you can trust</h3>
            <p>At Tradiant, we rigorously focus on quality and transparency. Our order execution quality is independently monitored. Order execution with high quality means: you save money with every investment you make with Tradiant.</p>
        </div>
        <div className='partners'>
            <div className='partner_child'>
                <img src="https://images.pexels.com/photos/1672548/pexels-" alt='soft'/>
                <h5>Quality execution on every trade</h5>
                <p>Backed by multiple analyzes and precise algorithms providing quality execution decisions on every trade. Guarantee your comfort and perfection in making decisions.</p>
                <a href= "/">View our execution scoreboard</a>
            </div>
            <div className='partner_child'>
                <img src="https://images.pexels.com/photos/1672548/pexels-" alt='soft'/>
                <h5>Transparent & competitive pricing</h5>
                <p>Provides transparency Pricing Emphasizes Value, not Price. As price becomes clearer to everyone in the market, each competitor's value also comes into sharper focus.</p>
                <a href= "/">View pricing and execution advantage</a>
            </div>
        </div>
    </div>
  )
}

export default Partner