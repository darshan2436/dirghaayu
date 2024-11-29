import React, { useState } from "react";
import axios from "axios";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    bloodType: "",
    contact: "",
    email: "",
    address: "",
    age: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/request/register",
        formData
      );
      setMessage("Request successfully submitted!");
      setFormData({
        userNameame: "",
        bloodType: "",
        contact: "",
        email: "",
        address: "",
        age: "",
        gender: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      setMessage("Failed to submit the request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="rounded-md border p-6 bg-gradient-to-b from-white to-gray-100 shadow-md w-full max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded border border-gray-300 shadow-md bg-gradient-to-r from-green-200 via-blue-400 to-purple-200"
        >
          <fieldset className="bg-white p-6 rounded-md">
            <h1 className="text-3xl mb-4 text-gray-800">Request Form</h1>
            {message && (
              <p
                className={`mb-4 ${
                  message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 font-semibold"
                htmlFor="bloodType"
              >
                Required Blood Type
              </label>
              <input
                type="text"
                id="bloodType"
                placeholder="Required Blood Type"
                value={formData.bloodType}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 font-semibold"
                htmlFor="contact"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 font-semibold"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 font-semibold"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-6 rounded"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
