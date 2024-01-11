import  { useContext } from 'react'
import { FaRegHourglass } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { FaChartLine } from "react-icons/fa";
import { FcInspection } from "react-icons/fc";
import { PiChartLineUp } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import Images from '../Images';
import { AppContext } from '../App';

const Topic = () => {
    const {VideosArray} = useContext(AppContext)
  return (
    <div className=''>
        <div className='my-2 xs:my-4 dm:my-6'>
            <h3 className='text-center text-[2rem] md:text-[40px] font-bold font-[Epilogue]'>Favorite Help Topic</h3>
            <div className='grid grid-cols-2 xs:grid-cols-3 gap-4 m-4 dm:grid-cols-4'>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <FaRegHourglass size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>About Tradiant</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <MdOutlineEventNote size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>Beginner's Guide</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <BsPersonPlus size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>Account Opening</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <SlNotebook size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>Trading Education</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <FaChartLine size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>Trading Tools</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <FcInspection size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>Special Promotion</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <PiChartLineUp size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>General Trading</h4>
                </div>
                <div className='topic flex items-center gap-3 shadow-lg rounded-xl shadow-[#E2E7EB] p-3'>
                    <div className='text-[#2196F3] flex justify-center'>
                        <LuDownload size={30}/>
                    </div>
                    <h4 className='w-[50px] font-semibold font-[Poppins]'>Download Platform</h4>
                </div>
            </div>
        </div>
    <div className='grid grid-cols-1 gap-4 m-4 items-stretch my-6'>
        <div className='text-center'>
            <h3 className=' text-[1.7rem] font-[Epilogue] font-bold'>Video Tutorial</h3>
            <p className='text-[.9rem] text-[#91A3B2]'>Learn how to use our platform by watching the following set of Tutorial videos</p>
        </div>
        <div className='md:flex md:gap-2'>
          {VideosArray.map((videoarray) => (
            <div key={videoarray.article_id}>
              <video className="video-js vjs-default-skin vjs-big-play-centered rounded-lg md:h-[240px] md:w-100%"controls src={videoarray.src} type="video/mp4"></video>
              <h2 className='font-[Poppins] font-semibold py-2'>{videoarray.title}</h2>
            </div>
          ))}
        </div>
    </div>
        <section className='flex-col flex justify-center px-[5%] gap-7 py-4 bg-[#F1F9FF] md:flex-row md:justify-between md:items-center md:gap-[5%] '>
            <div className='md:w-[50%]'>
                <img src={Images.mission} alt='mission'/>   
            </div>
            <div className='flex flex-col gap-5 md:w-1/2'>
                <h3 className='leading-[1rem] text-[1.7rem] font-[Epilogue] font-bold'>Glosarium Trading</h3>
                <p>Day Trading is Refers to a certain financial transaction position which is opened and closed on the same day (not overnight).</p>
                <button className='self-start'>Learn More</button>
            </div> 
        </section>
        <footer className='flex flex-col p-3'>
        <h3 className='text-[1.6rem] text-center font-bold leading-[2.2rem]'>Still haven't found the answer to your question?</h3>
        <button className='self-center my-3'>Contact us</button>
        </footer>
    </div>
  )
}

export default Topic