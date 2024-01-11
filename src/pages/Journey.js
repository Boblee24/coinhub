import { useContext } from 'react'
import Journeyhero from '../components/Journeyhero'
import { AppContext } from '../App'

const Journey = () => {
  const {VideosArray} = useContext(AppContext)
  
  const journeyvideos = (heading1, heading2) => {
    return (
      <div className='p-2 my-3'>
        <div className='text-center'>
          <h2 className='text-[2.1rem] font-[Epilogue] font-bold'>{heading1}</h2>
          <p className='text-[#5D7285] text-[14px] font-[Poppins]'>{heading2}</p>
        </div>
        <div className='md:flex md:gap-4'>
          {VideosArray.map( (videoarray) => (
            <div key={videoarray.article_id} className=''>
              <video className="video-js vjs-default-skin vjs-big-play-centered rounded-lg md:h-[240px] md:w-100%"controls src={videoarray.src} type="video/mp4"></video>
              <h2 className='font-[Poppins] font-semibold p-1 '>{videoarray.title}</h2>
            </div>
          ))}
        </div>
        <div className=' my-3 md:flex md:items-center md:justify-center'><button>See more Videos</button></div>
        
      </div>
    )
  }
  return (
    <div className='journey'>
      <Journeyhero/>
      {journeyvideos('30 Seconds Smarter', 'Develop and improve your knowledge of skills about the world of stocks to achieve maximum profit')}
      {journeyvideos('Learn with us', 'Develop and improve your knowledge of skills about the world of stocks to achieve maximum profit')}
    </div>
  )
}

export default Journey