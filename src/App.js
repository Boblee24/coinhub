import './App.css';
import "./style1.css"
import {useState} from 'react'
import {useNavigate, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import data from './data.json'
import Help from './pages/Help';
import Home from './pages/Home';
import Journey from './pages/Journey';
import VideoArray from './video.json'
import {nanoid} from 'nanoid'
import About from './pages/About';
import Blog from './pages/Blog';
import WHY_US from './pages/Why_us';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Newsfall from './pages/Newsfall';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Journeyfall from './pages/Journeyfall';
import Harmbuger from './components/harmbuger';

function App() {
  const client = new QueryClient({})

  //navigation of sidebar
  const [toggle, setToggle] = useState(false)
  const handleHarmbugerclick = () => {
     setToggle(!toggle)
      // console.log('Hekllo weosd')
  }

  const navigate = useNavigate()
  const [clickedArticle, setClickedArticle] = useState("");
  const [clickedVideo, setClickedVideo] = useState("");
  const updateData = data.articles.map((article) => ({
    ...article,
    article_id: article.article_id || nanoid()//replacing the json file byh destructuring thye existing the array of bulloks
  }))// Which creates new array UpdateDatab which cannow be mapped through in any part of the app
  const handleClick = (articleId, articleOrVideo, clicked) => {
    //FInding the selected index
    const clickedData = articleOrVideo.find((article) => article.article_id === articleId)// Used this to get the elements of the clicked index array
    clicked(clickedData)
  }
  const VideosArray = VideoArray.videos
  const checkId = (newsId) => {
    navigate("/newsfall")
    handleClick(newsId, updateData, setClickedArticle)
    // return (
    //   console.log(newsId)
    // )
  }

  // console.log(VideoArray);

  const checkVideo = (newsId) => {
    navigate("/journeyfall")
    handleClick(newsId, VideosArray, setClickedVideo)
  }
  return (
    <div className=" bg-[#FFFFFF] app relative">
      <QueryClientProvider client={client}>
        {/* <div> */}
          <Header
            handleHarmbugerclick={handleHarmbugerclick} 
            toggle={toggle}
          />
          <Harmbuger 
            toggle={toggle} 
            handleHarmbugerclick={handleHarmbugerclick} 
          />
        {/* </div> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="blog" element={<Blog articles ={updateData} checkId ={checkId}/>}/>
          <Route path="newsfall" element ={<Newsfall 
            onclick={handleClick} 
            clickedArticle = {clickedArticle}
            updateData = {updateData}
            setClickedArticle = {setClickedArticle}
          />}
          />
          <Route path="about" element={<About/>}/>
          <Route path="journey" element={<Journey
            VideoArray = {VideoArray}
            checkVideo = {checkVideo}
          />}
          />
          <Route path="journeyfall" element={<Journeyfall 
            onclick={handleClick} 
            clickedVideo = {clickedVideo}
            VideoArray = {VideoArray}
            setClickedVideo = {setClickedVideo}
          />}
          />
          <Route path="why_us" element={<WHY_US/>}/>
          {/* <Route path='hello' element={<Harmbuger/>}/> */}
          <Route path="help" element={<Help/>}/>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
        <Credits/>
        <Footer/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
