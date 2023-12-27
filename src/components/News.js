import React from 'react'

const News = (props) => {
    const trimWords = (toBeTrimmed, words) => {
        let trimedString = toBeTrimmed.trim()
        if(trimedString.length > words){
            return `${trimedString.slice(0, words-3)}...`
        }else{
            return toBeTrimmed
        }
    }
    const newsArray = props.articles.map((article) => (
        <div className='sub_news rounded-xl  h-full' key={article.article_id}>
            <img className='rounded-t-xl' src= {article.urlToImage} alt='soft'/>
            <div className='shadow-lg rounded-xl shadow-[#E2E7EB]'>
                <div className='flex justify-between'>
                    <h5 className='text-sm text-[#485967]'>Date</h5>
                    <h5 className='text-sm text-[#2196F3]'>Corporate News</h5>
                </div>
                <h5 className='text-[red]'>{trimWords(article.title, 50)}</h5>
                <p>{trimWords(article.description, 100)}</p>
                    <button onClick={() => props.checkId(article.article_id)}>Read More</button>
            </div>
        </div>
    ))
  return (
    <div className='news grid grid-cols-2 gap-2 m-2'>
        {newsArray}
    </div>
  ) 
}

export default News