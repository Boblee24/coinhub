import React, { useContext } from 'react'
import { AppContext } from '../App'

const Newsfall = (props) => {
  const {updateData, scrollToTop, handleClick} = useContext(AppContext)
  
  const trimWords = (toBeTrimmed, words) => {
    let trimedString = toBeTrimmed.trim()
    if(trimedString.length > words){
        return `${trimedString.slice(0, words-3)}...`
    }else{
        return toBeTrimmed;
    }
  }
  const newsfall = () => {
    return (
      <div className='m-2'>
        {updateData.map((article) => (// Using the newly created arry which I mapped through to create something new
          <div key={article.article_id} className='flex my-4 gap-2 shadow-lg rounded-xl shadow-[#E2E7EB]'>
            <div className='w-[200px] h-[140px] overflow-hidden '>
              <img className='w-[100%] h-full object-cover rounded-l-lg' src={article.urlToImage} alt="Article" />
            </div>
            <div className='w-full flex flex-col py-2 justify-between  '>
              <h2>{trimWords(article.title, 50)}</h2>
              <p className='text-[.8rem]'>{trimWords(article.description, 90)}  <button className='remove' onClick={() => {
                handleClick(article.article_id, updateData, props.setClickedArticle)
                scrollToTop();}
              }>
                Read More &rarr;
              </button></p>
              
              {/* The reason for the arrow function before the function is to prevent calling the function on render, ensuring it's invoked only when called */}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className='newsfall'>
      <section className='main-story mx-2 pt-[4rem]'>
        <h3 className='font-[Epilogue] font-bold text-[1.5rem]'>{props.clickedArticle.title}</h3>
        <h5>This is the fucking Date</h5>
        <img className='rounded-lg' src= {props.clickedArticle.urlToImage} alt='bollocks'/>
        <p className='text-[.9rem]'>{props.clickedArticle.content}</p>
      </section>
      <section className=' sidebar'>
        <h1 className='font-[Epilogue] font-bold text-[1.3rem] p-2'>Top News</h1>
        {newsfall()}
      </section>
    </div>
  )
}

export default Newsfall