import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="about">
            <div className="first">
                <Row className="about-section">
                    <Col xs={12} md={6}>
                        <h2>Best Management Practice</h2>
                        <p>Our patients can expect Quality Care, Convenient Locations, Compassionate Providers, Friendly & Knowledgeable Staff, Wide Range of Accepted Health Plans. Please visit our services page for more . . .</p>
                        <Link to="/home"><button className="btn-details">Explore More</button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="https://i.ibb.co/T2PtZd5/clean-campus.jpg" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </div>
            <div className="second">
                <Row className="about-section">
                    <Col xs={12} md={6}>
                        <h2>Emergency Life Support System</h2>
                        <p>Our patients can expect Quality Care, Convenient Locations, Compassionate Providers, Friendly & Knowledgeable Staff, Wide Range of Accepted Health Plans. Please visit our services page for more . . .</p>
                        <Link to="/home"><button className="btn-details">Explore More</button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="https://i.ibb.co/f0g9YHx/icu.jpg" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </div>
            <div className="third">
                <Row className="about-section pt-5 pt-md-0">
                    <Col xs={12} md={6}>
                        <h2>Special Care for Children</h2>
                        <p>Our patients can expect Quality Care, Convenient Locations, Compassionate Providers, Friendly & Knowledgeable Staff, Wide Range of Accepted Health Plans. Please visit our services page for more . . .</p>
                        <Link to="/home"><button className="btn-details">Explore More</button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="https://i.ibb.co/bd9xYq9/childcare.jpg" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </div>
            <div className="fourth">
                <Row className="about-section">
                    <Col xs={12} md={6}>
                        <h2>Ambulance on Emergency</h2>
                        <p>Our patients can expect Quality Care, Convenient Locations, Compassionate Providers, Friendly & Knowledgeable Staff, Wide Range of Accepted Health Plans. Please visit our services page for more . . .</p>
                        <Link to="/home"><button className="btn-details">Explore More</button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="https://i.ibb.co/cY6XQ4d/ambulance.png" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default AboutUs;