import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
                <ul className="navbar-login">
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
