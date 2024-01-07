import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../App'

const Journeyfall = (props) => {
    const {VideosArray, scrollToTop, handleClick} = useContext(AppContext)

    const journey = () => {
        return(
            <div>
                {VideosArray.map((videoarray) => (
                    <div key={videoarray.article_id}>
                        {/* <video width="640" height="360"  className="video-js vjs-default-skin vjs-big-play-centered"controls src={videoarray.src} type="video/mp4"></video> */}
                        <img src={videoarray.image} alt={videoarray.article_id}/>
                        <h2>{videoarray.title}</h2>
                        <p>{videoarray.description}</p>
                        <button onClick={() => {handleClick(videoarray.article_id, VideosArray, props.setClickedVideo)
                                 scrollToTop() ;            
                        }}>Watch More</button>
                    </div>
                ))}
            </div>
        )
    }
    const clicked = () => {
        return(
            <section>
                <video width="640" height="360" controls src={props.clickedVideo.src} type="video/mp4"></video>
                <h2>{props.clickedVideo.title}</h2>
                <p>{props.clickedVideo.description}</p>
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