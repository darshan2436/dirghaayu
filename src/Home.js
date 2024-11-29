import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./Footer.js";

function Home() {
  const [queryData, setQueryData] = useState({
    title: "",
    query: ""
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Directly submit the queryData without the userName
      const response = await axios.post("http://localhost:4000/api/queries/register", queryData);
      setMessage("Query submitted successfully!");
      setQueryData({ title: "", query: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting query:", error);
      setMessage("Failed to submit the query. Please try again.");
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-green-200 via-blue-400 to-purple-200 py-10">
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
          const className = isSelected
            ? "inline-block w-3 h-3 bg-yellow-500 rounded-full mx-1 cursor-pointer"
            : "inline-block w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer";
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
        {/* Carousel Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-8">
          <img
            src="image/homepage.png"
            alt="Dirghaayu Logo"
            className="mx-auto h-60 w-30 md:h-90 md:w-50 shadow-lg border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-4xl font-bold text-white mt-4">Welcome to Dirghaayu</h2>
          <p className="text-white text-opacity-90 mt-4 max-w-2xl">
            Dirghaayu is your comprehensive hospital management system that simplifies blood donation, appointment booking, and more. We aim to provide seamless healthcare services to patients and donors.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 py-8">
        <img src="image/choose.jpg" alt="Dirghaayu Logo" className="mx-auto h-60 w-30 md:h-90 md:w-50 shadow-lg border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300 opacity-80" />
          <h3 className="text-4xl font-bold text-white">Why Choose Us?</h3>
          <p className="text-white text-opacity-90 mt-2 max-w-2xl">
            Dirghaayu offers a user-friendly platform that integrates all essential hospital services into one seamless system. Our advanced technology ensures that your data is secure and accessible whenever you need it. We prioritize patient care and operational efficiency, making healthcare more accessible and effective for everyone.
          </p>
        </div>
      </Carousel>

      <section className="container mx-auto mt-12 px-6 text-left">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Links to other services */}
          <Link
            to="/donation"
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-xl font-bold text-gray-800">Blood Donation</h4>
            <p className="text-gray-600 mt-2">
              Manage your blood donations effortlessly with Dirghaayu. Track donations, find donors, and participate in blood drives with ease.
              <img src="image/blood.jpg" className="w-12 h-12 mt-4 mx-auto sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="blood donation" />
            </p>
         
          </Link>
          <Link
            to="/appointment"
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
          <Link to="/appointment" className="bg-white p-1 rounded-lg">
            <h4 className="text-xl font-bold text-gray-800">Appointment Booking</h4>
            <p className="text-gray-600 mt-2">
              Book and manage your medical appointments online. Get timely reminders and avoid long waits at the clinic.
              <img src="image/appointment1.jpg" className="w-12 h-12 mt-4 mx-auto sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="appointment" />
            </p>
          </Link>
          <Link
            to="/bmicalculator"
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-xl font-bold text-gray-800">BMI Calculator</h4>
            <p className="text-gray-600 mt-2">
              Calculate your Body Mass Index (BMI) to stay on top of your health. It's quick and easy to use our BMI Calculator.
              <img src="image/BMI.jpg" className="w-17 h-24 mt-2 mx-auto" alt="" />
            </p>
            
          </Link>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold text-gray-800">24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              Our dedicated support team is available round-the-clock to assist you with any queries or issues you may have.
            </p>
            {message && (
              <p className={`mt-4 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
            <form onSubmit={handleSubmit} className="mt-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title of Query:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title of Query"
                value={queryData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mb-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="query" className="block text-gray-700 font-bold mb-2">
                Submit a Query:
              </label>
              <textarea
                id="query"
                name="query"
                placeholder="Your Query"
                value={queryData.query}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mb-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
