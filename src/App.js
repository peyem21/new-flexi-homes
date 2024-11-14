import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homes from './pages/Homes';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import AffiliateProgram from './pages/Affilate';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Homes/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/services' element={<Services/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='/affilate-program' element={<AffiliateProgram/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
