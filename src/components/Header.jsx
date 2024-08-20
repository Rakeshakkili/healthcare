import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">HealthCare</Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/patient-login">Patient Login</Link></li>
                        <li><Link to="patient-register">Patient Registration</Link></li>
                        <li><Link to="/doctor-login">Doctor Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
