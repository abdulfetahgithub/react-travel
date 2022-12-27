import React from 'react'
import './Book.css'
import {motion} from 'framer-motion'
import africa from '../../assets/africa.jpg'
function Book() {
  return (
    <div className='book'>
     <div className="book-content-grid">
        <div className="book-left">
          <motion.h2
          initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:0}}
          transition={{type:'spring', delay:'1'}}
          exit={{opacity:0,x:100}}
          >LUXURY INCLUDES VACATIONS FOR TWO PEOPLE</motion.h2>
        <motion.p
          initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:0}}
          transition={{type:'spring', delay:'2'}}
          exit={{opacity:0,x:100}}
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam possimus error esse voluptatem perspiciatis natus quos ut qui recusandae assumenda deserunt explicabo sequi id, quam beatae, iste a voluptates rem. Optio reprehenderit hic culpa veritatis fuga doloribus nesciunt tempore quisquam quis numquam, unde velit mollitia quo reiciendis, facilis quia eveniet cum. Laudantium consequatur ad aut, at necessitatibus explicabo molestiae odio nam, nesciunt aperiam ducimus sequi totam quibusdam esse voluptate Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam possimus error esse voluptatem perspiciatis natus quos ut qui recusandae assumenda deserunt explicabo sequi id, quam beatae, iste a voluptates rem. Optio reprehenderit hic culpa veritatis fuga doloribus nesciunt tempore quisquam quis numquam, unde velit mollitia quo reiciendis, facilis quia eveniet cum. Laudantium consequatur ad aut, at necessitatibus explicabo molestiae odio nam, nesciunt aperiam ducimus sequi totam quibusdam esse voluptate Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam possimus error esse voluptatem perspiciatis natus quos ut qui recusandae assumenda deserunt explicabo sequi id, quam beatae, iste a voluptates rem. Optio reprehenderit hic culpa veritatis fuga doloribus nesciunt tempore quisquam quis numquam, unde velit mollitia quo reiciendis, facilis quia eveniet cum. Laudantium consequatur ad aut, at necessitatibus explicabo molestiae odio nam, nesciunt aperiam ducimus sequi totam quibusdam esse voluptate</motion.p>
        <div className="book-left-bottom">
            <motion.div className="book-box-1"
            initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{type:'spring', delay:'1'}}
          exit={{opacity:0,y:-100}}
            >
            <div>
            <img src={africa} alt="" />
            </div>
            <motion.div className='book-box-1-1'
              initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{type:'spring', delay:'1'}}
          exit={{opacity:0,y:-100}}
            >
            <h3>WORLD'S LEADING</h3>
            <p className='book-all'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-WORLD</p>
             <button>Learn More</button>
            </motion.div>
            </motion.div>
            <div className="book-box-2">
            <h3>NO ONE INCLUDES MORE</h3>
                    <p className='book-all'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-WORLD</p>
                 <button>View Packages</button>
            </div>
        </div>
        </div>
        <motion.div className="book-right"
            initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          transition={{type:'spring', delay:'1'}}
          exit={{opacity:0,x:-100}}
        >
        <div className="book-promo">
        <h4 className='save'>GET AN ADDITIONAL 7% OFF</h4>
             <p className='timer'>2 HOURS LEFT!</p>
             <p className='offers'>VIEW ALL CURRENT OFFERS</p>
        </div>
        <form className='book-form'>
            <div className="input-wrapper">
                <label>Destinations</label>
                <select name="" id="">
                    <option value="1">Gonder</option>
                    <option value="1">Harer</option>
                    <option value="1">Affar</option>
                    <option value="1">Tisabay</option>
                    <option value="1">Gonder</option>
                    <option value="1">Harer</option>
                    <option value="1">Affar</option>
                    <option value="1">Tisabay</option>
                </select>
            </div>
            <div className="input-wrapper">
            <div className="date-wrappre ">
            <div className="check-in">
                <label>Check-In</label>
                    <input className='input-date' type="date" />
                </div>
                <div className="check-in">
                <label>Check-Out</label>
                    <input  className='input-date' type="date" />
                </div>
            </div>
                <div className='check-ava'><button>Check & Availability</button></div>
            </div>
        </form>
        </motion.div>
        </div>
     </div>
  
  )
}

export default Book