import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-warning">
            <div className="container">
                <Link className="navbar-brand" to="/"><strong class="energify">Energify</strong></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" class="texthover">
                            <Link className="nav-link" aria-current="page" to="/"><strong>About Us</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products"><strong>Products</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gaspipeline"><strong>Gas Connection</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><strong>Contact Us</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><strong>Login</strong></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;