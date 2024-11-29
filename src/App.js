import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";
import DonorForm from "./DonorForm.jsx";
import RequestForm from "./RequestForm.jsx";
import AboutUs from "./AboutUs.js";
import BmiCalculator from './BmiCalculator.js';

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
              <DropdownMenu label="Home" to="/" />
              <DropdownMenu label="Appointment" to="/appointment" />
              <DropdownMenu label="Donation" to="/donation" />
              <DropdownMenu label="About Us" to="/aboutus" />
            </div>
            <div>
              <Link to="/login" className="text-white text-xl py-2 px-4 rounded-full border border-white transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-yellow-500 hover:border-yellow-500">Login</Link>
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
        </Routes>
      </Router>
    </div>
  );
}

function DropdownMenu({ label, to }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to={to} className="text-white text-xl relative inline-block">
        {label}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
          >
            <div className="p-2">
              <Link to={`${to}/sub1`} className="block px-4 py-2 hover:bg-gray-200">Submenu 1</Link>
              <Link to={`${to}/sub2`} className="block px-4 py-2 hover:bg-gray-200">Submenu 2</Link>
              <Link to={`${to}/sub3`} className="block px-4 py-2 hover:bg-gray-200">Submenu 3</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
