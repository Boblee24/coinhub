import React from 'react'
import Images from '../Images'

const Reason = () => {
  return (
    <div className='m-4 md:my-8 md:mb-[9rem]'>
        <div className=''>
            <h4 className='text-[#2196F3] text-center md:text-[24px]'>Why choose Tradiant?</h4>
            <h3 className='text-center leading-6 md:text-[40px] font-bold md:my-3'>Specially designed for stock market</h3>
        </div>
        <div className='flex flex-col flex-wrap md:flex-row md:items-center justify-center md:justify-center md:my-6'>
            <div className='m-3 md:max-w-[400px] md:h-[260px]'>
                <div className='bg-[#F5F5F5] md:h-full md:w-full md:flex md:items-center md:justify-center' ><img src={Images.firstcard}alt='firstcard'/></div>
                <div className='reason_flex_note'>
                    <h1 className='my-1 font-semibold'>Quick Faster</h1>
                    <p>Information spreads faster with the help of the Tradiant community. With Tradiant, you will be more updated with the latest information.</p>
                </div>
            </div>
            <div className='m-3 md:max-w-[400px] md:h-[260px]'>
                <div className='bg-[#F5F5F5] md:h-full md:w-full md:flex md:items-center md:justify-center'><img src={Images.secondcard}alt='secondcard'/></div>
                <div className='reason_flex_note'>
                    <h1 className='my-1 font-semibold'>Manage your wallets</h1>
                    <p>Make your finances easier and safer with Tradiant and make every transaction more secure and quality.</p>
                </div>
            </div>
            <div className='m-3 md:max-w-[400px] md:h-[260px]'>
                <div className='bg-[#F5F5F5] p-3  md:h-full md:w-full md:flex md:items-center md:justify-center'> <img className='' src={Images.thirdcard}alt='thirdcard'/></div>
                <div className='reason_flex_note'>
                    <h1 className='my-1 font-semibold'>Update Your Statistics</h1>
                    <p>Update your general stats faster with direct notifications from Tradiant and make your next transaction more quality.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reason