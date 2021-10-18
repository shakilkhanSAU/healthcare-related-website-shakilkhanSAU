import React from 'react';
import { Col, Row } from 'react-bootstrap';
import backphoto from '../../../images/login.jpg';
import google from '../../../images/google.png'
import './Login.css'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();

    const handleSingInGoogle = () => {
        signInWithGoogle();
    }
    return (
        <div className="login py-5">
            <Row className="container">
                <Col className="login-form mx-auto" sm={6}>
                    <div>
                        <input type="text" placeholder="Enter Your Name" />
                        <br />
                        <input type="email" name="" placeholder="Enter Your Email" id="" />
                        <br />
                        <input type="password" name="" placeholder="Enter Your Password" id="" />
                        <br />
                        <button className="login-btn" type="submit">Log In</button>
                        <p className="text-center my-3">or</p>

                        <button onClick={handleSingInGoogle} className="google-btn">
                            <img src={google} alt="" />
                            Sign in with Google
                        </button>
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={backphoto} className="img-fluid" alt="" />
                </Col>
            </Row>
        </div >
    );
};

export default Login;