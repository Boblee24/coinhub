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
    const {VideoArray} = useContext(AppContext)
  return (
    <div className='topic'>
        <h3 className='text-center text-[2rem]'>Favorite Help Topic</h3>
        <div className='grid grid-cols-2 gap-4 m-4'>
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
    <div className='grid grid-cols-1 gap-4 m-4 items-stretch'>
        <div className='text-center'>
            <h3 className=' text-[1.7rem] font-[Epilogue] font-bold'>Video Tutorial</h3>
            <p className='text-[.9rem] text-[#91A3B2]'>Learn how to use our platform by watching the following set of Tutorial videos</p>
        </div>
          {VideoArray.videos.map((videoarray) => (
            <div key={videoarray.article_id}>
              <video width="640" height="360" className="video-js vjs-default-skin vjs-big-play-centered rounded-lg"controls src={videoarray.src} type="video/mp4"></video>
              <h2 className='font-[Poppins] font-semibold py-2'>{videoarray.title}</h2>
            </div>
          ))}
    </div>
        <section className='flex-col flex justify-center px-[5%] gap-7 py-4 bg-[#F1F9FF]'>
            <img src={Images.mission} alt='mission'/>
            <div className='flex flex-col gap-5'>
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