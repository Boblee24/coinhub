import React from 'react'
import Helphero from '../components/Helphero'
import Topic from '../components/Topic'

const Help = (props) => {
  return (
    <div className='help'>
      <Helphero/>
      <Topic VideoArray = {props.VideoArray}/>
    </div>
  )
}

export default Help