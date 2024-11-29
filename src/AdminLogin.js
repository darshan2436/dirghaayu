import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example hard-coded admin credentials
    if (formData.username === "admin" && formData.password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
