import React, { useState } from "react";

function Appointment(){
    const [formData, setFormData] = useState({
        name: "",
        hospital: "",
        doctor: "",
        date: "",
        time: "",
        notes: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Details:", formData);
        alert("Appointment Booked Successfully!");
        // Add logic to save data to the backend or database
      };

    return(
    <div className="appointment-section w-3/5 flex flex-col m-auto border rounded-md shadow-slate-500  p-5">
        <h2 className="text-3xl font-bold mb-4 text-center">Book Your Appointment</h2>
        <p className="mb-6">
            Schedule a visit with our expert doctors at your convenience. Select your
            preferred doctor, date, and time below:
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="name" className="block font-medium">
                Full Name:
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="border border-gray-300 p-2 w-full rounded" required
            />
            </div>

            <div>
            <label htmlFor="doctor" className="block font-medium">
                Choose Hospital:
            </label>
            <select id="doctor" name="doctor" value={formData.hospital} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required >
                <option value="">Select a Hospital</option>
                <option value="Civil Hospital">
                Civil Hospital
                </option>
                <option value="Patan Hospital">
                Patan Hospital
                </option>
            </select>
            </div>

            <div>
            <label htmlFor="doctor" className="block font-medium">
                Choose Doctor:
            </label>
            <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required >
                <option value="">Select a doctor</option>
                <option value="Dr. Anuj Jung Rayamajhi - Pain Management">
                Dr. Anuj Jung Rayamajhi - Pain Management
                </option>
                <option value="PROF.DR.RAM KISHOR SAH - Cardiologist">
                PROF.DR.RAM KISHOR SAH - Cardiologist
                </option>
            </select>
            </div>

            <div>
            <label htmlFor="date" className="block font-medium">
                Appointment Date:
            </label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required/>
            </div>

            <div>
            <label htmlFor="time" className="block font-medium">
                Select Time:
            </label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required/>
            </div>

            <div>
            <label htmlFor="notes" className="block font-medium">
                Reason for Visit (optional):
            </label>
            <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Describe your symptoms..." className="border border-gray-300 p-2 w-full rounded" />
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Book Appointment</button>
        </form>
    </div>
    )
}

export default Appointment