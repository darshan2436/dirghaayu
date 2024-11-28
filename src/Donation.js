import React from 'react';
import { useNavigate } from 'react-router-dom';

function Donation(){
    const navigate = useNavigate()
    return(
        
        <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl text-center space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Choose an Action</h1>
    
            
            <div className="space-y-2">
                <label htmlFor="organ-donation"  className="block text-lg font-medium text-gray-700">
                    Select an Organ for Donation:
                </label>
                <select id="organ-donation" className="w-75 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none mx-auto">
                    <option value="" disabled defaultValue={1}>Select an option</option>
                    <option value="blood">Blood</option>
                    <option value="eye">Eye</option>
                    <option value="kidney">Kidney</option>
                    <option value="liver">Liver</option>
                    <option value="heart">Heart</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="space-x-4">
                
                <button className="px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onClick={()=>{navigate("/donorform")}}>
                    Donate
                </button>
                
                <button className="px-6 py-2 text-white bg-green-600 rounded-md shadow hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                onClick={()=>{navigate("/requestform")}}>
                    Request
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
        </div>
        </div>
    )
}

export default Donation