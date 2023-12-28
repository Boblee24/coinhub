import React from 'react'
// import { CiSearch } from "react-icons/ci";
import Images from '../Images';

const Helphero = () => {
  // const searchIcon = <CiSearch size={20}/>
  return (
    <div className='helphero relative bg-no-repeat bg-cover h-[100dvh] m-0 p-0 bg-cente' style={{backgroundImage:`url(${Images.help_hero})`}}>
        <div className="about_hero_note flex justify-right items-center h-full p-2 z-20">
          <div className='help_hero_note'>
              <h4 className='text-[#2196F3] py-4' >Support Center</h4>
              <h2 className='text-[2rem]'>Welcome to the Tradiant Support Center, Can I help you?</h2>
              <textarea
                placeholder='Search for something here'
                className="w-5/6">
              </textarea>
          </div>
        </div>
    </div>
  )
}

export default Helphero