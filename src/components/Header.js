import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import "../style_header.css"
import { FaFacebookSquare, FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = (props) => {
  return (
    <div className='bg-[#FFFFFF] flex fixed  p-3 header z-10 ' data-transform={props.toggle}>
        <div className='flex flex-col logo_links'>
            <Link to="/" onClick={props.handleHarmbugerclick} className=' flex items-center justify-start w-full' >
                <img className='image' src={logo} alt='logo'/>
                <h1 className='text-[#2196F3] px-3 text-lg'>Coinhub</h1>
            </Link>
            <div>
                <div>
                    <ul className='flex justify-center flex-col py-7 items-start'>
                        <li><Link to="/about" onClick={props.handleHarmbugerclick}>About</Link></li>
                        <li><Link to="/why_us" onClick={props.handleHarmbugerclick}>Why Us</Link></li>
                        <li><Link to="/blog" onClick={props.handleHarmbugerclick}>Blog</Link></li>
                        <li><Link to="/journey" onClick={props.handleHarmbugerclick}>Journey</Link></li>
                        <li><Link to="/help" onClick={props.handleHarmbugerclick}>Help</Link></li>
                        {/* <li><Link to="/hello" onClick={props.handleHarmbugerclick}>Harmbuger</Link></li> */}
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