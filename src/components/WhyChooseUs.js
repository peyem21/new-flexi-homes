import React from 'react';
import { FaShieldAlt, FaMoneyBillWave, FaUsers } from 'react-icons/fa'; // Icons for visual enhancement

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-blue-600 text-4xl" />,
      title: 'Trusted Agents',
      description:
        'Work with highly trained and reliable agents with years of experience in the real estate industry.',
    },
    {
      id: 2,
      icon: <FaMoneyBillWave className="text-blue-600 text-4xl" />,
      title: 'Best Deals',
      description:
        'Get access to exclusive listings and unbeatable deals on properties across the market.',
    },
    {
      id: 3,
      icon: <FaUsers className="text-blue-600 text-4xl" />,
      title: 'Customer Satisfaction',
      description:
        'Our clients are our priority. We pride ourselves on delivering excellent customer service.',
    },
  ];

  return (
    <div className="py-16 bg-white montserrat-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Why Choose Us?
        </h2>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
