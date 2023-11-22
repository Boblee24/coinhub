import React from 'react'

const News = (props) => {
    const newsArray = props.articles.map((article) => (
        <div className='sub_news' key={article.article_id}>
            <img src= {article.urlToImage} alt='soft'/>
            <div>
                <div>
                    <h5>Date</h5>
                    <h5>Corporate News</h5>
                </div>
                <h5>{article.title}</h5>
                <p>{article.description}</p>
                    <button onClick={() => props.checkId(article.article_id)}>Read More</button>
            </div>
        </div>
    ))
  return (
    <div className='news'>
        {newsArray}
    </div>
  ) 
}

export default News