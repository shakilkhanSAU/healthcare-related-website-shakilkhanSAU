import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleSpecialist.css'

const SingleSpecialist = (props) => {
    const { name, image, about } = props.doctor;
    return (
        <Col>
            <Card>
                <img src={image} alt="" className="img-fluid" />
                <Card.Body className="cart-body">
                    <h3>{name}</h3>
                    <p>{about}</p>
                    <button className="btn-details">Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleSpecialist;