import React,{useState}from 'react'
import './Navbarstyles.css'
import {BsPerson,BsSearch} from 'react-icons/bs'
import {FaBars,FaTimes,FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'
function Navbar() {
  const [nav,setnav]=useState(false);
  const handelnav = () => setnav(!nav);
  return (
    <div name='backtotop'  className={nav ? 'Navbar mobil-bg' : 'Navbar'}>
     <div className="Container">
      <div className="Logo">
        <h2>ETHIO-TRAVEL</h2>
        <small style={{color:'yellow'}}>The best travel</small>
      </div>
      <ul className={nav ? "Nav-menu active" : 'Nav-menu '}>
        <li><a href='/home'>Home</a></li>
        <li><a href='/travel'>Travel</a></li>
        <li><a href='/destination'>destination</a></li>
        <li><a href='/view'>View</a></li>
        <li><a href='/book'>Book</a></li>
        <li><a href='/map'>Map</a></li>
        <li><a href='/contact'>Contact</a></li>
        <div className="Mobil-top">
          <button className='Mobil-btn'>Search</button>
          <button className='Mobil-btn'>Account</button>
        </div>
        <div className="Mobil-socila-icons">
           <FaFacebook className='icon'/>
           <FaTwitter className='icon'/>
           <FaYoutube className='icon'/>
           <FaInstagram className='icon'/>
       </div>
      </ul>
       <div className="Nav-icon">
         <BsPerson className='icons'/>
         <BsSearch className='icons'/>
       </div>
       <div className="fabar-fatimes" onClick={handelnav}>
      {nav ? <FaTimes className='icons' /> :<FaBars className='icons'/> }
       
       </div>
     </div>
    </div>
  )
}

export default Navbar