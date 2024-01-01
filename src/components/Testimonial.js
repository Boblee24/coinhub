import React from 'react'
import { SiSimplenote } from "react-icons/si";
import Slider from 'react-slick'

const Testimonial = () => {
  let settings = {
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
    <div className='testimonial m-2 text-center'>
        <div className='top_value'>
            <h3 className='text-[20]'>Testimonials</h3>
            <p>Millions of global traders have chosen Tradiant as their stock broker of choice and here are their thoughts after trading with Tradiant.</p>
        </div>
        <Slider {...settings}>
           <div className='bottom_value  my-2' >
              <div className='flex justify-center'><SiSimplenote className='text-[blue]' /></div>
              <div>
                  <h5>Ayomiposi Aborisade</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value my-2'>
              <div className='flex justify-center'><SiSimplenote /></div>
              <div>
                  <h5>Accesibilty</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value my-2'>
              <div><SiSimplenote /></div>
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value my-2'>
              <div><SiSimplenote /></div>
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value my-2'>
              <div><SiSimplenote /></div>
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value my-2'>
              <div><SiSimplenote /></div>
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
        </Slider>
    </div>
  )
}

export default Testimonial
