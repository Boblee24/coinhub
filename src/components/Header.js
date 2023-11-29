import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] flex'>
        <div className='flex logo_links'>
             <Link to="/" className='flex' >
                <img src={logo} alt='logo'/>
                <h6 className='text-[#074C83]'>Coinhub</h6>
            </Link>
            <div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/why_us">Why Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/journey">Journey</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
            </div>
        </div>
        <div>
            <a href='/'>Sign Up</a>
            <a href='/'>Login</a>
        </div>
    </div>
  )
}

export default Header