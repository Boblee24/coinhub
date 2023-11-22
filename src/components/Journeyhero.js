import React from 'react'

const Journeyhero = () => {
  return (
    <div className='hero'>
        <div className='journey_hero_left'>
            <div className='journey_hero_left_note'>
                <h6><span className='journey_hero_span'>Learn With Tradiant</span></h6>
                <h2><span className='home_hero_span'>GOFX Tradiant</span>Trading Class Program</h2>
                <p>We present this program for you, in order to prepare your skills, mentality, and technical knowledge well before starting trading.</p>
                <div className='journey_hero_links'>
                    <a href='/'>Start Journey</a>
                </div>
            </div>
            <div className='journey_hero_left_sponsor'>
                <p>Registired and Surpervised by:</p>
                <div>
                    <div>Image 1</div>
                    <div>Image 2</div>
                </div>
            </div>
        </div>
        <div className='journey_hero_right'>
            <div>Image 3</div>
            <div>Box</div>
        </div>
    </div>
  )
}

export default Journeyhero