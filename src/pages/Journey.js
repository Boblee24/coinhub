// import React from 'react'
// import Credits from '../components/Credits'
// import Footer from '../components/Footer'
import Journeyhero from '../components/Journeyhero'
import Videos from '../components/Videos'

const Journey = (props) => {
  console.log(props.VideoArray);
  return (
    <div className='journey'>
      <Journeyhero/>
      <Videos video = {props.VideoArray} checkVideo = {props.checkVideo} />
    </div>
  )
}

export default Journey