import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function Homes() {
  return (
    
    <div className="bg-gray-200 text-gray-800 montserrat-font">
      <HeroSection/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      {/* <Testimonials/> */}
      <CallToAction/>
    </div>
  )
}

export default Homes
