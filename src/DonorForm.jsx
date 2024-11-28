import React, { useState } from 'react';
import RequestForm from './RequestForm';

function DonorForm() {
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
      {/* Buttons to toggle forms */}
      <div className="flex justify-center mt-10">
        <button onClick={handleDonorClick} className="bg-blue-500 text-white py-2 px-4 rounded">
          Donor
        </button>
        <button onClick={handleRequestClick} className="bg-green-500 text-white py-2 px-4 rounded ml-4">
          Request
        </button>
      </div>

      {/* Conditional rendering of forms */}
      <div className="mt-10">
        {showDonorForm && (
          <div>
            <h2 className="text-xl font-bold mb-4">Donor Form</h2>
            {/* Donor form content */}
            <form>
              <label className="block mb-2" htmlFor=''>Name:</label>
              <input type="text" className="border rounded px-2 py-1 mb-4 w-full" placeholder="Enter your name" />

              <label className="block mb-2" htmlFor=''>Blood Group:</label>
              <input type="text" className="border rounded px-2 py-1 mb-4 w-full" placeholder="Enter your blood group" />

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        )}
        {showRequestForm && RequestForm}
      </div>
    </div>
  );
}

export default DonorForm;
