import React from 'react'
// import Header from '../components/Header'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
// import Harmbuger from '../components/harmbuger'

const Heading = (props) => {
  return (
    <div className=''>
        <Link to="/" onClick={props.toggle && props.handleHarmbugerclick} className='flex items-center justify-start w-full' >
                <img className='image' src={logo} alt='logo'/>
                <h1 className='text-[#074C83] px-3 text-lg'>Coinhub</h1>
            </Link>
    </div>
  )
}

export default Heading