import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";

import Donate from "./DonorForm.jsx";
import RequestForm from "./RequestForm.jsx";
import AboutUs from "./AboutUs.js";

function App() {
  const [showDonorForm, setShowDonorForm] = useState(false); 
  const [showRequestForm, setShowRequestForm] = useState(false); 
  const handleDonorClick = () => { setShowDonorForm(true); 
    setShowRequestForm(false); }; 
  const handleRequestClick = () => { 
    setShowRequestForm(true); 
    setShowDonorForm(false);
  };

  return (
    <div className="">
      <Router>
        <nav className="m-5 position:sticky">
          <Link to="/" className="mx-4 hover:text-blue-500 text-xl ">Home</Link>
          <Link to="/appointment" className="mx-4 hover:text-blue-500 text-xl ">Appointment</Link>
          <Link to="/donation" className="mx-4 hover:text-blue-500 text-xl ">Donation</Link>
          <Link to="/login" className="mx-4 hover:text-blue-500 text-xl ">Login</Link>
          <Link to="/aboutus" className="mx-4 hover:text-blue-500 text-xl ">About Us</Link>

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
        </Routes>
      </Router>
    </div>
    
  );
}

function DonorForm() 

{ return ( 
    <form className="bg-white p-6 rounded shadow-md"> 
      <h2 className="text-2xl mb-4">Donor Form</h2> 
        <input type="text" placeholder="Name" className="block w-full p-2 border mb-4"/> 
        <input type="text" placeholder="Blood Type" className="block w-full p-2 border mb-4"/> 
        <input type="text" placeholder="Contact" className="block w-full p-2 border mb-4"/> 
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button> 
    </form> ); 
}



export default App;
