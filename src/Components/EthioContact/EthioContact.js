import React from 'react'
import './EthioContace.css'
function EthioContact() {
  return (
    <div className='ethio-contact'>
      <div className="contact-container">
        <h2>Contact</h2>
        <form>
        <div>
        <label htmlFor="">Name</label>
        <input type="text"  placeholder='Your Name....'/>
        </div>
            <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Your Email....' />
            </div>
            <div>
             <label htmlFor="">Message</label>
             <textarea name="" id="" cols="30" rows="15" placeholder='Put your message here.....'/>
            </div>
           <div>
            <button>Submit</button>
           </div>

        </form>
      </div>
    </div>
  )
}

export default EthioContact