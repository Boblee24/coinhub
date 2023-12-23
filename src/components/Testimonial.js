import React from 'react'
import { SiSimplenote } from "react-icons/si";
import Slider from 'react-slick'

const Testimonial = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='testimonial m-2 text-center'>
        <div className='top_value'>
            <h3 className='text-[20]'>Our Values</h3>
            <p>Our values are reflected in our product offering and user experience, as well as being embedded in our internal culture and employee experience.</p>
        </div>
        <Slider {...settings}>
          <div className='bottom_value text-center' >
              <div><SiSimplenote className='text-[blue]' /></div>
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value'>
              <div><SiSimplenote /></div>
              {/* <div>Icon</div> */}
              <div>
                  <h5>Accesibilty</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value'>
              <div><SiSimplenote /></div>
              {/* <div>Icon</div> */}
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value'>
              <div><SiSimplenote /></div>
              {/* <div>Icon</div> */}
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value'>
              <div><SiSimplenote /></div>
              {/* <div>Icon</div> */}
              <div>
                  <h5>Simplicity</h5>
                  <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
              </div>
          </div>
          <div className='bottom_value'>
              <div><SiSimplenote /></div>
              {/* <div>Icon</div> */}
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