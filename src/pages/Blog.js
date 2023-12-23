// import React, {useState} from 'react';
// import Credits from '../components/Credits';
// import Footer from '../components/Footer';
import Bloghero from '../components/Bloghero';
import News from '../components/News';
import Newsletter from '../components/Newsletter';
// import { useQuery } from '@tanstack/react-query';
// import Axios from 'axios';
// import Newsfall from './Newsfall';
// import { useNavigate } from 'react-router-dom';

const Blog = (props) => {
  
  return (
    <div className='blog'>
      <Bloghero/>
      <News articles = {props.articles} checkId = {props.checkId}/>
      <Newsletter/>
    </div>
  )

}

export default Blog
