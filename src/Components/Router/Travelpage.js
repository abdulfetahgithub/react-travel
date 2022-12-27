import React from 'react'
import Topvisited from '../TopVisitedAreas/Topvisited'
import EthioFooter from '../EthioFooter/EthioFooter'
import Ethiocarousel from '../EthioCarousel/Ethiocarousel'
import Navbar from '../Navbar/Navbar'
function Travelpage() {
  return (
    <div>
            <Navbar/>
            <Topvisited/>
            <Ethiocarousel/>
            <EthioFooter/>
    </div>
  )
}

export default Travelpage