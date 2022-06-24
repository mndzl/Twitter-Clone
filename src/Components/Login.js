import React from "react";
import './CSS/login.css'
import googleLogo from './Images/googlelogo.png'
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div className="login">
            <div className="login-head">
                <div className="login-head-close">
                    <Link to="/"><i className="fa-solid fa-x"></i></Link>
                </div>
                <div className="login-head-logo">
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div className="login-body">
                <h1>Log in to Twitter</h1>
                <div className="login-options">
                    <div className="login-google">
                        <div className="login-google-logo">
                            <img src={googleLogo} alt="google" />
                        </div>
                        <div className="login-google-text">
                            Login with Google
                        </div>
                    </div>
                </div>
                <div className="login-signup">
                    <span href="#">Don't have an account? <Link to="/signup">Sign up</Link></span>
                </div>
            </div>

        </div>
    )
}