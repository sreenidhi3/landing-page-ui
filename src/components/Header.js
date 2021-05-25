import React from 'react';
import {Link} from 'react-router-dom';
import landingpage from '.././landing-page.png';
import './header.css';

export const Header = ()=>{
    return(
        <section className="header-hero">
            <div className="header-links">
                <ul> 
                    <li className="card"><h3>Play</h3></li>
                    <li className="card"><h3>Learn</h3></li>
                    <li className="card"><h3>Chat</h3></li>
                </ul>
            </div>
            <div className="header-brand-image animated">
                    <img src={landingpage} className="animated"></img>

            </div>
        </section>
    )
}