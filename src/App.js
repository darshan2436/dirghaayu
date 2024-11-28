import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Donation from "./Donation.js";
import Login from "./Login.js";
import Register from "./Register.js";
import AboutUs from "./AboutUs.js";
import image from "./Assets/background.jpg";




function App() {
  return (
    //  <div className=" home py-96 bg-gray-300 bg-scroll bg-cover " style={{ backgroundImage: `url(${image})`}}>
    //  <div className="nav -my-96 py-0.5 bg-opacity-50 bg-green-200 rounded-lg">
    //   <Router>
    //     <nav className="m-5 position:sticky ">
    <div className="home min-h-screen bg-gray-300 bg-cover bg-scroll" style={{ backgroundImage: `url(${image})` }}> 
    <Router> 
      <nav className="fixed top-0 left-0 w-full bg-opacity-90 bg-green-200 py-4 z-10 shadow-md"> 
      <div className="container mx-auto flex justify-between items-center"> 
        <div className="flex space-x-4">
          <Link to="/" className="mx-4 hover:text-blue-500 text-xl hover:font-bold ">Home</Link>
          <Link to="/appointment" className="mx-4 hover:text-blue-500 text-xl hover:font-bold ">Appointment</Link>
          <Link to="/donation" className="mx-4 hover:text-blue-500 text-xl hover:font-bold">Donation</Link>
          <Link to="/login" className="mx-4 hover:text-blue-500 text-xl hover:font-bold">Login</Link>
          <Link to="/aboutus" className="mx-4 hover:text-blue-500 text-xl hover:font-bold">About Us</Link>
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
