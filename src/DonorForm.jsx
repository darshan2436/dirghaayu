import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import Appointment from './Appointment.js';
import Donation from './Donation.js';
import Login from './Login.js';
import Register from './Register.js';
import DonorForm from './DonorForm';
import RequestForm from './RequestForm';

function App() {
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleDonorClick = () => {
    setShowDonorForm(true);
    setShowRequestForm(false);
  };

  const handleRequestClick = () => {
    setShowRequestForm(true);
    setShowDonorForm(false);
  };

  return (
    <div className="">
      <Router>
        <nav className="m-5 position:sticky">
          <Link to="/" className="mx-4 hover:text-blue-500 text-xl">Home</Link>
          <Link to="/appointment" className="mx-4 hover:text-blue-500 text-xl">Appointment</Link>
          <Link to="/donation" className="mx-4 hover:text-blue-500 text-xl">Donation</Link>
          <Link to="/login" className="mx-4 hover:text-blue-500 text-xl">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donorform" element={<DonorForm />} />
          <Route path="/requestform" element={<RequestForm />} />
        </Routes>
      </Router>
      <div className="flex justify-center mt-10">
        <button onClick={handleDonorClick} className="bg-blue-500 text-white py-2 px-4 rounded">
          Donor
        </button>
        <button onClick={handleRequestClick} className="bg-green-500 text-white py-2 px-4 rounded ml-4">
          Request
        </button>
      </div>
      
      <div className="mt-10">
        {showDonorForm && <DonorForm />}
        {showRequestForm && <RequestForm />}
      </div>
    </div>
  );
}

export default App;
