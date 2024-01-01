import React from 'react'
import { IoFlashOutline } from "react-icons/io5";
import { GiTransparentSlime } from "react-icons/gi";

const Partner = () => {
  return (
    <div className='partner m-2 '>
        <div className='partner_note text-center'>
            <h3>A trading partner you can trust</h3>
            <p>At Tradiant, we rigorously focus on quality and transparency. Our order execution quality is independently monitored. Order execution with high quality means: you save money with every investment you make with Tradiant.</p>
        </div>
        <div className='partners my-9 flex justify-between flex-col items-center text-center'>
            <div className='partner_child my-5'>
                <div className='flex justify-center items-center'>
                    <IoFlashOutline className='flash w-10 h-10 text-[#2196F3]' />
                </div>
                <h5>Quality execution on every trade</h5>
                <p>Backed by multiple analyzes and precise algorithms providing quality execution decisions on every trade. Guarantee your comfort and perfection in making decisions.</p>
                <a href= "/" className='text-[#2196F3] my-3 inline-block'> View our execution scoreboard &gt;</a>
            </div>
            <div className='partner_child my-5'>
                <div className='flex justify-center items-center'>
                    <GiTransparentSlime className='slime w-10 h-10 text-[#2196F3] ' />
                </div>
                <h5>Transparent & competitive pricing</h5>
                <p>Provides transparency Pricing Emphasizes Value, not Price. As price becomes clearer to everyone in the market, each competitor's value also comes into sharper focus.</p>
                <a href= "/" className='text-[#2196F3] py-3 inline-block'>View pricing and execution advantage &gt;</a>
            </div>
        </div>
    </div>
  )
}

export default Partner
