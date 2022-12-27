import React from 'react'
import  Book from '../Book/Book'
import EthioFooter from '../EthioFooter/EthioFooter'
import Navbar from '../Navbar/Navbar'
function Bookpage() {
  return (
    <div>
       <Navbar/>
        <Book/>
        <EthioFooter/>
    </div>
  )
}

export default Bookpage