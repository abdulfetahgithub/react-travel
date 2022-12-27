import React from 'react'
import './Ethiocarousel.css'
import Ethiopia from '../../assets/Ethiopia.png'
import abaylight from '../../assets/Abalylight2.jpg'
import axum from '../../assets/axum.jpg'
import bestland from '../../assets/bestland2.jpg'
import butyaffar from '../../assets/butyaffaryellow.jpg'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Ethiocarousel() {
  return (
    <div className='Ethio-carousel'>
<div className="Ethio-carousel-content">
<div className='ethio-count'>
<img  className='ethio-imge' src={Ethiopia} alt="/" />
</div>
<div className='carousel-wrapper'>
<Carousel className='carousel-ethio' autoPlay={true} showArrows={true} infiniteLoop={true}>
<div>
 <img src={abaylight} alt="/" />
</div>
<div>
<img src={axum} alt="/" />
</div>
<div>
<img src={bestland} alt="/" />
</div>
<div>
<img src={butyaffar} alt="/" />
</div>
</Carousel>
</div>
</div>
    </div>
  )
}

export default Ethiocarousel