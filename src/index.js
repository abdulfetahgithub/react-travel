import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './Components/Router/Homepage'
import Travelpage from './Components/Router/Travelpage'
import Destinationpage from './Components/Router/Destinationpage'
import Viewpage from './Components/Router/Viewpage'
import Bookpage from './Components/Router/Bookpage'
import Mappage from './Components/Router/Mappage'
import Contactpage from './Components/Router/Contactpage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
    <Router>
        <Routes>
            <Route path='/' exact element={<App/>} />
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/travel' element={<Travelpage/>}/>
            <Route path='/destination' element={<Destinationpage/>}/>
            <Route path='/view' element={<Viewpage/>}/>
            <Route path='/book' element={<Bookpage/>}/>
            <Route path='/map' element={<Mappage/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
    </Router>
    </>
);

