import React from 'react';
import { properties } from './Data';
import { Link } from 'react-router-dom'; 

const FeaturedProperties = () => {


  return (
    <div className="py-16 bg-gray-100 montserrat-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured Properties
        </h2>

        {/* Property Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 h-12 mb-4">
                  {property.title}
                </h3>
                <div className='h-32'>
                    <p className="text-gray-600">{property.price}</p>
                    <p className="text-gray-500 mt-2">{property.description}</p>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 bottom-2">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='flex w-full justify-end my-4'>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <Link to="/properties">Explore Featured Properties</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
