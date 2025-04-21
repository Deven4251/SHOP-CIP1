import React from 'react';
import Header, { Footer } from './shop';
import './contact.css';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contact-page">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="contact-header text-center mb-5">
                                <h1 className="display-4 mb-3 animate-fade-in">Get in Touch</h1>
                                <p className="lead text-muted animate-fade-in-delay">We're here to help and answer any questions you might have.</p>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="contact-card animate-slide-left">
                                        <div className="contact-icon">
                                            <i className="fa fa-location-arrow"></i>
                                        </div>
                                        <h3 className="text-primary">Our Location</h3>
                                        <p className="lead">25°27'09.5"N 82°34'36.7"E</p>
                                        <div className="map-container mt-3">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.1234567890123!2d82.5742822!3d25.4526443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39905b0f0e0e0e0e%3A0x0!2s25%C2%B027'09.5%22N%2082%C2%B034'36.7%22E!5e0!3m2!1sen!2sin!4v1648123456789!5m2!1sen!2sin"
                                                width="100%"
                                                height="300"
                                                style={{border:0}}
                                                allowFullScreen=""
                                                loading="lazy"
                                                title="Location Coordinates"
                                                className="map-frame"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="contact-card animate-slide-right">
                                        <div className="contact-icon">
                                            <i className="fa fa-clock-o"></i>
                                        </div>
                                        <h3 className="text-primary">Business Hours</h3>
                                        <ul className="list-unstyled business-hours table-style">
                                            <li className="mb-2">
                                                <span className="day">Monday - Friday</span>
                                                <span className="time">9:00 AM - 6:00 PM</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="day">Saturday</span>
                                                <span className="time">10:00 AM - 4:00 PM</span>
                                            </li>
                                            <li>
                                                <span className="day">Sunday</span>
                                                <span className="time">Closed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4">
                                    <div className="contact-card animate-slide-right">
                                        <div className="contact-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <h3 className="text-primary">Email Us</h3>
                                        <p className="lead email">devendramishra0204@gmail.com</p>
                                        <a href="mailto:devendramishra0204@gmail.com" className="btn btn-outline-primary mt-3">
                                            <i className="fa fa-envelope me-2"></i>
                                            Send Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;