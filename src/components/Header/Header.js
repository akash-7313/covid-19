import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                    <input className="search" type="text" placeholder="type something to search" />
                </div>
                <nav className="navbar">
                    <a href="/home">Home</a>
                    <a href="/doctor">Find a Doctor</a>
                    <a href="/covid">Covid Unit</a>
                    <a href="/about">About us</a>
                </nav>
            </div>
            <div className="header-info">
                <h1>Welcome to Memorial Hospital</h1>
                <p><small>Let's know about our covid-19 soldiers (Doctors) !!!</small></p>
                <h3>Total dedicated covid-19 Doctors: 12</h3>
            </div>
        </div>
    );
};

export default Header;