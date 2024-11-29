import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";
import AboutUs from "./AboutUs.js";
import DonorForm from "./DonorForm.jsx";
import RequestForm from "./RequestForm.jsx";
import BmiCalculator from "./BmiCalculator.js";
import Admin from "./Admin.js";
import AdminLogin from "./AdminLogin.js";
import Profile from "./Profile.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set true if token exists
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    alert("Logged out successfully!");
  };

  return (
    <div
      className="min-h-sc"
      style={{
        backgroundImage: "url('/image/home.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Router>
        <nav className="p-4 shadow-md bg-gray-950 ">
          <div className="container text-black mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-20">
              <img src="/image/logo.jpg" alt="Dirghaayu Logo" className="h-12 w-12 rounded-full border-2 border-white" />
              <NavLink to="/" label="Home" />
              <NavLink to="/appointment" label="Appointment" />
              <NavLink to="/donation" label="Donation" />
              <NavLink to="/aboutus" label="About Us" />
            </div>
            <div className="flex space-x-4">
              <NavLink to="/admin-login" label="Admin" />
              <div>
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="text-white text-xl py-2 px-4 rounded-full border border-white transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-yellow-500 hover:border-yellow-500"
                  >
                    Profile
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-white text-xl py-2 px-4 rounded-full border border-white transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-yellow-500 hover:border-yellow-500"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donorform" element={<DonorForm />} />
          <Route path="/requestform" element={<RequestForm />} />
          <Route path="/bmicalculator" element={<BmiCalculator />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/profile" element={<Profile handleLogout={handleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
}

function NavLink({ to, label }) {
  return (
    <RouterNavLink to={to} className="text-white text-xl relative inline-block group">
      {label}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </RouterNavLink>
  );
}

export default App;
