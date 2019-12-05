import React from 'react';
import logo from '../../assets/images/Logo-Pizza.jpg';
import './Logo.css';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="Logo">
            <img src={logo} alt="Turtle logo"/>
            <span>Turtle Pizza Admin</span>
        </Link>
    );
};

export default Logo;