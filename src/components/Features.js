import React from 'react'
import Images from '../Images'

const Features = () => {
  return (
    <div className='feature'>
        <div className='flex flex-col m-2 md:flex-row md:justify-between md:items-center'>
            <div className="p-5  m-auto relative z-[10] md:after:content-['x'
        ] md:after:absolute md:after:z-[-1] md:after:bottom-5 md:after:bg-slate-400 md:after:w-[100%] md:after:h-[80%] md:after:rounded-xl " >
                <img className='' src={Images.girlwithphone} alt='girlwith'/>
            </div>
            <div className='w-[60%] md:ml-[4rem]'>
                <h4 className='text-[#081520] md:text-[1.2rem] font-semibold'>OUR FEATURES</h4>
                <h3 className='text-[1.5rem] md:text-[2rem] font-bold'>Receive update market quickly everytime</h3>
                <p className='my-4 text-[#5D7285]'>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
                <button className='text-[#fff]'>Get Started</button>
            </div> 
        </div>
        <div className='flex flex-col m-2'>
            <div className='my-3'><img className='rounded-lg' src={Images.videosystem} alt='videosystem'/></div>
            <div className='right'>
                <h4 className='text-[#2196F3] font-semibold'>OUR FEATURES</h4>
                <h3 className='text-[1.5rem] font-bold'>Receive update market quickly everytime</h3>
                <p className='my-4 text-[#5D7285]'>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
                <button className='text-[#fff]'>Get Started</button>
            </div> 
        </div>
    </div>
  )
}

export default Features