import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [drop, setDrop] = useState(false);
    const user = useContext(UserContext);

    useEffect(() => {
    
    }, [user])
    

    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-warning">
            <div className="container">
                <Link className="navbar-brand" to="/"><strong className="energify">Energify</strong></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item texthover">
                            <Link className="nav-link" aria-current="page" to="/"><strong>About Us</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products"><strong>Products</strong></Link>
                        </li>
                        {user && user?.rolecode === 0 ? <li className="nav-item">
                            <Link className="nav-link" to="/tickets"><strong>Tickets</strong></Link>
                        </li> : <li className="nav-item">
                            <Link className="nav-link" to="/gaspipeline"><strong>Gas Connection</strong></Link>
                        </li>}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><strong>Contact Us</strong></Link>
                        </li>
                        {user && user?.name ? 
                        <li className="nav-item dropdown" onClick={e=> setDrop(!drop)}>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.name}
                                </a>
                                <div className={`dropdown-menu ${drop &&" d-block"}`} aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="" onClick={e=> {localStorage.clear(); navigate("/")} }>Logout</a>
                                </div>
                            </li>:
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><strong>Login</strong></Link>
                        </li> 
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;