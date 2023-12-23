import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow : null,
    nextArrow : null
  };
  return (
    <div>
        <h2>Invest in their stock and be part of the business</h2>
        <div className='brands'>
            <ul>
              <Slider {...settings}>
                <div>
                  <li>Open Zepplin</li>
                </div>
                <div><li>Oracle</li></div>
                <div><li>morpheus</li></div>
                <div><li>Samsung</li></div>
                <div><li>Monday</li></div>
                <div><li>Segment</li></div>
                <div><li>progonent</li></div>
              </Slider>
            </ul>
        </div>
    </div>
  )
}

export default Brand