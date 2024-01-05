import React, { useContext } from 'react';
import { AppContext } from '../App';

const News = () => {
    const {updateData, checkId} = useContext(AppContext)
    const trimWords = (toBeTrimmed, words) => {
        let trimedString = toBeTrimmed.trim()
        if(trimedString.length > words){
            return `${trimedString.slice(0, words-3)}...`
        }else{
            return toBeTrimmed;
        }
    }
    const newsArray = updateData.map((article) => (
        <div className='sub_news shadow-[#E2E7EB] shadow-lg rounded-xl self-stretch h-[355px] relative my-2' key={article.article_id}>
            <img className='rounded-t-xl' src= {article.urlToImage} alt='soft'/>
            <div className=' p-1'>
                <div className='flex justify-between my-3'>
                    <h5 className='text-[.8rem] text-[#485967] '>21/03/2022</h5>
                    <h5 className='text-[.8rem] text-[#2196F3]'>Corporate News</h5>
                </div>
                <h5 className='text-[.9rem] font-[Poppins] font-semibold'>{trimWords(article.title, 50)}</h5>
                <p className='font-[Poppins] text-[0.8rem]'>{trimWords(article.description, 100)}</p>
                <button className='absolute right-3 bottom-2 remove' onClick={() => checkId(article.article_id)}>Read More &rarr;</button>
            </div>
        </div>
    ))
  return (
    <div className='news grid grid-cols-2 gap-2 m-2  '>
        {newsArray}
    </div>
  ) 
}

export default News