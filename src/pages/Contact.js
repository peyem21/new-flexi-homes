import { useState } from "react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields.'
      });
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xzzbdkpl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          _subject: `New message from ${contactForm.name}`,
        }),
      });

      if (response.ok) {
        setContactForm({ name: "", email: "", message: "" });
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent.'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'An error occurred. Please try again later.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center montserrat-font">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h2>

        <div className={`mb-4 ${formStatus.message ? 'block' : 'hidden'}`}>
          <p className={`text-center p-3 rounded ${formStatus.error ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>
            {formStatus.message}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={contactForm.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={contactForm.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={contactForm.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={formStatus.submitted}
          >
            {formStatus.submitted ? 'Message Sent' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
