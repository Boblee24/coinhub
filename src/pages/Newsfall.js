import React from 'react'
// import Split from 'react-split'

const Newsfall = (props) => {
  
  const newsfall = () => {
    return (
      <div>
        {props.updateData.map((article) => (// Using the newly created arry which i mapped through to create something new
          <div key={article.article_id} className='flex '>
            <div className='w-[200px] overflow-hidden'>
              <img className='w-[80%] ' src={article.urlToImage} alt="Article" />
            </div>
            <div className='w-full'>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <button onClick={() => props.onclick(article.article_id, props.updateData, props.setClickedArticle)}>
                Read More
              </button>
              {/* The reason for the arrow function before the function is to prevent calling the function on render, ensuring it's invoked only when called */}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className='newsfall'>
      <section className='main-story'>
        <h3>{props.clickedArticle.title}</h3>
        <h5>This is the fucking Date</h5>
        <img src= {props.clickedArticle.urlToImage} alt='bollocks'/>
        <p>{props.clickedArticle.content}</p>
      </section>
      <section className='bg-[red] sidebar'>
        <h1>HELLO WORLD</h1>
        {newsfall()}
      </section>
    </div>
  )
}

export default Newsfall