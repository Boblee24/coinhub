import React from 'react'

const Videos = (props) => {
    // console.log(props.video.videos);
    // const videolist = 
    //         </div>
    // ))
    // console.log(props.video);
  return (
    <div className='videos'>
        <h3>Learn With us</h3>
        <p>Develop and improve your knowledge of skills about the world of stocks to achieve maximum profit</p>
        <div className='list'>
            {/* {props.video.videos?.map((vid) => (
                
            <div key={vid.article_id} className='video'>
                <video width="640" height="360" controls src={vid.src} type="video/mp4"/>
                <h2>{vid.title}</h2>
                <p>{vid.description}</p>
                <button onClick={() => props.checkVideo(vid.article_id)}>Watch</button>
                </div>
                )
                
                )} */}
            {/* {videolist} */}
        </div>
        <a href='/'>See More </a>
    </div>
  )
}

export default Videos