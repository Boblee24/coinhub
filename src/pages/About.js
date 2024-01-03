import React from 'react'
import ABOUT_HERO from '../components/About_hero'
import Partner from '../components/Partner'
import Vismis from '../components/Vismis'
import ABOUT_VALUE from '../components/About_value'
import WITH_US from '../components/With_us'

const About = () => {
  return (
    <div className='about font-[Poppins]'>
      <ABOUT_HERO/>
      <Partner/>
      <Vismis/>
      <ABOUT_VALUE/>
      <WITH_US/>
    </div>
  )
}

export default About