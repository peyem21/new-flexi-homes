import React from 'react';
import { properties } from '../components/Data';

const Properties = () => {

  return (
    <div className=" zoom-background montserrat-font">
      <div className="max-w-7xl mx-auto py-4 pb-16 bg-slate-200 px-4 sm:px-6 lg:px-8 shadow">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600">{property.title}</h3>
                <p className="text-gray-700 mb-2">{property.description}</p>
                <p className="text-blue-500 text-xl font-bold mb-4">{property.price}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
