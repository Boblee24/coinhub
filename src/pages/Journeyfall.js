import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../App'

const Journeyfall = (props) => {
    const {VideosArray, scrollToTop, handleClick} = useContext(AppContext)

    const journey = () => {
        return(
            <div className='m-2'>
                <div>
                    <p className='text-[#2196F3] font-[Poppins]'>Trending videos</p>
                </div>
                {VideosArray.map((videoarray) => (
                    <div key={videoarray.article_id} className='flex my-2 gap-4 shadow-lg rounded-xl shadow-[#E2E7EB]'>
                        {/* <video width="640" height="360"  className="video-js vjs-default-skin vjs-big-play-centered"controls src={videoarray.src} type="video/mp4"></video> */}
                        <div className='w-[200px] h-[140px] overflow-hidden '>
                            <img className='w-[100%] h-full object-cover rounded-l-lg' src={videoarray.image} alt={videoarray.article_id}/>
                        </div>
                        <div className='w-full flex flex-col py-2 justify-between'>
                            <h2>{videoarray.title}</h2>
                            <p className=''>{videoarray.description}</p>
                            <button className='remove self-start' onClick={() => {handleClick(videoarray.article_id, VideosArray, props.setClickedVideo)
                                    scrollToTop() ;            
                            }}>Watch More</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    const clicked = () => {
        return(
            <section className='p-1 pt-[4rem]'>
                <video width="640" height="360" controls src={props.clickedVideo.src} type="video/mp4"></video>
                <h2 className='font-[Poppins] text-[#485967]'>{props.clickedVideo.title}</h2>
                <p className='font-[Poppins] text-[#485967]'>{props.clickedVideo.description}</p>
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