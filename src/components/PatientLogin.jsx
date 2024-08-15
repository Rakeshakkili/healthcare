import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAPICall, loginAPICall } from "../services/AuthService";

function PatientLogin() {
    const [showRegistration, setShowRegistration] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const toggleForm = () => {
        setShowRegistration(!showRegistration);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (showRegistration) {
            // Handle registration using registerAPICall
            try {
                const registerObj = {
                    email,
                    password,
                    fullName,
                    phoneNumber,
                    role: "patient",
                };
                const response = await registerAPICall(registerObj);
                if (response.data.success) {
                    alert("Registration successful!");
                    setShowRegistration(false);
                } else {
                    alert("Registration failed. Please try again.");
                }
            } catch (error) {
                console.error("Registration failed", error);
                alert("Registration failed. Please try again.");
            }
        } else {
            // Handle login using loginAPICall
            try {
                const response = await loginAPICall(email, password);
                if (response.data.success) {
                    // Redirect to doctors list page after successful login
                    navigate("/doctors");
                } else {
                    alert("Login failed. Please check your credentials.");
                }
            } catch (error) {
                console.error("Login failed", error);
                alert("Login failed. Please try again.");
            }
        }
    };

    return (
        <div className="auth-container patient">
            <div className="auth-form patient">
                <h2>{showRegistration ? "Patient Registration" : "Patient Login"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group patient">
                        <label className="patient">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="patient"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group patient">
                        <label className="patient">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="patient"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {showRegistration && (
                        <>
                            <div className="form-group patient">
                                <label className="patient">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="patient"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div className="form-group patient">
                                <label className="patient">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="patient"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    <button type="submit" className="btn-primary patient">
                        {showRegistration ? "Register" : "Login"}
                    </button>
                </form>
                <p className="toggle-link patient" onClick={toggleForm}>
                    {showRegistration
                        ? "Already have an account? Login"
                        : "Don't have an account? Register"}
                </p>
            </div>
        </div>
    );
}

export default PatientLogin;
