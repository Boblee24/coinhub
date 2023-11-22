import React from 'react'
// import {nanoid} from 'nanoid'
// import data from '../data.json'

const Newsfall = (props) => {
  
  const newsfall = () => {
    return (
      <div>
        {props.updateData.map((article) => (// Using the newly created arry which i mapped through to create something new
          <div key={article.article_id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt="Article" />
          <button onClick={() => props.onclick(article.article_id, props.updateData, props.setClickedArticle)}>Read More</button>{/*The reason for the arrow function before the function id to prevent calling the function on render, it ensure the fuction is invoked only when called*/}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className='newsfall'>
            <section>
              <h3>{props.clickedArticle.title}</h3>
              <h5>This is the fucking Date</h5>
              <img src= {props.clickedArticle.urlToImage} alt='bollocks'/>
              <p>{props.clickedArticle.content}</p>
            </section>
            <h1>HELLO WORLD</h1>
            {newsfall()}
    </div>
  )
}

export default Newsfall