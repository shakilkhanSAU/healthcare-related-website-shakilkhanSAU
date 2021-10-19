import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import './SingleService.css'

const SingleService = () => {
    const { serviceId } = useParams();
    const { services } = useServices();
    const findService = services.find(service => service.id === serviceId)

    return (
        <div className="container pt-4 pb-5">
            <Row>
                <Col lg={6} xs={12} className="mx-auto px-2">
                    <img src={findService?.img} className="img-fluid" alt="city scan" />
                </Col>
                <Col lg={6} xs={12}>
                    <div className="service-info">
                        <h2 className="pt-4">{findService?.title}</h2>
                        <hr />
                        <p>{findService?.description}</p>
                    </div>
                    <button className="btn-get-service">Get Service</button>
                </Col>
            </Row>
        </div>
    );
};

export default SingleService;