import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import "../style_header.css"
import { FaFacebookSquare, FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = (props) => {
  return (
    <div className='bg-[#FFFFFF] flex fixed  p-3 header z-10 ' data-transform={props.toggle}>
        <div className='flex flex-col logo_links'>
            <NavLink to="/" onClick={props.handleHarmbugerclick} className=' flex items-center justify-start w-full' >
                <img className='image' src={logo} alt='logo'/>
                <h1 className='text-[#2196F3] px-3 text-lg'>Coinhub</h1>
            </NavLink>
            <div>
                <div>
                    <ul className='flex justify-center flex-col py-7 items-start font-[Poppins]'>
                        <li className='w-[100%] '><NavLink className='flex active:text-violet-700 hover:text-red-700'  to="/about" onClick={props.handleHarmbugerclick}>About</NavLink></li>
                        <li className='w-[100%] '><NavLink className='flex active:text-violet-700'  to="/why_us" onClick={props.handleHarmbugerclick}>Why Us?</NavLink></li>
                        <li className='w-[100%] '><NavLink className='flex active:text-violet-700'  to="/blog" onClick={props.handleHarmbugerclick}>Blog</NavLink></li>
                        <li className='w-[100%] '><NavLink className='flex active:text-violet-700'  to="/journey" onClick={props.handleHarmbugerclick}>Journey</NavLink></li>
                        <li className='w-[100%] '><NavLink className='flex active:text-violet-700'  to="/help" onClick={props.handleHarmbugerclick}>Help</NavLink></li>
                    </ul>
                </div>
                <div className='flex gap-4 flex-col login text-center justify-between m-2'>
                    <a className='' href='/'>Sign Up &rarr;</a>
                    <a className='' href='/'>Login &rarr;</a>
                </div>
                <div className='relative bg-[red]  inset-0'>
                    <div className='social absolute flex justify-between bottom-[6rem] h-full top-2/4 left-2/4' >
                        <a href='https://www.google.com'><FaFacebookSquare className='w-8 h-8 text-[#5D7285]'/></a>
                        <a href='https://www.google.com' ><FaXTwitter className='w-8 h-8 text-[#5D7285]' /></a>
                        <a href='https://www.google.com'><FaWhatsappSquare className='w-8 h-8 text-[#5D7285]'/></a>
                        <a href='https://www.google.com'><FaLinkedin className='w-8 h-8 text-[#5D7285]'/></a>
                        <a href='https://www.google.com'><FaGithub className='w-8 h-8 text-[#5D7285]'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header