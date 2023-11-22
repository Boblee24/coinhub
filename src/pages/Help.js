import React from 'react'
import Credits from '../components/Credits'
import Footer from '../components/Footer'
import Helphero from '../components/Helphero'
import Topic from '../components/Topic'

const Help = () => {
  return (
    <div className='help'>
      <Helphero/>
      <Topic/>
      <Credits/>
      <Footer/>
    </div>
  )
}

export default Help