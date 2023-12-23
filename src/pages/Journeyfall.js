import React from 'react'
import '../App.css'

const Journeyfall = (props) => {
    // console.log(props.VideoArray);
    const journey = () => {
        return(
            <div>
                {props.VideoArray.videos.map((videoarray) => (
                    <div key={videoarray.article_id}>
                        <video width="640" height="360"  className="video-js vjs-default-skin vjs-big-play-centered"controls src={videoarray.src} type="video/mp4"></video>
                        <h2>{videoarray.title}</h2>
                        <p>{videoarray.description}</p>
                        <button onClick={() => props.onclick(videoarray.article_id, props.VideosArray, props.setClickedVideo)}>Watch More</button>
                    </div>
                ))}
            </div>
        )
    }
    const clicked = () => {
        return(
            <section>
                {/* <video width="640" height="360" controls src={props.clickedVideo.src} type="video/mp4"></video>
                <h2>{props.clickedVideo.title}</h2>
                <p>{props.clickedVideo.description}</p> */}
            </section>
        )
    }
  return (
    <div className='journeyfall'>
        {clicked()}
        {journey()}
    </div>
  )
}

export default Journeyfall