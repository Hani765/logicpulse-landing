import React, { useState } from 'react';

const ContactUs = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    setFormVisible(false);
  };

  return (
    <section>
      <h3 className="font-medium mt-4">
        Still have questions?{' '}
        <a
          rel="noreferrer noopener"
          href="#contact-us"
          className="text-primary transition-all border-primary hover:border-b-2"
          onClick={() => setFormVisible(!isFormVisible)}
        >
          Contact us
        </a>
      </h3>

      {isFormVisible && (
        <div className="contact-form mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
