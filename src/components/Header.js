import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../logo.svg'
import "../style_header.css"
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AppContext } from '../App';

const Header = (props) => {
    const {scrollToTop} = useContext(AppContext)
  return (
    < div className='bg-[white] flex fixed md:justify-center md:h-[4rem] p-3 md:p-[3%]  md:py-0 header z-20 md:w-[100%]' data-transform={props.toggle}>
        <div className='flex flex-col logo_links md:flex-row md:justify-between '>
            <Link to="/" onClick={props.handleHarmbugerclick} className=' flex items-center w-full md:w-auto ' >
                <img className='image' src={logo} alt='logo'/>
                <h1 className='text-[#074C83] font-bold font-[Epilogue] px-3 text-lg'>Tradiant.</h1>
            </Link>
            <div className='md:flex md:justify-between md:w-full'> 
                <ul className='flex justify-center flex-col py-7 md:py-0 items-start font-[Poppins] md:flex-row md:justify-around md:w-[60%] md:ml-[3%] md:items-center'>
                    <li onClick={scrollToTop()} className='w-[40%] md:w-auto  text-[#485967] '><NavLink  className='flex md:text-[.8rem] font-[Poppins]'  to="/about" onClick={props.handleHarmbugerclick}>About</NavLink></li>
                    <li onClick={scrollToTop()} className='w-[40%] md:w-auto  text-[#485967] '><NavLink  className='flex md:text-[.8rem] font-[Poppins]'  to="/why_us" onClick={props.handleHarmbugerclick}>Why Us?</NavLink></li>
                    <li onClick={scrollToTop()} className='w-[40%] md:w-auto  text-[#485967] '><NavLink  className='flex md:text-[.8rem] font-[Poppins]'  to="/blog" onClick={props.handleHarmbugerclick}>Blog</NavLink></li>
                    <li onClick={scrollToTop()} className='w-[40%] md:w-auto  text-[#485967] '><NavLink  className='flex md:text-[.8rem] font-[Poppins]'  to="/journey" onClick={props.handleHarmbugerclick}>Journey</NavLink></li>
                    <li onClick={scrollToTop()} className='w-[40%] md:w-auto  text-[#485967] '><NavLink  className='flex md:text-[.8rem] font-[Poppins]'  to="/help" onClick={props.handleHarmbugerclick}>Help</NavLink></li>
                </ul>
                <div className='flex gap-4 flex-col login text-center justify-between m-2 md:flex-row h-auto'>
                    <a className='font-[Poppins] helloworld md:text-[.8rem] md:p-0' href='/'>Sign Up &rarr;</a>
                    <a className='font-[Poppins] md:text-[.8rem] ' href='/'>Login &rarr;</a> 
                </div>
                <div className='relative bg-[red] inset-0'>
                    <div className='social absolute flex justify-between bottom-[6rem] h-full top-2/4 left-2/4 md:hidden' >
                        {/* <a href='https://www.google.com'><FaFacebookSquare className='w-8 h-8 text-[#5D7285]'/></a> */}
                        <a href='https://twitter.com/BOBLEE_AYO' ><FaXTwitter className='w-8 h-8 text-[#5D7285]' /></a>
                        <a href='wa.link/7f3fb1'><FaWhatsappSquare className='w-8 h-8 text-[#5D7285]'/></a>
                        <a href='https://www.linkedin.com/in/ayomiposi-aborisade-74859922a/'><FaLinkedin className='w-8 h-8 text-[#5D7285]'/></a>
                        <a href='https://github.com/Boblee24'><FaGithub className='w-8 h-8 text-[#5D7285]'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header