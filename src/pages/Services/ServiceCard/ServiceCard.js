import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { title, img, description, id } = props.service;


    const serviceDetails = () => {

    }

    return (
        <Col>
            <div className="service-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="body-text pe-4">
                        <h3>{title}</h3>
                        <p>{description.slice(0, 95)}....</p>
                        <Link to={`/services/${id}`}><button onClick={serviceDetails} className="btn-details">View Details</button></Link>
                    </div>

                </Card.Body>
            </div>
        </Col>
    );
};

export default ServiceCard;