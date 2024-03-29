import React from 'react'
import Images from '../Images'

const Bloghero = () => {
  return (
      <div className='blog_hero_note relative bg-no-repeat bg-cover h-[100dvh] mb-5 p-0 bg-center' style={{backgroundImage: `url(${Images.blog_hero})`}}>
          <div className='flex justify-center flex-col h-full p-2 xs:pl-4 md:pl-6'>
            <div className='max-w-lg'>
              <h4 className='text-[#2196F3] font-[Poppins] font-medium'>Market Update</h4>
              <h2 className=' text-5xl my-3 leading-[3.5rem] fomt-[Epilogue] font-bold text-[2.5rem]'  >Take note! This is the important point for Bitcoin price to strengthen again</h2>
              <p className='text-[#485967] py-3'>There are a number of key points for Bitcoin to strengthen again, closely tied to the Fed's policy, if the US central bank fails to control inflation and the economy heads into recession. </p>
              <button className='my-5'>Read More</button>
            </div>
          </div>
      </div>
  )
}

export default Bloghero