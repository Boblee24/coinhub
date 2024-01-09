import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Images from '../Images';

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
        <h2 className='text-[1.6rem] md:text-[24px] text-center font-[500] p-2'>Invest in their stock and be part of the business</h2>
        <div className='brands gap-4 items-center'>
              <Slider {...settings}>
                <div className='p-3 md:p-7'><img className='' src={Images.segment} alt='segment'/> </div>
                <div className='p-3 md:p-7'><img className='mt-1 md:mt-2' src={Images.oracle} alt='oracle'/></div>
                <div className='p-3 md:p-7'><img className='' src={Images.protonet} alt='protonent'/></div>
                <div className='p-3 md:p-7'><img className='mt-1' src={Images.samsung} alt='samsung'/></div>
                <div className='p-3 md:p-7'><img className='' src={Images.morpheus} alt='morpheus'/></div>
                <div className='p-3 md:p-7'><img className='' src={Images.monday} alt='monday'/></div>
                <div className='p-3 md:p-7'><img className='' src={Images.open} alt='open'/></div>
              </Slider>
        </div>
    </div>
  )
}

export default Brand