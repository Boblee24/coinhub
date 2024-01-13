import React from 'react'
import Images from '../Images'

const Features = () => {//helo worll
  return (//my name is aborisade ayomiposi sof
    <div className='feature'>
        <div className='flex flex-col m-2 md:ml-9 md:flex-row md:justify-between md:items-center gap-3 md:gap-7 md:px-[3%] py-3 '>
            <div className="p-5 w-[60%] m-auto sm:m-0 md:w-[30%] relative z-[10] md:after:content-[''] md:after:absolute md:after:z-[-1] md:after:bottom-5 md:after:left-[-2rem] md:after:bg-slate-400 md:after:w-[calc(140%)] md:after:h-[70%] md:after:rounded-xl" >
                <img className='' src={Images.girlwithphone} alt='girlwith'/>
            </div>
            <div className='sm:w-[50%] md:ml-[-2rem] md:max-w-[560px]'>
                <h4 className='text-[#2196F3] md:text-[1.2rem] font-semibold'>OUR FEATURES</h4>
                <h3 className='text-[1.5rem] md:text-[2rem] font-bold'>Receive update market quickly everytime</h3>
                <p className='my-4 text-[#5D7285]'>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
                <button className='text-[#fff]'>Get Started</button>
            </div> 
        </div>
        <div className='flex flex-col m-2 md:flex-row-reverse md:justify-between md:items-center gap-3 md:gap-7 md:px-[3%] py-3'>
            <div className='my-3 md:w-[45%]'> <img className='rounded-lg' src={Images.videosystem} alt='videosystem'/> </div>
            <div className='md:w-[45%] md:max-w-[530px]'>
                <h4 className='text-[#2196F3] font-semibold md:text-[1.2rem] '>OUR FEATURES</h4>
                <h3 className='text-[1.5rem] md:text-[2rem] font-bold'>Easy Way to Invest and Get Profit</h3>
                <p className='my-4 text-[#5D7285]'>Using the Tradiant Application is an easy way to invest and benefit, equipped with comprehensive analysis tools and Artificial Intelligent (AI) that helps automation in monitoring and transactions..</p>
                <button className='text-[#fff]'>Get Started</button>
            </div> 
        </div>
    </div>
  )
}

export default Features