// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function Home() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-10">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        transitionTime={600}
        className="w-full md:w-2/3 lg:w-1/2 mx-auto"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const className = isSelected ? 'inline-block w-3 h-3 bg-yellow-500 rounded-full mx-1 cursor-pointer' : 'inline-block w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer';
          return (
            <li
              key={index}
              className={className}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div className="flex flex-col items-center justify-center text-center px-4 py-8">
          <img src="image/logo.jpg" alt="Dirghaayu Logo" className="mx-auto h-48 w-48 md:h-56 md:w-56 shadow-lg border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300" />
          <h2 className="text-4xl font-bold text-white mt-4">Welcome to Dirghaayu</h2>
          <p className="text-white text-opacity-90 mt-4 max-w-2xl">
            Dirghaayu is your comprehensive hospital management system that simplifies blood donation, appointment booking, and more. We aim to provide seamless healthcare services to patients and donors.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 py-8">
          <h3 className="text-4xl font-bold text-white">Why Choose Us?</h3>
          <p className="text-white text-opacity-90 mt-2 max-w-2xl">
            Dirghaayu offers a user-friendly platform that integrates all essential hospital services into one seamless system. Our advanced technology ensures that your data is secure and accessible whenever you need it. We prioritize patient care and operational efficiency, making healthcare more accessible and effective for everyone.
          </p>
        </div>
      </Carousel>

      <section className="container mx-auto mt-12 px-6 text-left">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Link to="/donation" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">Blood Donation</h4>
            <p className="text-gray-600 mt-2">
              Manage your blood donations effortlessly with Dirghaayu. Track donations, find donors, and participate in blood drives with ease.
            </p>
          </Link>
          <Link to="/appointment" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">Appointment Booking</h4>
            <p className="text-gray-600 mt-2">
              Book and manage your medical appointments online. Get timely reminders and avoid long waits at the clinic.
            </p>
          </Link>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold text-gray-800">24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              Our dedicated support team is available round-the-clock to assist you with any queries or issues you may have.
            </p>
            <form className="mt-4">
              <label htmlFor="query" className="block text-gray-700 font-bold mb-2">Submit a Query:</label>
              <input type="text" id="query" name="query" placeholder="Your Query" className="w-full px-4 py-2 mb-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-12 px-6 text-left">
        <h3 className="text-2xl font-bold text-gray-800">Get Involved</h3>
        <p className="text-gray-600 mt-2">
          Join the Dirghaayu community and make a difference. Whether you want to volunteer, donate blood, or support our initiatives, your contribution matters.
        </p>
        <Link to="/aboutus" className="inline-block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More About Us
        </Link>
      </section>

      <footer className="w-full bg-blue-600 text-white py-8 text-center mt-12">
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
              <div className="flex space-x-4">
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

export default Home;
