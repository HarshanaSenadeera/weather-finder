import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(prevState => !prevState);
    };

    return (
        <>
            <div className="site-header">
                <div className="container">
                    <Link to="/" className="branding">
                        <img src="images/logo.png" alt="" className="logo" />
                        <div className="logo-type">
                            <h1 className="site-title">Galle weather</h1>
                            <small className="site-description">tagline goes here</small>
                        </div>
                    </Link>

                    {/* Main navigation */}
                    <div className="main-navigation">
                        <button type="button" className="menu-toggle" onClick={toggleMobileNav}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <ul className="menu">
                            <li className={`menu-item ${location.pathname === '/' ? 'current-menu-item' : ''}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/news' ? 'current-menu-item' : ''}`}>
                                <Link to="/news">News</Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/liveCam' ? 'current-menu-item' : ''}`}>
                                <Link to="/liveCam">Live cameras</Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/photos' ? 'current-menu-item' : ''}`}>
                                <Link to="/photos">Photos</Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/contact' ? 'current-menu-item' : ''}`}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile navigation, visible when isMobileNavVisible is true */}
                    {isMobileNavVisible && (
                        <div className="mobile-navigation">
                            <ul className="menu">
                                <li className={`menu-item ${location.pathname === '/' ? 'current-menu-item' : ''}`}>
                                    <Link to="/" onClick={toggleMobileNav}>Home</Link>
                                </li>
                                <li className={`menu-item ${location.pathname === '/news' ? 'current-menu-item' : ''}`}>
                                    <Link to="/news" onClick={toggleMobileNav}>News</Link>
                                </li>
                                <li className={`menu-item ${location.pathname === '/liveCam' ? 'current-menu-item' : ''}`}>
                                    <Link to="/liveCam" onClick={toggleMobileNav}>Live cameras</Link>
                                </li>
                                <li className={`menu-item ${location.pathname === '/photos' ? 'current-menu-item' : ''}`}>
                                    <Link to="/photos" onClick={toggleMobileNav}>Photos</Link>
                                </li>
                                <li className={`menu-item ${location.pathname === '/contact' ? 'current-menu-item' : ''}`}>
                                    <Link to="/contact" onClick={toggleMobileNav}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
