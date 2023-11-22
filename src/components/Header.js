import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_links'>
             <Link to="/" >
                <div className='logo'></div>
                <h6>SOFT</h6>
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