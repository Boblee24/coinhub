import React from 'react'
import Images from '../Images';
import { CiSearch } from "react-icons/ci";

const Helphero = () => {
  return (
    <div className='helphero relative bg-no-repeat bg-cover h-[100dvh] m-0 p-0 bg-center' style={{backgroundImage:`url(${Images.help_hero})`}}>
        <div className="about_hero_note flex justify-right items-center h-full p-2 xs:pl-4 md:pl-6 z-20">
          <div className='max-w-md'>
              <h4 className='text-[#2196F3] text-[1.1rem font-medium] py-4 font-[Poppins]' >Support Center</h4>
              <h2 className='text-[2rem] font-[Epilogue] font-bold'>Welcome to the Tradiant Support Center, Can I help you?</h2>
              <label className="relative block my-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <div className="h-5 w-5 fill-slate-300"><CiSearch/></div>
                </span>
                <input className="placeholder:italic  placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
              </label>
          </div>
        </div>
    </div>
  )
}

export default Helphero
