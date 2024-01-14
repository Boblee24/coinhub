import './App.css';
import "./style1.css"
import {useState, createContext, useEffect} from 'react'
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
import Newsfall from './pages/Newsfall';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Journeyfall from './pages/Journeyfall';
import Harmbuger from './components/harmbuger';

export const AppContext = createContext()

function App() {

  //navigation of sidebar
  const [toggle, setToggle] = useState(window.innerWidth > 768)
  const handleHarmbugerclick = () => {
    setToggle((prevToggle) => { 
    if (window.innerWidth <= 768) {
      // Toggle the value based on the previous value
      return !prevToggle;
    } else {
      // If the window width is greater than 768px, set it to true
      return false;
    }
  });
  
  }
  useEffect(() => {
    const handleResize = () => {
      setToggle(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    } 
  }, [toggle])


  const scrollToTop = () => {
    window.scrollTo({
      top : 0,
      behavior: 'auto'
    })
  }

  const navigate = useNavigate()
  
  
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

  const [clickedVideo, setClickedVideo] = useState({
    ...VideosArray[0]
  });
  const [clickedArticle, setClickedArticle] = useState({
    ...updateData[0]
  });

  const navToJourneyFall = () => navigate("/journeyfall") 

  const checkId = (newsId) => {
    navigate("/newsfall")
    handleClick(newsId, updateData, setClickedArticle)
  }
  const checkVideo = (newsId) => {
    navigate("/journeyfall")
    handleClick(newsId, VideosArray, setClickedVideo)
  }

  return (
    <div className=" bg-[#FFFFFF] app relative max">
      <AppContext.Provider value={{scrollToTop, VideosArray, updateData, checkId, handleClick}}>
          <Header
            handleHarmbugerclick={handleHarmbugerclick} 
            toggle={toggle}
          />
          <Harmbuger 
            toggle={toggle} 
            scrollToTop ={scrollToTop}
            handleHarmbugerclick={handleHarmbugerclick} 
          />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="newsfall" element ={<Newsfall 
            onclick={handleClick} 
            clickedArticle = {clickedArticle}
            setClickedArticle = {setClickedArticle}
          />}
          />
          <Route path="about" element={<About/>}/>
          <Route path="journey" element={<Journey
            checkVideo = {checkVideo}
            navToJourneyFall = {navToJourneyFall}
          />}
          />
          <Route path="journeyfall" element={<Journeyfall 
            clickedVideo = {clickedVideo}
            VideosArray = {VideosArray}
            setClickedVideo = {setClickedVideo}
          />}
          />
          <Route path="why_us" element={<WHY_US/>}/>
          <Route path="help" element={<Help/>}
          />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
        <Credits />
        <Footer/>
      </AppContext.Provider>
    </div>
  );
}
export default App;
