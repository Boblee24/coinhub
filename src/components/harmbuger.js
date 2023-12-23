// import React, { useState } from 'react'
// import "./style1.css"
import "../style2.css"
// import React from "react"

const Harmbuger = (props) => {
//     const [toggle, setToggle] = useState(true)
//   const handleHarmbugerclick = () => {
//      setToggle(!toggle)
//       // console.log('Hekllo weosd')
//   }

    // const {handleHarmbugerClick} = props;

  return (
    <div className='fixed right-2 z-20 top-1 button_harmbuger'>
        <button onClick={props.handleHarmbugerclick} class="button-three " aria-controls="primary-navigation" aria-expanded={props.toggle}>
    <svg stroke="var(--button-color)" fill="none" class="hamburger" viewBox="-10 -10 120 120" width="45">
      <path class="line" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
      </path>
    </svg>
  </button>
    </div> 
  )
}

export default Harmbuger