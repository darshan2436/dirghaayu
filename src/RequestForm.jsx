import React from 'react';

const RequestForm = () =>{
  return (
    <form className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Request Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Name</label>
        <input type="text" placeholder="Name" className="block w-full p-2 border"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Required Blood Type</label>
        <input type="text" placeholder="Required Blood Type" className="block w-full p-2 border"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Contact</label>
        <input type="text" placeholder="Contact" className="block w-full p-2 border"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Email</label>
        <input type="email" placeholder="Email" className="block w-full p-2 border"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Address</label>
        <input type="text" placeholder="Address" className="block w-full p-2 border"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Age</label>
        <input type="number" placeholder="Age" className="block w-full p-2 border"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor=''>Gender</label>
        <select className="block w-full p-2 border">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
}

export default RequestForm;
