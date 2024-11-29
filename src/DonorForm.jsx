import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DonorForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    bloodGroup: "",
    location: "",
    phone: "",
  });

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetch hospital locations from the backend
    axios.get("http://localhost:4000/api/doctor/show") // Update API as needed
      .then((response) => {
        const hospitalData = response.data;

        // Extract unique hospitals
        const uniqueHospitals = [
          ...new Set(hospitalData.map((doctor) => doctor.hospital)),
        ];
        setHospitals(uniqueHospitals);
      })
      .catch((error) => {
        console.error("Error fetching hospitals:", error);
      });
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:4000/api/donor/register", formData)
      .then((response) => {
        console.log("Donor registered successfully:", response.data);
        alert("Donor registered successfully!");
        setFormData({
          userName: "",
          bloodGroup: "",
          location: "",
          phone: "",
        }); // Clear the form after successful submission
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Error registering donor:", error.response.data);
          alert(`Error: ${error.response.data.error || "Internal Server Error"}`);
        } else if (error.request) {
          // No response received
          console.error("No response from server:", error.request);
          alert("No response from the server. Please try again later.");
        } else {
          // Other errors
          console.error("Error:", error.message);
          alert("An unexpected error occurred.");
        }
      });
  };
  

  return (
    <div className="bg-gradient-to-r from-green-200 via-blue-400 to-purple-200 py-24">
      <h1 className="text-4xl font-bold mb-4 text-center py-6">Donor Form</h1>

      {/* Donor form content */}
      <form className="flex flex-col items-center -my-10" onSubmit={handleSubmit}>
        <fieldset className="border p-6 rounded-lg w-3/4 border-black">
          <legend className="text-lg font-semibold mb-4">Donor Information</legend>

          {/* Name Input */}
          <label className="block mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="border rounded px-2 py-1 mb-4 w-full"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          {/* Blood Group Input */}
          <label className="block mb-2" htmlFor="bloodGroup">
            Blood Group:
          </label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            className="border rounded px-2 py-1 mb-4 w-full"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Enter your blood group"
            required
          />

          {/* Location Dropdown */}
          <label className="block mb-2" htmlFor="location">
            Choose Nearest Location:
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          >
            <option value="">Select a Hospital</option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>

          {/* Phone Number Input */}
          <label className="block mb-2" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="border rounded px-2 py-1 mb-4 w-full"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default DonorForm;
