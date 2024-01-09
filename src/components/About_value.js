import React from 'react'
import { SiEasyeda } from "react-icons/si";
import Slider from "react-slick";

const ABOUT_VALUE = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
    };
  
  return (
    <div className='about_value bg-[#EFF2F4] py-7'>
        <div className=' text-center md:mx-[10%]'>
            <h3 className='text-[1.8rem] font-[Epilogue] font-bold md:text-[40px]'>Our Values</h3>
            <p className='p-3 text-[.9rem]'>Our values are reflected in our product offering and user experience, as well as being embedded in our internal culture and employee experience.</p>
        </div>
        <Slider {...settings}>
          <div className='bottom_value text-center p-3 md:px-[13%] md:my-5'>
              <div className='flex justify-center items-center'>
                <SiEasyeda size={40} color="#28a745" />
              </div>
              <div>
                    <h5 className='text-[1.2rem] font-[500]'>Simplicity</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value text-center p-3 md:px-[13%] md:my-5'>
              <div className='flex justify-center items-center'>
                <SiEasyeda size={40} color="#28a745" />
              </div>
              <div>
                    <h5 className='text-[1.2rem] font-[500]'>Simplicity</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value text-center p-3 md:px-[13%] md:my-5'>
              <div className='flex justify-center items-center'>
                <SiEasyeda size={40} color="#28a745" />
              </div>
              <div>
                    <h5 className='text-[1.2rem] font-[500]'>Simplicity</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
        </Slider>
    </div>
  )
}

export default ABOUT_VALUE