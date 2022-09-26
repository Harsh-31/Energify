import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='bg-dark text-white py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6 align="center">Company Information</h6>
                        <hr />
                        <p align="justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            sit amet..", comes from a line in section 1.10.32.

                        </p>
                    </div>

                    <div className='col-md-4'>
                        <h6 align="center">Quick Links</h6>
                        <hr />
                        <div align="center" ><Link to="/" className='text-decoration-none'>Home</Link></div>
                        <div align="center"><Link to="/about" className='text-decoration-none'>Fuel Delivery</Link></div>
                        <div align="center"><Link to="/gaspipeline" className='text-decoration-none'>Gas Pipeline Connection</Link></div>
                        <div align="center"><Link to="/contact" className='text-decoration-none'>Contact Us</Link></div>

                    </div>

                    <div className='col-md-4'>
                        <h6 align="center">Contact Information</h6>
                        <hr />
                        <div><p align="left">MZ Ecoworld Campus 4A & 4B, Marathahalli - Sarjapur Outer Ring Rd, Bengaluru, Karnataka 560103</p></div>
                        <div><p>(M): 9897389948</p></div>
                        <div><p>(M): 9897389948</p></div>
                        <div><p>Email Id: contact@energify.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;