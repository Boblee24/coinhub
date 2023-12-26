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
    <div className='about_value my-7'>
        <div className='top_value text-center'>
            <h3>Our Values</h3>
            <p>Our values are reflected in our product offering and user experience, as well as being embedded in our internal culture and employee experience.</p>
        </div>
        <Slider {...settings}>
          <div className='bottom_value text-center p-3'>
              <div className='flex justify-center items-center'>
                <SiEasyeda size={40} color="#28a745" />
              </div>
              <div>
                    <h5>Simplicity</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value text-center p-3'>
              <div className='flex justify-center items-center'>
                <SiEasyeda size={40} color="#28a745" />
              </div>
              <div>
                    <h5>Simplicity</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value text-center p-3'>
              <div className='flex justify-center items-center'>
                <SiEasyeda size={40} color="#28a745" />
              </div>
              <div>
                    <h5>Simplicity</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
        </Slider>
    </div>
  )
}

export default ABOUT_VALUE