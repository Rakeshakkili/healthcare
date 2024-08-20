import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="footer-heading">Get In Touch</h4>
                        <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Road No 3, KPHB colony, Hyderabad</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@healthcare.com</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +91 8639512428</p>
                    </div>
                    <div className="col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="./">Home</a></li>
                            <li><a href="./about">About Us</a></li>
                            <li><a href="./services#">Services</a></li>
                            <li><a href="./contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="footer-heading">Newsletter</h4>
                        <form className="newsletter-form">
                            <input type="text" placeholder="Your Email Address" />
                            <button type="submit">Sign Up</button>
                        </form>
                        <h6 className="social-heading">Follow Us</h6>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <div className="col">
                        <p>&copy; 2024 HealthCare. All rights reserved.</p>
                    </div>
                    <div className="col">
                        <p>Designed by King</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
