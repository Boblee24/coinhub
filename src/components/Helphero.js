import React from 'react'
import Images from '../Images';

const Helphero = () => {
  return (
    <div className='helphero relative bg-no-repeat bg-cover h-[100dvh] m-0 p-0 bg-center' style={{backgroundImage:`url(${Images.help_hero})`}}>
        <div className="about_hero_note flex justify-right items-center h-full p-2 z-20">
          <div className='help_hero_note'>
              <h4 className='text-[#2196F3] text-[1.1rem font-medium] py-4 font-[Poppins]' >Support Center</h4>
              <h2 className='text-[2rem] font-[Epilogue] font-bold'>Welcome to the Tradiant Support Center, Can I help you?</h2>
              <textarea
                placeholder='Search for something here'
                id='search'
                className="w-5/6 my-4">
              </textarea>
          </div>
        </div>
    </div>
  )
}

export default Helphero
