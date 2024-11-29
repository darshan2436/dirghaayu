import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin({ setIsAdminAuthenticated }) { // Accept the function as a prop
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/api/admin/login", formData);

      // Store token in localStorage
      localStorage.setItem("adminToken", response.data.token);

      // Update the authentication state in the parent
      setIsAdminAuthenticated(true);

      // Redirect to the admin dashboard
      navigate("/admin");
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data.message : "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label htmlFor="userName" className="block font-medium">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
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
            className={`bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
