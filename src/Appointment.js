import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
    //add phone if possible
  });

  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Fetch doctors and hospitals
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/doctor/show")
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

  // Filter doctors based on selected hospital
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

    // Create an object with the form data to send to the backend
    const appointmentData = {
      fullName: formData.name,
      hospital: formData.hospital,
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
      reason: formData.notes,
    };

    // Make a POST request to the backend to save the appointment
    axios
      .post("http://localhost:4000/api/appointment/registerAppointment", appointmentData)
      .then((response) => {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          hospital: "",
          doctor: "",
          date: "",
          time: "",
          notes: "",
        }); // Clear the form after successful submission
        navigate("/");
      })
      .catch((error) => {
        console.error("Error booking appointment:", error);
        alert("Failed to book the appointment. Please try again.");
      });
  };

  return (
    <div className="bg-gradient-to-r from-green-200 via-blue-400 to-purple-200">
      <div className="appointment-section sm:w-5/6 md:w-4/5 lg:w-3/5 flex flex-col m-auto border rounded-md bg-slate-200 opacity-70 p-5 border-slate-600">
        <h2 className="text-3xl font-bold mb-4 text-center">Book Your Appointment</h2>
        <p className="mb-6 font-semibold underline ">
          Schedule a visit with our expert doctors at your convenience. Select your
          preferred doctor, date, and time below:
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 ">
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
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
