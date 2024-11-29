import React from 'react';
import { useNavigate } from 'react-router-dom';

function Donation() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-green-200 via-blue-400 to-purple-200 bg-opacity-90 py-11 mx-auto max-w-3xl rounded-2xl shadow-xl text-center space-y-6 h-96">
      <h1 className="text-2xl font-bold text-gray-800">Choose an Action</h1>
      <p className='font-bold'>Select an option:</p>
      <div className="space-x-4" role="group" aria-label="Donation options">
        <button
          className="px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          onClick={() => navigate('/donorform')}
        >
          Donate
        </button>
        <button
          className="px-6 py-2 text-white bg-green-600 rounded-md shadow hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
          onClick={() => navigate('/requestform')}
        >
          Request
        </button>
      </div>
    </div>
  );
}

export default Donation;
