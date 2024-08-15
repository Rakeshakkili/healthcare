import React from "react";
import '../styles/Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; 2024 HealthCare. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
