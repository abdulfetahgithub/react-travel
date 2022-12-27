import React from 'react'
import './EthioFooter.css'
import {FiArrowUpCircle} from 'react-icons/fi'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'
import {Link} from 'react-scroll'
function EthioFooter() {
  return (
    <div className='Ethio-footer'>
      <div className="ethio-footer-container">
        <div className="footer-top">
           <h2>Join our exclusive member</h2>
           <Link to='backtotop' smooth={true} duration={500}><FiArrowUpCircle className='arrows'/></Link>
           <p>You can un subscribe at any time</p>
           <form>
            <input type="email" placeholder='Email.....' />
            <button>Join</button>
           </form>
        </div>
        <div className="footer-grid-bottom">
            <div>
                <ul className='footer-menus'>
                <h2>Contact Us</h2>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                </ul>
            </div>
            <div>
                <ul className='footer-menus'>
                <h2>About Us</h2>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                </ul>
            </div>
            <div>
                <ul className='footer-menus'>
                <h2>Social Media</h2>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                </ul>
            </div>
            <div>
                <ul className='footer-menus'>
                <h2>Policy</h2>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                    <li>Manager</li>
                </ul>
            </div>
        </div>
        <div className="footer-last">
                <h2>ETHIO-TRAVEL.</h2>
                <p>Powered by Abdulfetah-All rights reserved  © 2022</p>
               
                <div className="Ethio-social-icon">
                 <FaFacebook className='icon'/>
                 <FaInstagram className='icon'/>
                 <FaYoutube className='icon'/>
                 <FaTwitter className='icon'/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default EthioFooter