import React from 'react'
import Images from '../Images'

const Reason = () => {
  return (
    <div className='m-4'>
        <div className='reason_heading'>
            <h4 className='text-[#2196F3] text-center'>Why choose Tradiant?</h4>
            <h3 className='text-center leading-6'>Specially designed for stock market</h3>
        </div>
        <div className='flex flex-col'>
            <div className='my-3'>
                <div className='bg-[#F5F5F5] p-2' ><img src={Images.firstcard}alt='firstcard'/></div>
                <div className='reason_flex_note'>
                    <h1 className='my-1 font-semibold'>Quick Faster</h1>
                    <p>Information spreads faster with the help of the Tradiant community. With Tradiant, you will be more updated with the latest information.</p>
                </div>
            </div>
            <div className='my-3'>
                <div className='bg-[#F5F5F5] p-2' ><img src={Images.secondcard}alt='secondcard'/></div>
                <div className='reason_flex_note'>
                    <h1 className='my-1 font-semibold'>Manage your wallets</h1>
                    <p>Make your finances easier and safer with Tradiant and make every transaction more secure and quality.</p>
                </div>
            </div>
            <div className='my-3'>
                <div className='bg-[#F5F5F5]' p-2> <img src={Images.thirdcard}alt='thirdcard'/></div>
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