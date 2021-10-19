import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import backphoto from '../../../images/login.jpg';
import google from '../../../images/google.png'
import './Login.css'
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIslogin] = useState(false);

    const { signInWithGoogle, createUser, logInUser, setUser, setIsLoading, varifyEmail } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory();

    // get input value of input field 
    const getName = (e) => {
        const name = e.target.value
        setName(name);
    }
    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    // all google signin funtionality here
    const handleSingInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // email password registration here
    const handleCreateUser = (e) => {
        e.preventDefault();
        createUser(email, password)
            .then((result) => {
                // Signed in 
                result.user.displayName = name;
                setUser(result.user)
                console.log(result.user)
                varifyEmail();
                history.push(redirect_uri)
                setError('')
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        e.target.reset();
    }
    // login existing user
    const handleLogin = (e) => {
        e.preventDefault();
        logInUser(email, password)
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        e.target.reset();
    }

    // toggle form
    const toggleForm = (e) => {
        const isLogin = e.target.checked;
        setIslogin(isLogin)
    }
    const createNew = (e) => {
        setIslogin(false)
    }

    return (
        <div className="login py-5">
            <Row className="container">
                <Col className="login-form mx-auto" sm={6}>
                    <div className="py-4 w-100">
                        {
                            isLogin ? <form onSubmit={handleLogin}>
                                <input onBlur={getEmail} type="email" placeholder="Enter Your Email" id="" required />
                                <br />
                                <input onBlur={getPassword} type="password" placeholder="Enter Your Password" id="" required />
                                <br />
                                <button className="login-btn" type="submit">Sign in</button>
                                <small className="error-txt text-danger">{error.message}</small>
                                <div className="text-center mt-2">
                                    <input onClick={createNew} type="checkbox" id="form-toggler" className="d-none" />
                                    <label className="toggler" htmlFor="form-toggler">Create New Account!</label>
                                </div>
                            </form> :
                                <form onSubmit={handleCreateUser}>
                                    <input onBlur={getName} type="text" placeholder="Enter Your Name" required />
                                    <br />
                                    <input onBlur={getEmail} type="email" placeholder="Enter Your Email" required id="" />
                                    <br />
                                    <input onBlur={getPassword} type="password" placeholder="Enter Your Password" required id="" />
                                    <br />
                                    <button className="login-btn" type="submit">Create Account</button>
                                    <small className="error-txt text-danger">{error.message}</small>
                                    <div className="text-center mt-2">
                                        <input onClick={toggleForm} type="checkbox" id="form-toggler" className="d-none" />
                                        <label className="toggler" htmlFor="form-toggler">Already have an account?</label>
                                    </div>
                                </form>
                        }
                        <p className="text-center my-3">or</p>

                        <button onClick={handleSingInGoogle} className="google-btn">
                            <img src={google} alt="" />
                            Sign in with Google
                        </button>
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={backphoto} className="img-fluid mt-md-5" alt="" />
                </Col>
            </Row>
        </div >
    );
};

export default Login;