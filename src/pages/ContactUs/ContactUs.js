import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ContactUs.css'
import contactImage from '../../images/contact.jpg'

const ContactUs = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className="fw-bold">Contact Us</h2>
                        <div className="contact-form">
                            <form>
                                <input type="text" placeholder="Enter Your Name" required />
                                <br />
                                <input type="email" placeholder="Enter Your Email" required id="" />
                                <br />
                                <textarea placeholder="Describe Your Problem in Details"></textarea>
                                <br />
                                <button className="contact-btn" type="submit">Send Mail</button>
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={contactImage} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactUs;