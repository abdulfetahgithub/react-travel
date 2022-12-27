import React from 'react'
import Navbar from '../Navbar/Navbar'
import Topvisited from '../TopVisitedAreas/Topvisited'
import Map from '../Map/Map'
import EthioContact from '../EthioContact/EthioContact'
import  Book from '../Book/Book'
import EthioFooter from '../EthioFooter/EthioFooter'
import EthioSlider from '../EthioSlider/EthioSlider'
import Ethiocarousel from '../EthioCarousel/Ethiocarousel'
import Recomandpalce from '../Recomandedplace/Recomandpalce'
import Hero from '../Hero/Hero'
function Homepage() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Topvisited/>
    <Recomandpalce/>
    <Map/>
    <Ethiocarousel/>
    <EthioSlider/>
    <Book/>
    <EthioContact/>
    <EthioFooter/>
    </div>
  )
}

export default Homepage