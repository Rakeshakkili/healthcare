import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAPICall, loginAPICall } from "../services/AuthService";

//const API_BASE_URL = "http://localhost:8080";

function PatientLogin() {
    const [showRegistration, setShowRegistration] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); 
    const [number, setNumber] = useState(""); 
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
                    name, 
                    number, 
                };
                const response = await registerAPICall(registerObj, "patient");
                alert("Registration successful!");
                setShowRegistration(false);
            } catch (error) {
                console.error("Registration failed", error);
                alert("Registration failed. Please try again.");
            }
        } else {
            // Handle login using loginAPICall
            try {
                const response = await loginAPICall(email, password, "patient");
                if (response.data.success) {
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
                                <label className="patient">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="patient"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group patient">
                                <label className="patient">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="patient"
                                    required
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
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
