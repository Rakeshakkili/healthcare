import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPICall } from "../services/AuthService";

function DoctorLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [medLic, setMedLic] = useState(""); // Medical License Number
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginAPICall(email, password, "doctor", medLic);
            if (response.data.success) {
                navigate("/doctor-dashboard"); 
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
                            value={medLic}
                            onChange={(e) => setMedLic(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-primary doctor">Login</button>
                </form>
            </div>
        </div>
    );
}

export default DoctorLogin;
