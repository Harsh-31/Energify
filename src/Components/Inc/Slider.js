import React from 'react';
import Slider1 from '../Images/slider.jpg';
import Slider2 from '../Images/slider2.jpg';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" >
                <div className="carousel-item active" >
                    <img src={Slider1} className="d-block w-100" height="400px" alt="Slider 1"/>
                </div>
                <div className="carousel-item" >
                    <img src={Slider2} className="d-block w-100" height="400px" alt="Slider 2"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;