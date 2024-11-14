import CallToAction from './CallToAction';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  let gb = 'bg-gradient-to-r from-blue-200'
  let text_gb = 'bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent' 
  return (
    <div className="relative bg-cover bg-center p-2 block office flex justify-center items-center montserrat-font" loading="lazy">

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-gradient-to-r from-blue-200 bg-clip-text text-transparent px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Buy Your Dream Properties
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Explore the best properties in your area
        </p>

        <div className="w-full hidden lg:block mt-16">
            <Link to="/affilate-program" className='block py-2 px-4 hover:bg-blue-300 rounded text-white border-2' >BECOME AN AFFILATE</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
