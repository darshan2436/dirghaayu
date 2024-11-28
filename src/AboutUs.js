import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
        <p className="text-xl text-gray-600 mt-4">Learn more about our team and mission</p>
      </header>

      
      <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          We are committed to providing innovative solutions that help businesses thrive in the modern digital world. Our team of experts works collaboratively to create user-friendly products that exceed expectations.
        </p>
      </section>

      
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=" "
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold text-gray-800">Darshan Thapa</h3>
            <p className="text-gray-500">Team Leader</p>
            <p className="mt-2 text-gray-600">
              John is passionate about innovation and leading the company to new heights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=""
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold text-gray-800">Hari Shankar Rana</h3>
            <p className="text-gray-500">Hari Shankar Rana</p>
            <p className="mt-2 text-gray-600">
              Jane leads the development team and ensures our products are built with the latest technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=""
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800">Binod Acharya</h3>
            <p className="text-gray-500">Product Manager</p>
            <p className="mt-2 text-gray-600">
              Mark is responsible for guiding our products from concept to launch, ensuring they meet our customers' needs.
            </p>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=""
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nishan Shrestha</h3>
            <p className="text-gray-500">Product Manager</p>
            <p className="mt-2 text-gray-600">
              Mark is responsible for guiding our products from concept to launch, ensuring they meet our customers' needs.
            </p>
          </div>
        </div>
      </section>

     
      <footer className="text-center py-6 mt-16 bg-gray-800 text-white">
        <p>&copy; 2024 Dirghaayu. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
