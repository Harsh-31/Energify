import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='bg-dark text-white py-5 navCol'>
            <div className='container' >
                <div className='row'>
                    <div className='col-md-4'>
                        <h6 className='text-center'>Company Information</h6>
                        <hr />
                        <p align="justify">
                        Energify is a British multinational oil and gas company headquartered in London, England. Energify is a public limited company with a primary listing on the London Stock Exchange (LSE) and secondary listings on Euronext Amsterdam and the New York Stock Exchange. It is one of the oil and gas "supermajors" and by revenue and profits is consistently one of the largest companies in the world.
                        </p>
                    </div>

                    <div className='col-md-4'>
                        <h6 className='text-center'>Quick Links</h6>
                        <hr />
                        <div className='text-hover text-center'><Link to="/" className='text-decoration-none text-light'>Home</Link></div>
                        <div className='text-center'><Link to="/about" className='text-decoration-none text-light'>Fuel Delivery</Link></div>
                        <div className='text-center'><Link to="/gaspipeline" className='text-decoration-none text-light'>Gas Pipeline Connection</Link></div>
                        <div className='text-center'><Link to="/contact" className='text-decoration-none text-light'>Contact Us</Link></div>

                    </div>

                    <div className='col-md-4'>
                        <h6 className='text-center'>Contact Information</h6>
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