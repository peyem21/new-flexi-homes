import { useState } from "react";
import FlexiILEYAPROMO1 from '../images/FlexiILEYAPROMO1.webp';



function DisplayPromo() {
  const [showSplash, setShowSplash] = useState(true);

  const handleClose = () => setShowSplash(false);

  return (
    <div className="relative">
      {showSplash ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg shadow-lg max-w-md overflow-hidden">
            <img
              src={FlexiILEYAPROMO1}
              alt="ILEYA PROMO"
              className="w-full h-120 object-contain bg-black"
            />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-lg rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold">hello</h1>
          <h1 className="text-base sm:text-xl">Welcome to My Website</h1>
        </div>
      )}
    </div>
  );
}

export default DisplayPromo;
