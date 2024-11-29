import React from 'react';

const RequestForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="rounded-md border p-6 bg-gradient-to-b from-white to-gray-100 shadow-md w-full max-w-2xl mx-auto">
        <form className="p-6 rounded border border-gray-300 shadow-md bg-gradient-to-r from-green-200 via-blue-400 to-purple-200">
          <fieldset className="bg-white p-6 rounded-md">
            <h1 className="text-3xl mb-4 text-gray-800">Request Form</h1>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='name'>Name</label>
              <input type="text" id="name" placeholder="Name" className="block w-full p-3 border rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='bloodType'>Required Blood Type</label>
              <input type="text" id="bloodType" placeholder="Required Blood Type" className="block w-full p-3 border rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='contact'>Contact</label>
              <input type="text" id="contact" placeholder="Contact" className="block w-full p-3 border rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='email'>Email</label>
              <input type="email" id="email" placeholder="Email" className="block w-full p-3 border rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='address'>Address</label>
              <input type="text" id="address" placeholder="Address" className="block w-full p-3 border rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='age'>Age</label>
              <input type="number" id="age" placeholder="Age" className="block w-full p-3 border rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-semibold" htmlFor='gender'>Gender</label>
              <select id="gender" className="block w-full p-3 border rounded-md">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="bg-green-500 text-white py-3 px-6 rounded">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
