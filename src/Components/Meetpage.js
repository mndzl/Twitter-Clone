import React from "react";
import './CSS/meetpage.css'
import { Link } from "react-router-dom";

export default function Meetpage(){
    return (
        <div className="meetpage">
            <div className="meetpage-main">
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="meetpage-account">
                <div className="meetpage-login">
                    <Link to="/"><button>Log in</button></Link>
                </div>
                <div className="meetpage-register">
                    <Link to="/"><button>Sign up</button></Link>
                </div>
            </div>
        </div>
    );
}