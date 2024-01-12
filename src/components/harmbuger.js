import Heading from "../pages/Heading"
import "../style2.css"

const Harmbuger = (props) => {
  return (
    <div className=' flex fixed z-20 justify-between w-full p-2 bg-slate-200 md:hidden '>
        <Heading handleHarmbugerclick={props.handleHarmbugerclick} toggle ={props.toggle}/>
        <button onClick={props.handleHarmbugerclick} className="button-three mt-[-2px] md:hidden" aria-controls="primary-navigation" aria-expanded={props.toggle}>
    <svg stroke="var(--button-color)" fill="none" className="hamburger" viewBox="-10 -10 120 120" width="45">
      <path className="line" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
      </path>
    </svg>
  </button>
    </div> 
  )
}

export default Harmbuger
