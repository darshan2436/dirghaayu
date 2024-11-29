import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '.src/Assets/background.jpg';

function AboutUs() {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-green-200 via-blue-400 to-purple-200 bg-opacity-90">

      <header className="text-center -my-10 mb-12 bg-slate-900 opacity-80">
        <h1 className="text-5xl font-extrabold text-white ">About Us</h1>
        <p className="text-xl text-white mt-4">Learn more about our team and mission</p>
        <br />
        <hr />
      </header>
     
      <section className="max-w-4xl mx-auto text-center px-5 mb-16">
        <h2 className="text-3xl  text-white font-bold">Our Mission</h2>
        <p className="text-lg text-white mt-4 font-serif">
        "Empowering lives through seamless online organ donation and doctor appointment scheduling."
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-1000 mb-10">Meet Our Team</h2>
        <div className="max-w-max  grid md:grid-cols-2 gap-8 opacity-80">
          <div className=" p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover: transition-0.7s hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100 ">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/darshan.jpg "
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="https://www.linkedin.com/in/darshan-thapa-65218a302?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE1Eux4BjXMPdjEXsVNi05mGf4QVxfOTp08&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B2JyY7zVYQlWQp0GA4ZcAOA%3D%3D" className='hover:text-white'>Darshan Thapa</a></h3>
            <p className="text-gray-500">Team Leader</p>
            <p className="mt-2 text-gray-900 font-bold ">
            A dedicated third-semester computer science student with a strong passion for programming and technology. He is focused on leveraging his skills to make a meaningful impact in healthcare through innovative solutions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100 ">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/Hari.jpg"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="https://www.linkedin.com/in/hari-shankar-rana/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BNqEwLhCCTFaOY5f8lUm4Tw%3D%3D" className='hover:text-white'>Hari Shankar Rana</a></h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
            An enthusiastic programmer in his third semester, always eager to learn and apply new technologies. His keen interest in healthcare innovations is matched by his commitment to developing intuitive and accessible applications that make healthcare services more efficient for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/binod.jpg"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="https://www.linkedin.com/in/binod-acharya-27209a315?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE_srfYBlBAlK0EtwkQRBilqLGkJQefHSHE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bjwex6Fw3SnG%2B%2Fh01J2HqEw%3D%3D" className='hover:text-white'>Binod Acharya</a></h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
            A motivated student with a knack for problem-solving and a deep passion for programming. His dedication to improving healthcare accessibility through technology makes him a crucial part of the team, always ready to tackle new challenges with creative solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/nishan.jpg"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline"><a href="https://www.linkedin.com/in/nishan-shrestha-9a9412282/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BgWrewsJZSBOctleZtzXFlA%3D%3D" className='hover:text-white'>Nishan Shrestha</a></h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
            An aspiring software developer, fascinated by the intersection of technology and healthcare. His goal is to harness his programming skills to build platforms that enhance patient care and streamline medical processes, ensuring a better future for all.
            </p>
          </div>
        </div>
      </section>
      {/* <footer className="text-center py-6 mt-16 bg-gray-800 text-white">
        <p>&copy; 2024 Dirghaayu. All Rights Reserved.</p>
      </footer> */}

<footer className="w-full bg-gray-900 text-white py-8 text-center mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul>
                <li className="text-gray-300 mt-2">
                  <a href="mailto:shrestha.nishan060@email.com" className="hover:text-yellow-300">Email: shrestha.nishan060@email.com</a>
                </li>
                <li className="text-gray-300 mt-2">
                  <a href="mailto:ranahari836@email.com" className="hover:text-yellow-300">Email: ranahari836@email.com</a>
                </li>
                <li className="text-gray-300">
                  <a href="tel:+9779818866274" className="hover:text-yellow-300">Phone: +977 9818866274</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
                <li>
                  <Link to="/donation" className="text-gray-300 hover:text-yellow-300">Blood Donation</Link>
                </li>
                <li>
                  <Link to="/appointment" className="text-gray-300 hover:text-yellow-300">Appointment Booking</Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-gray-300 hover:text-yellow-300">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-yellow-300">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://facebook.com" className="text-gray-300 hover:text-yellow-300">Facebook</a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-yellow-300">Twitter</a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-yellow-300">Instagram</a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-yellow-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-gray-300 text-sm">
            &copy; 2024 Dirghaayu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;