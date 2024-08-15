import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPICall } from "../services/AuthService"; 

function DoctorLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle login using loginAPICall
        try {
            const loginObj = {
                email,
                password,
                licenseNumber, // Include license number for doctor login
                role: "doctor",
            };
            const response = await loginAPICall(email, password);
            if (response.data.success) {
                navigate("/doctor-dashboard"); // Replace with the appropriate route
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login failed", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="auth-container doctor">
            <div className="auth-form doctor">
                <h2>Doctor Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group doctor">
                        <label className="doctor">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="doctor"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group doctor">
                        <label className="doctor">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="doctor"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group doctor">
                        <label className="doctor">Medical License Number</label>
                        <input
                            type="text"
                            placeholder="Enter your license number"
                            className="doctor"
                            required
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-primary doctor">Login</button>
                </form>
            </div>
        </div>
    );
}

export default DoctorLogin;
