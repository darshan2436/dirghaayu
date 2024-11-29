import React from 'react';
// import logo from '.src/Assets/background.jpg';

function AboutUs() {
  return (
    <div className="min-h-screen py-10 bg-fixed bg-cover" style={{ backgroundImage: `url('image/logo.jpg')` }}>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white ">About Us</h1>
        <p className="text-xl text-white mt-4">Learn more about our team and mission</p>
      </header>
      <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="text-3xl  text-white font-bold">Our Mission</h2>
        <p className="text-lg text-white mt-4 font-serif">
        "Empowering lives through seamless online organ donation and doctor appointment scheduling."
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-1000 mb-10">Meet Our Team</h2>
        <div className="max-w-max  grid md:grid-cols-2 gap-8 opacity-55">
          <div className=" p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100 ">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=" "
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="" className='hover:text-white'>Darshan Thapa</a></h3>
            <p className="text-gray-500">Team Leader</p>
            <p className="mt-2 text-gray-900 font-bold ">
            A dedicated third-semester computer science student with a strong passion for programming and technology. He is focused on leveraging his skills to make a meaningful impact in healthcare through innovative solutions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100 ">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=""
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="" className='hover:text-white'>Hari Shankar Rana</a></h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
            An enthusiastic programmer in his third semester, always eager to learn and apply new technologies. His keen interest in healthcare innovations is matched by his commitment to developing intuitive and accessible applications that make healthcare services more efficient for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=""
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="" className='hover:text-white'>Binod Acharya</a></h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
            A motivated student with a knack for problem-solving and a deep passion for programming. His dedication to improving healthcare accessibility through technology makes him a crucial part of the team, always ready to tackle new challenges with creative solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src=""
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="" className='hover:text-white'>Nishan Shrestha</a></h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
            An aspiring software developer, fascinated by the intersection of technology and healthcare. His goal is to harness his programming skills to build platforms that enhance patient care and streamline medical processes, ensuring a better future for all.
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

export default AboutUs;