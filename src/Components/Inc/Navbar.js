import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-warning">
            <div className="container">
                <Link className="navbar-brand" to ="/"><strong>Energify</strong></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to ="/"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><strong>Fuel Delivery</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gaspipeline"><strong>Gas Pipeline Connection</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><strong>Contact Us</strong></Link>
                        </li>
                    </ul>
                </div>
                {/*<button classNamename="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                   </button>*/}
            </div>
        </nav>
    )
}

export default Navbar;