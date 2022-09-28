import React from 'react';
import Slider from '../Inc/Slider';
import Mv from './includes/Mv';
import Footer from '../Inc/Footer';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Slider />
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>Our Company</h4>
                            <div className='underline mb-3'></div>
                            <p align="justify" class='para'>
                                Energify is a British multinational oil and gas company headquartered in London, England. Energify is a public limited company with a primary listing on the London Stock Exchange (LSE) and secondary listings on Euronext Amsterdam and the New York Stock Exchange. It is one of the oil and gas "supermajors" and by revenue and profits is consistently one of the largest companies in the world. Measured by both its own emissions, and the emissions of all the fossil fuels it sells, Energify was the ninth-largest corporate producer of greenhouse gas emissions in the period 1988–2015.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Mv />

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>Our Services</h4>
                            <div className='underline mb-3'></div>
                        </div>


                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <Link to="/about" className='link' >
                                    <div className='card-body'>
                                        <h6 className='text-dark'>Online Fuel Delivery</h6>
                                        <div className='mb-3 sub-underline mb-3'></div>
                                        <p className='text-dark' align="justify" class='para'>
                                            Fuel@Call is an initiative from Energify India Pvt. Ltd. for its customers to order fuel at their doorsteps.
                                            Customers can order fuel through mobile app and get the fuel delivered at their preferred location with convenience of online and pay on delivery options.
                                            The fuel is delivered through mobile bowsers designated by Energify. All transactions on Fuel@Call are encrypted at every stage and completely secure.
                                            The Company- plans to extend the platform to all major industrial and commercial markets by end of FY 2022-23.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <Link to="/GasPipeline" className='text-decoration-none'>
                                    <div className='card-body'>
                                        <h6 className='text-dark'>Gas Pipeline Connection</h6>
                                        <div className='mb-3 sub-underline mb-3'></div>
                                        <p className='text-dark' align="justify" class='para'>
                                            GasCon@Call is an initiative from Energify India Pvt. Ltd. for its customers to reaquest for gas pipeline connection.
                                            Customers can raise request through mobile app and get the gas pipeline connection at their preferred location with convenience of online and pay on delivery options.
                                            The fuel is delivered through mobile bowsers designated by Energify. All transactions on GasC@Call are encrypted at every stage and completely secure.
                                            The Company- plans to extend the platform to all major industrial and commercial markets by end of FY 2022-23.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <Link to="/contact" className='text-decoration-none'>
                                    <div className='card-body'>
                                        <h6 className='text-dark'>Maintenance</h6>
                                        <div className='mb-3 sub-underline mb-3'></div>
                                        <p className='text-dark' align="justify" class='para'>
                                            HSSE: Health, Safety, Security and Environment.
                                            For our company, the most important thing is:
                                            Health, safety, security and environment. So considering
                                            all these values, Energify is always available to providing maintenance
                                            activities related to gas pipeline connection. The meter shall be installed at a proper location and height,
                                            so as to facilitate safe and convenient meter reading and maintenance activities in future.
                                            So if anyone notice that the pipeline connection needs maintenance then kindly contact us.

                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <Footer />
        </div >
    )
}

export default Home;