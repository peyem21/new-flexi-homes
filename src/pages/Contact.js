// import React, { useState } from 'react';
// // import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [isSent, setIsSent] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center zoom-background">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
//         <form onSubmit={sendEmail}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//               id="message"
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           {isSent ? (
//             <p className="text-green-500 mb-4">Message sent successfully!</p>
//           ) : (
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           )}
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault(contactForm);
  //   console.log()
  //   // Simple validation
  //   if (!contactForm.name || !contactForm.email || !contactForm.message) {
  //     setFormStatus({ submitted: false, error: true, message: 'Please fill in all fields.' });
  //     return;
  //   }

  //   // Send data to the backend
  //   fetch('https://new-flexi-server.vercel.app/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(contactForm),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.message) {
  //         setFormStatus({ submitted: true, error: false, message: 'Thank you! Your message has been sent.' });
  //       } else {
  //         setFormStatus({ submitted: false, error: true, message: 'Something went wrong. Please try again.' });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error sending message:", error);
  //       setFormStatus({ submitted: false, error: true, message: 'An error occurred. Please try again later.' });
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Simple validation
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
        setFormStatus({ submitted: false, error: true, message: 'Please fill in all fields.' });
        return;
    }

    try {
        // Send data to the backend
        const response = await fetch('https://new-flexi-server.vercel.app/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactForm),
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle HTTP errors
        }

        const data = await response.json();

        // Check if the API response contains a success message
        if (data.message) {
            setFormStatus({ submitted: true, error: false, message: 'Thank you! Your message has been sent.' });
        } else {
            setFormStatus({ submitted: false, error: true, message: 'Something went wrong. Please try again.' });
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setFormStatus({ submitted: false, error: true, message: 'An error occurred. Please try again later.' });
    }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center zoom-background">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h2>

        {formStatus.message && (
          <p className={`text-center ${formStatus.error ? 'text-red-600' : 'text-green-600'}`}>
            {formStatus.message}
          </p>
        )}

        {!formStatus.submitted && (
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={contactForm.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={contactForm.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={contactForm.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
