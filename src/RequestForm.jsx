import React from 'react';

const RequestForm = () =>{
  return (
    <form className="p-6 rounded shadow-md flex justify-center bg-gradient-to-r from-green-200 via-blue-400 to-purple-200">
      <fieldset>
      <h1 className="text-2xl mb-4 ">Request Form</h1>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Name</label>
        <input type="text" placeholder="Name" className="block w-full p-2 border rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Required Blood Type</label>
        <input type="text" placeholder="Required Blood Type" className="block w-full p-2 border rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Contact</label>
        <input type="text" placeholder="Contact" className="block w-full p-2 border rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Email</label>
        <input type="email" placeholder="Email" className="block w-full p-2 border rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Address</label>
        <input type="text" placeholder="Address" className="block w-full p-2 border rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Age</label>
        <input type="number" placeholder="Age" className="block w-full p-2 border rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold" htmlFor=''>Gender</label>
        <select className="block w-full p-2 border rounded-md">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
      </fieldset>
    </form>
  );
}

export default RequestForm;
