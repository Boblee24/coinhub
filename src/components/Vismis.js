import React from 'react'
import Images from '../Images'
const Vismis = () => {
  return (
    <div className='Vismis m-2'>
        <div className='flex flex-col gap-4 md:flex-row  justify-between md:p-[4%]'>
            <div className='md:w-[45%]'> <img src={Images.mission} alt='mission'/></div>
            <div className='md:w-[45%]'>
                <h3 className='text-[1.7rem] font-[Epilogue] font-[600] md:font-bold md:text-[40px]'>Our Vision</h3>
                <p>Our vision is to become a trusted advisor, intermediary, and partner to assist customers in determining financial strategies in the capital market and Become a professional reinsurance broker with a global reputation.</p>
                <button className='my-2 remove text-[.9rem]'>See More &rarr;</button>
            </div> 
        </div>
        <div className='flex flex-col gap-4 md:flex-row-reverse  justify-between md:p-[4%]'>
            <div className='md:w-[45%]'> <img src={Images.vision} alt='vision'/></div>
            <div className='md:w-[45%]'>
                <h3 className='text-[1.7rem] font-[Epilogue] font-[600] md:font-bold md:text-[40px]'>Our Mission</h3>
                <p>Providing excellent service from risk placement to settlement of compensation in the interest of obtaining the best capital market results. Maintain the profitability of each user with the aim of meeting the expectations of each user.</p>
                <button className='my-2 remove text-[.9rem]'>See More  &rarr;</button>
            </div> 
        </div>
    </div>
  )
}

export default Vismis