import './CSS/navbar.css';
import React from 'react';

export default function Navbar(){
    return (
        <div className='navbar'>
            <i className="fa-solid fa-house-chimney-window"></i>
            <i className="fa fa-search"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-regular fa-envelope"></i>
        </div>
    )
}