import React from 'react';
import Slider1 from '../Images/slider.jpg';
import Slider2 from '../Images/slider2.jpg';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Slider1} class="d-block w-100" height="400px" alt="Slider 1"/>
                </div>
                <div class="carousel-item">
                    <img src={Slider2} class="d-block w-100" height="400px" alt="Slider 2"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;