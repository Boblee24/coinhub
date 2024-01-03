import React from 'react'
import Images from '../Images'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { FaRegEnvelope} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


const Credits = () => {
  return (
    <div className='credit flex flex-col p-4 bg-[#EFF2F4] font-[Poppins]'>
        <div className=''>
            <Link to="/" className='flex items-center gap-2 ' >
                <img src={logo} className='soft w-10 h-10' alt='logo'/>
                <h6 className='text-[#074C83]'>Coinhub</h6>
            </Link>
            <p className='text-[.9rem]'>Maximize your investment in the capital market world with the convenience and various features provided by Tradiant.</p>
            <div className='download'>
                <h6 className='my-2'>Unduh Aplikasi</h6>
                <div className='flex gap-3'>
                    <a href="/"><img alt='download' src={Images.appstore} /></a>
                    <a href="/"><img src={Images.playstore} alt='download'/></a>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap gap-5 my-4'>
            <div className='footer_right'>
                <h5>Companies</h5>
                <ul className='text-[.9rem]'>
                    <li className='py-[.2rem]'>About Us</li>
                    <li className='py-[.2rem]'>Journey</li>
                    <li className='py-[.2rem]'>Blog</li>
                    <li className='py-[.2rem]'>Contact</li>
                    <li className='py-[.2rem]'>Help</li>
                </ul>
            </div>
            <div className='footer_right'>
                <h5>Resources</h5>
                <ul className='text-[.9rem]'>
                    <li className='py-[.2rem]'>About Us</li>
                    <li className='py-[.2rem]'>Journey</li>
                    <li className='py-[.2rem]'>Blog</li>
                    <li className='py-[.2rem]'>Contact</li>
                    <li className='py-[.2rem]'>Help</li>
                </ul>
            </div>
            <div className=''>
                <h5>Help</h5>
                <ul className='text-[.9rem]'>
                    <li className='py-[.2rem]'>House Rules</li>
                    <li className='py-[.2rem]'>Journey</li>
                    <li className='py-[.2rem]'>Privacy & Policy</li>
                </ul>
            </div>
            <div className=''>
                <h5>Contact US</h5>
                <ul className='text-[.9rem]'>
                    <li className='icon_contact py-[.2rem]'><FiPhone/>+234 903 603 5324</li>
                    <li className='icon_contact py-[.2rem]'><CiLocationOn/>Journey</li>
                    <li className='icon_contact py-[.2rem]'><FaRegEnvelope/>Boblees@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Credits