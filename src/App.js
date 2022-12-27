import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Topvisited from './Components/TopVisitedAreas/Topvisited'
import Recomandpalce from './Components/Recomandedplace/Recomandpalce'
import Ethiocarousel from './Components/EthioCarousel/Ethiocarousel'
import Map from './Components/Map/Map'
import Book from './Components/Book/Book'
import EthioSlider from './Components/EthioSlider/EthioSlider'
import EthioContact from './Components/EthioContact/EthioContact'
import EthioFooter from './Components/EthioFooter/EthioFooter'
function App() {
  return (
  <div>
   <Navbar/>
   <Hero/>
   <Topvisited/>
   <Recomandpalce/>
   <Ethiocarousel/>
   <Map/>
   <Book/>
   <EthioSlider/>
   <EthioContact/>
   <EthioFooter/>
   </div>
  );
}
export default App; 
  /*
import Navbar from './AllmypreviousComponents/Components/Navbar/Navbar'
import Home from './AllmypreviousComponents/Components/Home/Home'
import Home2 from './AllmypreviousComponents/Components/Home2/Home2'
import Home3 from './AllmypreviousComponents/Components/Home3/Home3'
import Home4 from './AllmypreviousComponents/Components/Home4/Home4'
import Footer from './AllmypreviousComponents/Components/Footer/Footer'

 <Navbar/>
 <Home/>
 <Home2/>
 <Home3/>
 <Home4/>
 <Footer/>

 /////////////////////////////

 import Navbar from './AllmypreviousComponents/Components3/Navbar/Navbar'
import Home from './AllmypreviousComponents/Components3/Home/Home'
import Pricing from './AllmypreviousComponents/Components3/Pricing/Pricing'
import Footer from './AllmypreviousComponents/Components3/Footer/Footer'

 <Navbar/>
 <Home/>
 <Pricing/>
 <Footer/>

 /////////////////////////////
import Navbar from './AllmypreviousComponents/DrivingComponent/Navbar/Navbar'
import Form from './AllmypreviousComponents/DrivingComponent/Form/Form'
import Handling from './AllmypreviousComponents/DrivingComponent/Handling/Handling'
import Power from './AllmypreviousComponents/DrivingComponent/Power/Power'
import Speed from './AllmypreviousComponents/DrivingComponent/Speed/Speed'
import Option from './AllmypreviousComponents/DrivingComponent/Option/Option'
import Driver from './AllmypreviousComponents/DrivingComponent/Driver/Driver'
import Slider from './AllmypreviousComponents/DrivingComponent/Slider/Slider'
import Luxury from './AllmypreviousComponents/DrivingComponent/Luxury/Luxury'
import Contact from './AllmypreviousComponents/DrivingComponent/Contact/Contact'

  <Navbar/>
 <Form/>
 <Handling/>
 <Power/>
 <Speed/>
 <Option/>
 <Driver/>
 <Slider/>
 <Luxury/>
 <Contact/>


 ///////////////////////////////////

 import EtNavbar from './EthiFood/EtNavbar/EtNavbar'
import EtHero from './EthiFood/EtHero/EtHero'
import EtSpecials from './EthiFood/EtSpecials/EtSpecials'
import AllFoodsEt from './EthiFood/AllFoodsEt/AllFoodsEt'
import EtFooters from './EthiFood/etFooters/EtFooters'

<EtNavbar/>
<EtHero/>
<EtSpecials/>
<AllFoodsEt/>
<EtFooters/>

///////////////////////////////////
import RelNavbar from './EthioRealstate/Navbar/RelNavbar'
import RelHero from './EthioRealstate/RelHero/RelHero'
import Feature from './EthioRealstate/Feature/Feature'
import Feature2 from './EthioRealstate/Feature2/Feature2'
import Rated from './EthioRealstate/Rated/Rated'
import RelFooter from './EthioRealstate/RelFooter/RelFooter'

<RelNavbar/>
<RelHero/>
<Rated/>
<Feature/>
<Feature2/>
<RelFooter/>

//////////////////////////

import FinanceNav from './FiancialAdvising/FinanceNavbar/FinanceNav'
import FinanceHero from './FiancialAdvising/FinanceHero/FinanceHero'
import Testimonials from './FiancialAdvising/Testimonials/Testimonials'
import About from './FiancialAdvising/Abouts/About'
import FinanceFooter from  './FiancialAdvising/FinanceFooter/FinanceFooter'
<FinanceNav/>
<FinanceHero/>
<About/>
<Testimonials/>
<FinanceFooter/>

///////////////////////////////

import Navbares from './Travelapp/Navbares/Navbares'
import Heros from './Travelapp/Heros/Heros'
import Firstgrid from './Travelapp/Firstgrid/Firstgrid'
import Secandgrid from './Travelapp/Secandgrid/Secandgrid'
import Firstcarousel from './Travelapp/FirstCarousel/Firstcarousel'
import Firsslider from './Travelapp/FirstSlider/Firsslider'
import Details from  './Travelapp/Detail/Details'

<Navbares/>
<Heros/>
<Firstgrid/>
<Secandgrid/>
<Firstcarousel/>
<Firsslider/>
<Details/>
 */