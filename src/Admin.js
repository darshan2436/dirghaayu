import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [appointments, setAppointments] = useState([]);
  const [donors, setDonors] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch Appointments
    axios
      .get("http://localhost:4000/api/appointment/showappointment") // Adjust endpoint as needed
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });

    // Fetch Donors
    axios
      .get("http://localhost:4000/api/donor/show") // Adjust endpoint as needed
      .then((response) => {
        setDonors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching donors:", error);
      });

    // Fetch Requests
    axios
      .get("http://localhost:4000/api/request/show") // Adjust endpoint as needed
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching requests:", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen py-10">
      <div className="container mx-auto bg-slate-200 opacity-90 p-6 rounded-lg shadow-lg">
        
        {/* Appointments Section */}
        <div className="mb-10">
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
                      <td className="py-2 px-4 border">{appointment.fullName}</td>
                      <td className="py-2 px-4 border">{appointment.hospital}</td>
                      <td className="py-2 px-4 border">{appointment.doctor}</td>
                      <td className="py-2 px-4 border">{appointment.date}</td>
                      <td className="py-2 px-4 border">{appointment.time}</td>
                      <td className="py-2 px-4 border">{appointment.reason}</td>
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

        {/* Donor Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Donors</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Blood Group</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Phone</th>
                </tr>
              </thead>
              <tbody>
                {donors.length > 0 ? (
                  donors.map((donor, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 border">{donor.userName}</td>
                      <td className="py-2 px-4 border">{donor.bloodGroup}</td>
                      <td className="py-2 px-4 border">{donor.location}</td>
                      <td className="py-2 px-4 border">{donor.phone}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-2 px-4 text-center">No donors found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Requests Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Requests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">Requester Name</th>
                  <th className="py-2 px-4">Blood Group</th>
                  <th className="py-2 px-4">Contact</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Age</th>
                  <th className="py-2 px-4">Gender</th>
                </tr>
              </thead>
              <tbody>
                {requests.length > 0 ? (
                  requests.map((request, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 border">{request.userName}</td>
                      <td className="py-2 px-4 border">{request.bloodGroup}</td>
                      <td className="py-2 px-4 border">{request.contact}</td>
                      <td className="py-2 px-4 border">{request.email}</td>
                      <td className="py-2 px-4 border">{request.address}</td>
                      <td className="py-2 px-4 border">{request.age}</td>
                      <td className="py-2 px-4 border">{request.gender}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-2 px-4 text-center">No requests found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;
