// import React from 'react';
// import {useNavigate} from 'react-router-dom';

// const CallToAction = () => {
//     const navigate = useNavigate();

//     const handleGetInTouch = () => {
//         navigate('/contact')
//     }

//   return (
//     <div className="bg-blue-600 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Ready to Find Your Dream Home?
//         </h2>
//         <p className="text-white text-lg mb-8">
//           Contact us today to start your journey to finding the perfect property.
//         </p>
//         <button onClick={handleGetInTouch} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
//           Get in Touch
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CallToAction;


import React, { useState } from 'react';
import ContactModal from './ContactModal'; // Import the modal component

const CallToAction = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleGetInTouch = () => {
    setModalOpen(true); // Open the modal when button is clicked
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-white text-lg mb-8">
          Contact us today to start your journey to finding the perfect property.
        </p>
        <button
          onClick={handleGetInTouch}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </button>
      </div>

      {/* Render ContactModal component */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CallToAction;
