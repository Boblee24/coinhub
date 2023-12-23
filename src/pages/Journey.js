// import React from 'react'
// import Credits from '../components/Credits'
// import Footer from '../components/Footer'
import Journeyhero from '../components/Journeyhero'
// import Videos from '../components/Videos'

const Journey = (props) => {
  // console.log(props.VideoArray);
  const journeyvideos = () => {
    return (
      <div>
        {props.VideoArray.videos.map((videoarray) => (
          <div key={videoarray.article_id}>
            <video width="640" height="360"  className="video-js vjs-default-skin vjs-big-play-centered"controls src={videoarray.src} type="video/mp4"></video>
            <h2>{videoarray.title}</h2>
            <p>{videoarray.description}</p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className='journey'>
      <Journeyhero/>
      {journeyvideos()}
      {/* <Videos video = {props.VideoArray} checkVideo = {props.checkVideo} /> */}
    </div>
  )
}

export default Journey