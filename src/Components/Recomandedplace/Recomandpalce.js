import React from 'react'
import './Recomandplace.css'
import Recommenddata from'./Recomanddata'
import Abayandland from '../../assets/abayandland.jpg'
import butyafferwater from '../../assets/butyafarwater.jpg'
import butyfufuata from '../../assets/butyfufuta.jpg'
import butyland from '../../assets/butyland.jpg'
import land2 from '../../assets/Land2.jpg'
import entoto from '../../assets/entoto.jpg'
function Recomandpalce() {
  return (
    <div className='recomand-place'>
     <div className="recomad-contents">
        <h2>WE-RECOMMEND-THESE-AREA-TO-VISIT</h2>
        <div className="recommend-img">
          <Recommenddata  image={Abayandland} text='Tis-Abay'/>
          <Recommenddata  image={butyafferwater} text='Affar'/>
          <Recommenddata  image={butyfufuata} text='Fuafuata'/>
          <Recommenddata  image={butyland} text='Best-land'/>
          <Recommenddata  image={land2} text='Land'/>
          <Recommenddata  image={entoto} text='Entoto'/>
        </div>
     </div>
    </div>
  )
}

export default Recomandpalce