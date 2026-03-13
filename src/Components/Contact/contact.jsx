import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiX } from 'react-icons/fi';
import SocialIcons from '../Social-icons/SocialIcons';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: '' });

    // Auto-hide toast after 5 seconds
    useEffect(() => {
        if (showToast.show) {
            const timer = setTimeout(() => {
                setShowToast({ show: false, message: '', type: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast.show]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace the access_key with your own from Web3Forms
        const payload = {
            ...formData,
            access_key: "dbaddbf5-0bd0-41e2-9921-07b0821e6e30" 
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setShowToast({ show: true, message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setShowToast({ show: true, message: 'Something went wrong. Please try again later.', type: 'error' });
            }
        } catch (error) {
            setShowToast({ show: true, message: 'Network error. Please try again later.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">
                    Let's Work <span className="title-gradient">Together</span>
                </h2>
                <p className="section-description">
                    Have a project in mind or just want to say hi? Let's discuss your ideas and bring your vision to life.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info-wrapper">
                    <div className="contact-info-cards">
                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <FiMail className="info-icon" />
                            </div>
                            <div className="info-content">
                                <h3>Email Me</h3>
                                <p>maffan2830@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <FiPhone className="info-icon" />
                            </div>
                            <div className="info-content">
                                <h3>Call Me</h3>
                                <p>+92 3703298272</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <FiMapPin className="info-icon" />
                            </div>
                            <div className="info-content">
                                <h3>Location</h3>
                                <p>Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <h3>Connect with me</h3>
                        <SocialIcons />
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="How can I help you?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="submit-btn-wrapper">
                            <button type="submit" className="submit-btn hover-dev-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="btn-text">Sending...</span>
                                ) : (
                                    <>
                                        <span className="btn-text">Send Message</span>
                                        <span className="btn-icon">
                                            <FiSend />
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Custom Fancy Toast Notification */}
            <div className={`custom-toast ${showToast.show ? 'show' : ''} ${showToast.type}`}>
                <div className="toast-content">
                    {showToast.type === 'success' ? (
                        <FiCheckCircle className="toast-icon success-icon" />
                    ) : (
                        <FiX className="toast-icon error-icon" />
                    )}
                    <div className="toast-message">
                        <h4>{showToast.type === 'success' ? 'Success!' : 'Error!'}</h4>
                        <p>{showToast.message}</p>
                    </div>
                    <button className="toast-close" onClick={() => setShowToast({ show: false, message: '', type: '' })}>
                        <FiX />
                    </button>
                </div>
                <div className="toast-progress-bar"></div>
            </div>
        </section>
    );
};

export default Contact;
