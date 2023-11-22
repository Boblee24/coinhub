import React from 'react'
// import Credits from '../components/Credits'
// import Footer from '../components/Footer'
import WHY_HERO from '../components/Why_hero'
import WHY_US_WHY_US from '../components/Why_us_Why_us'
import Testimonial from '../components/Testimonial'
import WITH_US from '../components/With_us'

const WHY_US = () => {
  return (
    <div className='why'>
      <WHY_HERO/>
      <WHY_US_WHY_US/>
      <Testimonial/>
      <WITH_US/>
    </div>
  )
}

export default WHY_US