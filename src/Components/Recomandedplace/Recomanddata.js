import React from 'react'
import './Recomandplace.css'
function Recomanddata({image,text}) {
  return (
    <div className='recommend-data'>
    <img src={image} alt="" />
    <div className="recommend-overlay">
        <p>{text}</p>
    </div>
    </div>
  )
}

export default Recomanddata