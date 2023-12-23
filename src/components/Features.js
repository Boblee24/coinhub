import React from 'react'
import Images from '../Images'

const Features = () => {
  return (
    <div className='feature'>
        <div className='flex flex-col m-2'>
            <div className='p-5 '><img src={Images.girlwithphone} alt='girlwith'/></div>
            <div className='right'>
                <h4 className='text-[#2196F3]'>OUR FEATURES</h4>
                <h3>Receive update market quickly everytime</h3>
                <p className='my-4'>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
                <button>Get Started</button>
            </div> 
        </div>
        <div className='flex flex-col m-2'>
            <div className='my-3'><img className='rounded-lg' src={Images.videosystem} alt='videosystem'/></div>
            <div className='right'>
                <h4 className='text-[#2196F3]'>OUR FEATURES</h4>
                <h3>Receive update market quickly everytime</h3>
                <p className='my-4'>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
                <button>Get Started</button>
            </div> 
        </div>
    </div>
  )
}

export default Features