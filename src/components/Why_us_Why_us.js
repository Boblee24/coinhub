import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdEqualizer } from "react-icons/md";
import { PiEyeglassesThin } from "react-icons/pi";
import { FiShield } from "react-icons/fi";

const WHY_US_WHY_US = () => {
  return (
    <div className='why_us_why_us'>
        <div className='whyyy'>
            <div className='clild'>
                <div className='left'>Imaggeggegegg</div>
                <div className='right'>
                    <h4>WHY US??</h4>
                    <h3>A <span>Friendly Platform</span> for Beginner Traders</h3>
                    <p>Many people want to trade forex, but have a hard time understanding the basics and how to trade forex. Therefore, Tradiant presents an online-based interactive educational platform to help you learn to trade. The educational content is made light and concise so that a novice trader can learn to trade from scratch in 1 hour.</p>
                    <button>Learn More</button>
                </div> 
            </div>
            <div className='child'>
                <div className='left'>Imaggeggegegg</div>
                <div className='right'>
                    <h4>WHY US??</h4>
                    <h3><span>Additional Benefits</span> of Trading at Tradiant</h3>
                    <p>Every time you transact at Tradiant, you earn Tradiant Rewards points which can be exchanged for various travel, gadget, lifestyle, and automotive gifts. This program applies to all Live Standard Account customers. If trading on a Demo Account you don't get a prize, yes.</p>
                    <button>Learn More</button>
                </div> 
            </div>
        </div>
        <div className='additional text-center m-3'>
            <div className='additional_head'>
                <h3>Additional advantages from <span className='text-[#2196F3]'>Tradiant</span></h3>
                <p>At Tradiant, you will benefit from us, such as many conveniences in transactions, user-friendly transparency, and many others</p>
            </div>
            <div className='additional_flex flex flex-wrap gap-4 my-7'>
                <div className='m-auto w-[300px] border-solid border-2 border-[#C7D0D8] px-4 py-2 rounded-lg shadow-lg shadow-[#E2E7EB]'>
                    <div className='flex justify-center items-center'><MdEqualizer size={40} color="#2196F3"/></div>
                    <h4 className='py-2'>High standards</h4>
                    <p>At Tradiant, we have high standards, all forms of transactions will be processed professionally, so that Tradiant users feel safe and comfortable.</p>
                </div>
                <div className='m-auto w-[300px] border-solid border-2 border-[#C7D0D8] px-4 py-2 rounded-lg shadow-lg shadow-[#E2E7EB]'>
                    <div className='flex justify-center items-center'><IoMdCheckmarkCircleOutline size={40} color="#2196F3"/></div>
                    <h4 className='py-2'>Simplicity</h4>
                    <p>We guarantee the ease of transactions at Tradiant, so that users will have convenience in transactions.</p>
                </div>
                <div className='m-auto w-[300px] border-solid border-2 border-[#C7D0D8] px-4 py-2 rounded-lg shadow-lg shadow-[#E2E7EB]'>
                    <div className='flex justify-center items-center'><PiEyeglassesThin size={40} color="#2196F3"/></div>
                    <h4 className='py-2'>Transparency</h4>
                    <p>We will report all forms of transactions as they are, transparency is very important to grow the trust of Tradiant users.</p>
                </div>
                <div className='m-auto w-[300px] border-solid border-2 border-[#C7D0D8] px-4 py-2 rounded-lg shadow-lg shadow-[#E2E7EB]'>
                    <div className='flex justify-center items-center'><FiShield size={40} color="#2196F3"/></div>
                    <h4 className='py-2'>Invention</h4>
                    <p>Tradiant is the result of the production, refinement, or development of the original invention. It is also continuous and continuously developing in a better direction.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WHY_US_WHY_US