const Services = () => {
  const servicesList = [
    {
      title: 'Residential Sales',
      description: 'Expert guidance in buying or selling residential properties to help you find your dream home or investment.',
    },
    {
      title: 'Commercial Real Estate',
      description: 'Assistance in purchasing, leasing, or selling commercial properties tailored to your business needs.',
    },
    {
      title: 'Property Management',
      description: 'Comprehensive management services for rental properties to ensure optimal returns and tenant satisfaction.',
    },
    {
      title: 'Market Analysis',
      description: 'Detailed market analysis to help you make informed decisions based on current trends and data.',
    },
    {
      title: 'Real Estate Consultation',
      description: 'Personalized consultations to answer your questions and guide you through the real estate process.',
    },
    {
      title: 'Investment Properties',
      description: 'Strategies and support for investing in real estate, ensuring you make the most of your investment.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 h-screen montserrat-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-500 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
