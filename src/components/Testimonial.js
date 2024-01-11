import React from 'react'
import Slider from 'react-slick'
import Images from '../Images';

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
        <div className='top_value md:mx-[10%]'>
            <h3 className='text-[1.5rem] font-[Epilogue] font-bold'>Testimonials</h3>
            <p>Millions of global traders have chosen Tradiant as their stock broker of choice and here are their thoughts after trading with Tradiant.</p>
        </div>
        <Slider {...settings}>
            <div className='bottom_value my-2 md:px-[13%] md:my-5'>
                <div className='w-[60px] h-[60px] m-auto '>
                <img src={Images.testy1} className='rounded-[50%]' alt='testy1' />
                </div>
                <div>
                    <h5 className='font-[Poppins] font-semibold text-[1.2rem] py-2'>Geoff Cox</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
                </div>
            </div>
            <div className='bottom_value my-2 md:px-[13%] md:my-5'>
                <div className='w-[60px] h-[60px] m-auto '>
                <img src={Images.testy2} className='rounded-[50%]' alt='testy2' />
                </div>
                <div>
                    <h5 className='font-[Poppins] font-semibold text-[1.2rem] py-2'>Phantila Phataraprasit</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
                </div>
            </div>
            <div className='bottom_value my-2 md:px-[13%] md:my-5'>
                <div className='w-[60px] h-[60px] m-auto '>
                <img src={Images.testy3} className='rounded-[50%]' alt='testy3' />
                </div>
                <div>
                    <h5 className='font-[Poppins] font-semibold text-[1.2rem] py-2'>Thomas Keller 2 </h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
                </div>
            </div>
            <div className='bottom_value my-2 md:px-[13%] md:my-5'>
                <div className='w-[60px] h-[60px] m-auto '>
                <img src={Images.testy4} className='rounded-[50%]' alt='testy4' />
                </div>
                <div>
                    <h5 className='font-[Poppins] font-semibold text-[1.2rem] py-2'> Susan Hornbeak Ortiz</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
                </div>
            </div>
            <div className='bottom_value my-2 md:px-[13%] md:my-5'>
                <div className='w-[60px] h-[60px] m-auto '>
                <img src={Images.testy5} className='rounded-[50%]' alt='testy5' />
                </div>
                <div>
                    <h5 className='font-[Poppins] font-semibold text-[1.2rem] py-2'>Zach Martin </h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
                </div>
            </div>
            <div className='bottom_value my-2 md:px-[13%] md:my-5'>
                <div className='w-[60px] h-[60px] m-auto '>
                <img src={Images.testy6} className='rounded-[50%]' alt='testy6' />
                </div>
                <div>
                    <h5 className='font-[Poppins] font-semibold text-[1.2rem] py-2'>Thibault Corens</h5>
                    <p>We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.</p>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Testimonial
