import React from 'react'
import './TopVisited.css'
import Gonder from '../../assets/butygonder.jpg'
import  Land from '../../assets/bestland.jpg'
import Affar from '../../assets/butyaffaryellow.jpg'
import esategomera from '../../assets/esategomera.jpg'
import fufuata from '../../assets/fufuata.jpg'
function Topvisited() {
  return (
    <div className='top-visited'>
       <div className="top-visited-container">
        <h2>Top Visited areas by many</h2>
        <p><span className='span'>So special places Loved by the visitors</span></p>
        <div className="top-visited-img">
        <img className='col-span-3' src={Land} alt="" />
          <img src={Gonder} alt="" />
          <img src={Affar} alt="" />
          <img src={fufuata} alt="" />
          <img src={esategomera} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Topvisited