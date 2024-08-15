import React from 'react';

const doctors = [
    { id: 1, name: 'Dr. Sameer', specialization: 'Dermatologist', availability: '9 AM - 11 AM' },
    { id: 2, name: 'Dr. Rakesh', specialization: 'Cardiologist', availability: '10 AM - 12 AM' },
    { id: 3, name: 'Dr. Mani', specialization: 'Audiologists', availability: '9 AM - 2 PM' },
    { id: 4, name: 'Dr. Freekanth', specialization: 'Gynecologist', availability: '10 AM - 5 PM' },
    { id: 5, name: 'Dr. King', specialization: 'Psychiatrists', availability: '9 AM - 5 PM' },
    { id: 6, name: 'Dr. Demon', specialization: 'Orthopedic Surgeon', availability: '9 AM - 3 PM' },

];

function DoctorsList() {
    return (
        <div className="doctors-list">
            <h2>Doctors Available</h2>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <h3>{doctor.name}</h3>
                        <p>Specialization: {doctor.specialization}</p>
                        <p>Availability: {doctor.availability}</p>
                        <button>Book Appointment</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DoctorsList;
