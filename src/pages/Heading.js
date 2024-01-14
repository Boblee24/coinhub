import "../style2.css"
import React from 'react'
// import Header from '../components/Header'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
// import Harmbuger from '../components/harmbuger'

const Heading = (props) => {
  return (
    <div className='heading'>
        <Link to="/" onClick={props.toggle && props.handleHarmbugerclick} className='flex head items-center justify-start w-full mt-1 ml-1' >
                <img className='image' src={logo} alt='logo'/>
                <h1 className='text-[#074C83] font-bold font-[Epilogue] px-3 text-lg'>Tradiant.</h1>
            </Link>
    </div>
  )
}

export default Heading