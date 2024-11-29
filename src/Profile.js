import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ handleLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout(); // Call the logout handler from App
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="profile-page">
      <h1>Welcome to Your Profile</h1>
      <button
        onClick={logout}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
