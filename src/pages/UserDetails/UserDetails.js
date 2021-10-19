import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './UserDetails.css'

const UserDetails = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="spinner"><Spinner animation="grow" /></div>
    }
    return (
        <div className="user">
            <div className="user-details">
                <Row>
                    <Col className="user-img" md={4} xs={12}>
                        <div >
                            <img src={user.photoURL} alt="user" />
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <h5 className="pt-3 pt-md-0">Hey! {user.displayName}</h5>
                        <span className="user-welcome pt-2">Thank your for choosing us. <span className="fw-bold text-dark">CosGrove</span> is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.</span>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default UserDetails;