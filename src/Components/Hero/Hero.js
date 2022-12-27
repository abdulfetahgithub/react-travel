import React from 'react'
import './Hero.css'
import Numercount from 'react-countup'
import Video from '../../assets/maldivesVideo.mp4'
import {AiOutlineSearch} from 'react-icons/ai'
function Hero() {
  return (
    <div className='Hero'>
      <video autoPlay muted loop id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className="hero-overlay"></div>
       <div className="contents">
         <h2>The best travel in Etiopia</h2>
         <p>Top best Locations with 10% discount</p>
         <form >
        <input type="text"  placeholder='Search Destinations'/>
        <button> <a href="/"> <AiOutlineSearch style={{color:'#fff',fontSize:'1.3rem'}}/></a></button>
         </form>
         <div className='counter-ethio'>
<Numercount end={34567} start={200} delay='1' prefix='+'/>
<span>Total Visited area</span>
</div>
       </div>
    </div>
  )
}

export default Hero