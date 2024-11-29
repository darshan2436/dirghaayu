import React, { useState, useEffect } from "react";
import axios from "axios";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios.get("http://localhost:4000/api/doctor/show")
      .then((response) => {
        const doctorsData = response.data;

        // Extract unique hospitals from the doctors' data
        const uniqueHospitals = [
          ...new Set(doctorsData.map((doctor) => doctor.hospital)),
        ];
        setHospitals(uniqueHospitals);
        setDoctors(doctorsData);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  // Filter doctors based on the selected hospital
  useEffect(() => {
    if (formData.hospital) {
      const filtered = doctors.filter(
        (doctor) => doctor.hospital === formData.hospital
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors([]);
    }
  }, [formData.hospital, doctors]);

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

  return (
    <div className="appointment-section sm:w-5/6 md:w-4/5 lg:w-3/5 flex flex-col m-auto border rounded-md shadow-slate-500 p-5">
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
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="hospital" className="block font-medium">
            Choose Hospital:
          </label>
          <select
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          >
            <option value="">Select a Hospital</option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="doctor" className="block font-medium">
            Choose Doctor:
          </label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          >
            <option value="">Select a Doctor</option>
            {filteredDoctors.map((doctor) => (
              <option key={doctor._id} value={doctor.doctorName}>
                {doctor.doctorName} - {doctor.specialist}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block font-medium">
            Appointment Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-medium">
            Select Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="notes" className="block font-medium">
            Reason for Visit (optional):
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Describe your symptoms..."
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;
