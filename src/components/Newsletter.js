import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter flex flex-col bg-[#CFE8FC] m-2 my-7 p-3 rounded-lg'>
        <div className='my-4'>
            <h6 className=' text-[#2196F3]'>OUR NEWSLETTER</h6>
            <h3 className='leading-9 my-3'>Stay updated with our weekly newsletter</h3>
            <p>A collection of the hottest stock market news sent every week to your email</p>
        </div>
        <div className='my-6'>
            <h4 className='text-[#2196F3]'>Signup for Newsletter</h4>
            {/* onSubmit={handleSubmit(onSubmitForm)} */}
            <form >
                <input className='my-2 rounded-lg p-2 w-4/5' type="email" name="email" placeholder="Your Email Address"/><br/>
                <input className='my-2 rounded-lg p-2 w-4/5' type='password' placeholder='Password'/><br/>
                <input className='bg-[#2196F3] my-2 '  type='submit' value= 'Get Started'/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter