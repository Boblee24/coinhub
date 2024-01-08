import { useContext } from 'react'
import Journeyhero from '../components/Journeyhero'
import { AppContext } from '../App'

const Journey = () => {
  const {VideosArray} = useContext(AppContext)
  
  const journeyvideos = (heading1, heading2) => {
    return (
      <div className='p-2'>
        <div className='text-center'>
          <h2 className='text-[2.1rem] font-[Epilogue] font-bold'>{heading1}</h2>
          <p className='text-[#5D7285] text-[14px] font-[Poppins]'>{heading2}</p>
        </div>
        <div className='grid grid-cols-1 gap-4 m-2 items-stretch'>
          {VideosArray.map((videoarray) => (
            <div key={videoarray.article_id}>
              <video width="640" height="360" className="video-js vjs-default-skin vjs-big-play-centered rounded-lg"controls src={videoarray.src} type="video/mp4"></video>
              <h2 className='font-[Poppins] font-semibold p-1 '>{videoarray.title}</h2>
            </div>
          ))}
        </div>
        <button className='m-auto'>See more Videos</button>
      </div>
    )
  }
  return (
    <div className='journey'>
      <Journeyhero/>
      {journeyvideos('30 Seconds Smarter', 'A short 30 second video that will make you understand more about the capital market')}
      {journeyvideos('Learn with us', 'Develop and improve your knowledge of skills about the world of stocks to achieve maximum profit')}
      {/* <Videos  video = {props.VideoArray} checkVideo = {props.checkVideo} /> */}
    </div>
  )
}

export default Journey