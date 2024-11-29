import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch the list of appointments from the backend
    axios.get("http://localhost:4000/api/appointments")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen py-10">
      <div className="container mx-auto bg-slate-200 opacity-90 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Appointments Booked</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Hospital</th>
                <th className="py-2 px-4">Doctor</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-2 px-4 border">{appointment.name}</td>
                    <td className="py-2 px-4 border">{appointment.hospital}</td>
                    <td className="py-2 px-4 border">{appointment.doctor}</td>
                    <td className="py-2 px-4 border">{appointment.date}</td>
                    <td className="py-2 px-4 border">{appointment.time}</td>
                    <td className="py-2 px-4 border">{appointment.notes}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-2 px-4 text-center">No appointments booked</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
