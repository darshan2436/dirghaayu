// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";
import AboutUs from "./AboutUs.js";

function App() {
  return (
    
    <div className="min-h-sc"
    style={{ backgroundImage: "url('/image/home.jpg')",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     backgroundPosition: "center", }}>
    
      <Router>
        <nav className="p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:text-yellow-500 text-xl">Home</Link>
              <Link to="/appointment" className="text-white hover:text-yellow-500 text-xl">Appointment</Link>
              <Link to="/donation" className="text-white hover:text-yellow-500 text-xl">Donation</Link>
              <Link to="/aboutus" className="text-white hover:text-yellow-500 text-xl">About Us</Link>
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
  );
}

export default App;
