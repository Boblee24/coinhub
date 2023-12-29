import React from 'react'
// import Split from 'react-split'
const Newsfall = (props) => {
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
        {props.updateData.map((article) => (// Using the newly created arry which i mapped through to create something new
          <div key={article.article_id} className='flex my-4 gap-2 shadow-lg rounded-xl shadow-[#E2E7EB]'>
            <div className='w-[200px] h-[140px] overflow-hidden '>
              <img className='w-[100%] h-full object-cover rounded-l-lg' src={article.urlToImage} alt="Article" />
            </div>
            <div className='w-full flex flex-col py-2 justify-between  '>
              <h2>{trimWords(article.title, 50)}</h2>
              <p className='text-[.8rem]'>{trimWords(article.description, 90)}  <button className='remove' onClick={() => props.onclick(article.article_id, props.updateData, props.setClickedArticle)}>
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
      <section className='main-story'>
        <h3>{props.clickedArticle.title}</h3>
        <h5>This is the fucking Date</h5>
        <img src= {props.clickedArticle.urlToImage} alt='bollocks'/>
        <p>{props.clickedArticle.content}</p>
      </section>
      <section className=' sidebar'>
        <h1>HELLO WORLD</h1>
        {newsfall()}
      </section>
    </div>
  )
}

export default Newsfall