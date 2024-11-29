// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Dirghaayu Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-3xl font-bold">Dirghaayu</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col items-center justify-center text-center px-4">
        <section className="max-w-2xl bg-white p-8 rounded-lg shadow-lg mt-10">
          <img src="/logo.png" alt="Dirghaayu Logo" className="mx-auto h-24 w-24 rounded-full shadow-lg" />
          <h2 className="text-4xl font-bold text-gray-800 mt-4">Welcome to Dirghaayu</h2>
          <p className="text-gray-600 mt-4">
            Dirghaayu is your comprehensive hospital management system that simplifies blood donation, appointment booking, and more. We aim to provide seamless healthcare services to patients and donors.
          </p>
        </section>

        <section className="container mx-auto mt-12 px-6 text-left">
          <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
          <p className="text-gray-600 mt-2">
            Dirghaayu offers a user-friendly platform that integrates all essential hospital services into one seamless system. Our advanced technology ensures that your data is secure and accessible whenever you need it. We prioritize patient care and operational efficiency, making healthcare more accessible and effective for everyone.
          </p>
        </section>

        <section className="container mx-auto mt-12 px-6 text-left">
          <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-800">Blood Donation</h4>
              <p className="text-gray-600 mt-2">
                Manage your blood donations effortlessly with Dirghaayu. Track donations, find donors, and participate in blood drives with ease.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-800">Appointment Booking</h4>
              <p className="text-gray-600 mt-2">
                Book and manage your medical appointments online. Get timely reminders and avoid long waits at the clinic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-800">Patient Management</h4>
              <p className="text-gray-600 mt-2">
                Our comprehensive patient management system helps healthcare providers track patient records, medical history, and treatment plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-800">24/7 Support</h4>
              <p className="text-gray-600 mt-2">
                Our dedicated support team is available round-the-clock to assist you with any queries or issues you may have.
              </p>
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
      </main>

      <footer className="w-full bg-blue-600 text-white py-4 text-center">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p>&copy; 2024 Dirghaayu. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-yellow-300">Privacy Policy</Link>
            <Link to="/" className="hover:text-yellow-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
