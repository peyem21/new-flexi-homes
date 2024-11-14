import React from 'react';
import { teams } from '../components/Data';
import OurTeam from '../components/OurTeam';


const About = () => {
    // const t = teams.map((team) => {
    //     return (
    //         <div key={team.id} className='grid max-w-2xl h-32 bg-gray-500 m-2 p-4'>
    //             <image src={team.image} className='w-full h-48 object-cover'/>
    //             <p>{team.name}</p>
    //             <p>{team.position}</p>
    //         </div>
    //     )
    // })
  return (
    <div className="bg-slate-200 py-16 montserrat-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8 text-left">About Us</h2>

        <h3 className="text-2xl font-semibold text-blue-500 mb-2">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-8">
          To provide personalized and professional real estate services that empower our clients to make informed decisions.
        </p>

        <h3 className="text-2xl font-semibold text-blue-500 mb-2">Core Values</h3>
        <ul className="text-lg text-gray-700 mb-8 mx-auto max-w-prose space-y-2">
          <li>Integrity</li>
          <li>Transparency</li>
          <li>Customer Focus</li>
          <li>Community Involvement</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-500 mb-2">Meet Our Team</h3>
        <p className="text-lg text-gray-700 mb-8">
          Our dedicated team is committed to helping you find the perfect property. Each member brings unique skills and expertise to the table.
        </p>
        <OurTeam/>

        <h3 className="text-2xl font-semibold text-blue-500 mt-8 mb-2">Client Testimonials</h3>
        <blockquote className="text-lg text-gray-700 italic mb-8 border-l-4 border-blue-600 pl-4">
          "Thanks to Flexihomes, we found our dream home in no time! Highly recommended!"
          <footer className="mt-4 text-right text-gray-600">— Happy Client</footer>
        </blockquote>

        {/* <h3 className="text-2xl font-semibold text-blue-500 mb-2">Community Involvement</h3>
        <p className="text-lg text-gray-700 mb-8">
          We believe in giving back to the community through local events and charitable contributions.
        </p> */}

        <button
          onClick={() => window.location.href = '/contact'}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default About;
