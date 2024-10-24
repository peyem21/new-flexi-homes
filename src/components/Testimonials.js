import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      image: '/path-to-client1.jpg',
      feedback:
        'Working with this real estate agency was a fantastic experience. They helped me find the perfect home quickly and efficiently!',
      location: 'New York, USA',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: '/path-to-client2.jpg',
      feedback:
        'I was impressed with the professionalism and attention to detail. Highly recommended!',
      location: 'Los Angeles, USA',
    },
    {
      id: 3,
      name: 'Samuel Green',
      image: '/path-to-client3.jpg',
      feedback:
        'The agents were knowledgeable and friendly, making the entire process stress-free.',
      location: 'Chicago, USA',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.location}</p>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
