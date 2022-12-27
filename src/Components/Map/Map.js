import React from 'react'
import './Map.css'
import map from '../../assets/Map.png'
function Map() {
  return (
    <div className='map'>
    <div className="map-container">
    <div className="map-content">
    <div className="map-left">
          <div className="map-left-content">
            <p>Follow The Map </p>
            <h2>Find Your Destination here</h2>
             <h2>Visit Ethiopia</h2>
             <div className="map-btn">
                <button className='map-btn-1'>Find</button>
                <button className='map-btn-2'>Others</button>
             </div>
          </div>
        </div>
        <div className="map-right">
          <img src={map} alt="/" />
          <p>Find your destination here</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Map