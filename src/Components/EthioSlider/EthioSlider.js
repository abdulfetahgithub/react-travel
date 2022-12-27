import React from 'react'
import './EthioSlider.css'
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Ethiosliderdata from './Ethiosliderdata'
import 'swiper/css/navigation'
import abaylight from '../../assets/Abalylight2.jpg'
import abay1 from '../../assets/Abay1.jpg'
import africa from '../../assets/africa.jpg'
import axum from '../../assets/axum.jpg'
import bestland from '../../assets/bestland2.jpg'
import bestland2 from '../../assets/bestland2.jpg'
import butyaffar from '../../assets/butyaffaryellow.jpg'
import Abayandland from '../../assets/abayandland.jpg'
import butyafferwater from '../../assets/butyafarwater.jpg'
import butyfufuata from '../../assets/butyfufuta.jpg'
import butyland from '../../assets/butyland.jpg'
import land2 from '../../assets/Land2.jpg'
import entoto from '../../assets/entoto.jpg'
import Gonder from '../../assets/butygonder.jpg'
import  Land from '../../assets/bestland.jpg'
import Affar from '../../assets/butyaffaryellow.jpg'
import esategomera from '../../assets/esategomera.jpg'
import fufuata from '../../assets/fufuata.jpg'
import kranch from '../../assets/kranch.jpg'
import hyq from '../../assets/hayq.jpg'
import hamermosq from '../../assets/harermosque.jpg'
import harer from '../../assets/harerjb.jpg'
import harerber from '../../assets/harerber.jpg'
import hamer from '../../assets/hamer.jpg'
import hamer2 from '../../assets/hamer2.jpg'
function EthioSlider() {
  return (
    <div className='Ethio-slider'>
      <div className="slider-container">
        <div className="Slider-head">
            <h2>All-AREAS-TO-VISIT</h2>
            <div className="africa-img">
            <img src={africa} alt="" />
            </div>
        </div>
        <div className="Sliders">
            <Swiper 
             modules={[Navigation,Pagination,Scrollbar,A11y]}
             spaceBetween={10}
             slidesPerView={5}
             navigation
             breakpoints={{
                340:{
                     width:250,
                     slidesPerView:1,
                },
                768:{
                    width:768,
                    slidesPerView:4,
                },
                1040:{
                    width:1040,
                    slidesPerView:5,
                }
             }}

             onSlideChange={()=>{console.log('slidchang')}}
            >
                          
                <SwiperSlide>
                  <Ethiosliderdata img={Gonder} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={hamer} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={hamer2} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={harerber} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={harer} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={hamermosq} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                  <Ethiosliderdata img={hyq} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={kranch} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={fufuata} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                  <Ethiosliderdata img={esategomera} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={Affar} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={Land} text='best'/>
                </SwiperSlide>
            <SwiperSlide>
            <Ethiosliderdata img={entoto} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={abaylight} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={abay1} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={butyaffar} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={axum} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={bestland} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={bestland2} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={butyaffar} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={Abayandland} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={butyafferwater} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={butyfufuata} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                   <Ethiosliderdata img={butyland} text='best'/>
                </SwiperSlide>
                <SwiperSlide>
                <Ethiosliderdata img={land2} text='best'/>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default EthioSlider