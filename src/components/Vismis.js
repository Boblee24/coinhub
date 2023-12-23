import React from 'react'
import Images from '../Images'
const Vismis = () => {
  return (
    <div className='Vismis m-2'>
        <div className='flex flex-col'>
            <div className='left'><img src={Images.mission} alt='mission'/></div>
            <div className='right'>
                <h3>Our Vision</h3>
                <p>Our vision is to become a trusted advisor, intermediary, and partner to assist customers in determining financial strategies in the capital market and Become a professional reinsurance broker with a global reputation.</p>
                <button className='my-2 remove'>See More</button>
            </div> 
        </div>
        <div className='flex flex-col'>
            <div className='left'><img src={Images.vision} alt='vision'/></div>
            <div className='right'>
                <h3>Our Mission</h3>
                <p>Providing excellent service from risk placement to settlement of compensation in the interest of obtaining the best capital market results. Maintain the profitability of each user with the aim of meeting the expectations of each user.</p>
                <button>See More</button>
            </div> 
        </div>
    </div>
  )
}

export default Vismis