import React, { useState } from 'react';
import { properties } from './Data';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);

  return (
    <div className="py-16 bg-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured Properties
        </h2>

        {/* Property Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 shadow-lg">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="w-full h-64 flex items-center justify-center bg-slate-100 shadow-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* font-semibold text-gray-900 h-12 mb-4 */}
              {/* <div className="h-32 space-y-2">
  <p className="text-lg font-semibold text-green-700">
    {property.price}
  </p>
  <p className="text-sm text-gray-600 leading-relaxed">
    {property.description}
  </p> */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-blue-800 tracking-tight leading-snug mb-4 h-12">
                  {property.title}
                </h3>
                <div className="h-32 space-y-2">
                  <p className="text-base space-y-2 mt-10 font-semibold text-green-700">{property.price}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2 space-y-2">{property.description}</p>
                </div>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => setSelectedImage(property.image)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-end my-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            <Link to="/properties">Explore Featured Properties</Link>
          </button>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-2/3 h-full bg-slate-300 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full Property"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-lg rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FeaturedProperties;
