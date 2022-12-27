import React from 'react'
import './EthioSlider.css'
function Ethiosliderdata({img,text}) {
  return (
    <div className='Swiper-card'>
      <img src={img} alt='/'/>
      <div className='swiper-overlay'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Ethiosliderdata