import React from 'react'

const News = (props) => {
    const newsArray = props.articles.map((article) => (
        <div className='sub_news rounded-xl' key={article.article_id}>
            <img src= {article.urlToImage} alt='soft'/>
            <div className='shadow-lg shadow-[#E2E7EB]'>
                <div className='flex justify-between'>
                    <h5 className='text-sm text-[#485967]'>Date</h5>
                    <h5 className='text-sm text-[#2196F3]'>Corporate News</h5>
                </div>
                <h5>{article.title}</h5>
                <p>{article.description}</p>
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