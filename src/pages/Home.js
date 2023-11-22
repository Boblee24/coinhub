import React from 'react'
import HOME_HERO from '../components/Home_hero'
import Brand from '../components/Brand'
import Reason from '../components/Reason'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
// import Credits from '../components/Credits'
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <HOME_HERO/>
        <Brand/>
        <Reason/>
        <Features/>
        <Newsletter/>
    </div>
  )
}

export default Home