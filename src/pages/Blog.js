import Bloghero from '../components/Bloghero';
import News from '../components/News';
import Newsletter from '../components/Newsletter';


const Blog = (props) => {
  return (
    <div className='blog'>
      <Bloghero/>
      <News />
      <Newsletter/>
    </div>
  )
}

export default Blog
