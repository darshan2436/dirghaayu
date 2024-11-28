import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";
import AboutUs from "./AboutUs.js";
import DonorForm from "./DonorForm.jsx";
import image from "./Assets/background.jpg";




function App() {
  return (
    <div className="home min-h-screen bg-gray-300 bg-cover bg-scroll" style={{ backgroundImage: `url(${image})` }}>
      <Router>
        <nav className="p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <DropdownMenu label="Home" to="/" />
              <DropdownMenu label="Appointment" to="/appointment" />
              <DropdownMenu label="Donation" to="/donation" />
              <DropdownMenu label="About Us" to="/aboutus" />
            </div>
            <div>
              <Link to="/login" className="text-white hover:text-yellow-500 text-xl">Login</Link>
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
          

        </Routes>
      </Router>
      </div>
      /* <div className="carousal">
        <img src="${image}" alt="show the image" />
      </div> */
    
    
  );
}

export default App;
