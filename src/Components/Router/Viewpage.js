import React from 'react'
import Recomandpalce from '../Recomandedplace/Recomandpalce'
import EthioFooter from '../EthioFooter/EthioFooter'
import Navbar from '../Navbar/Navbar'
function Viewpage() {
  return (
    <div>
      <Navbar/>
        <Recomandpalce/>
        <EthioFooter/>
    </div>
  )
}

export default Viewpage