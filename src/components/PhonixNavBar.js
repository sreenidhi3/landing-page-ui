import React from 'react';
// import {Link} from 'react-router-dom';
import './PhonixNavBar.css'

export const PhonixNavBar=()=>{
    
    return(
        <nav className="navbar">
            <div className="brand">PHONIX</div>
            <div className="navlinks">
                <ul>
                    <li><button className="nav-item">Login</button></li>
                    <li><button className="nav-item">Sign Up</button></li>
                </ul>
            </div>
        
        </nav>
    )
}