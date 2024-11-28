import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";

function App() {
  return (
    <div className="">
      <Router>
        <nav className="m-5 position:sticky">
          <Link to="/" className="mx-4 hover:text-blue-500 text-xl ">Home</Link>
          <Link to="/appointment" className="mx-4 hover:text-blue-500 text-xl ">Appointment</Link>
          <Link to="/donation" className="mx-4 hover:text-blue-500 text-xl ">Donation</Link>
          <Link to="/login" className="mx-4 hover:text-blue-500 text-xl ">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
