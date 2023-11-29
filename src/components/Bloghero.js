import React from 'react'
import Images from '../Images'

const Bloghero = () => {
  return (
    <div className='bloghero'>
        <div className='blog_hero_note bg-center bg-no-repeat h-screen' style={{backgroundImage: `url(${Images.blog_hero})`}}>
            <h4>Market Update</h4>
            <h2>Take note! This is the important point for Bitcoin price to strengthen again</h2>
            <p>There are a number of key points for Bitcoin to strengthen again, closely tied to the Fed's policy, if the US central bank fails to control inflation and the economy heads into recession. </p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Bloghero