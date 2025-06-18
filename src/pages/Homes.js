import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import DisplayPromo from '../components/DisplayPromo';


function Homes() {
  return (
    <div className="relative">
      {/* <div className='scroll bg-gray-100 absolute min-h-screen bg-white p-8 rounded-lg shadow-md w-full max-w-lg m-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className=''>Welcome to my Website</div>
      </div> */}
      <DisplayPromo/>
      <HeroSection/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      {/* <Testimonials/> */}
      <CallToAction/>
    </div>
  )
};
export default Homes
