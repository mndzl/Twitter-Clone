import React from "react";
import './CSS/signup.css'
import googleLogo from './Images/googlelogo.png'
import { Link } from "react-router-dom";

export default function SignUp(){
    return (
        <div className="signup">
            <div className="signup-head">
                <div className="signup-head-close">
                    <Link to="/"><i className="fa-solid fa-x"></i></Link>
                </div>
                <div className="signup-head-logo">
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div className="signup-body">
                <h1>Join Twitter today</h1>
                <div className="signup-options">
                    <div className="signup-google">
                        <div className="signup-google-logo">
                            <img src={googleLogo} alt="google" />
                        </div>
                        <div className="signup-google-text">
                            Sign up with Google
                        </div>
                    </div>
                </div>
                <div className="signup-login">
                    <span href="#">Already have an account? <Link to="/login">Login</Link></span>
                </div>
            </div>

        </div>
    )
}