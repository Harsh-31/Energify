import React from 'react';
import Slider from '../Inc/Slider';
import Mv from './includes/Mv';
import Footer from '../Inc/Footer';

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
                            <p align="justify">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

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

                        <div className='col-md-6'>
                            <div className='card shadow'>
                                <div className='card-body'>

                                    <h6>Online Fuel Delivery</h6>
                                    <div className='mb-3 sub-underline mb-3'></div>
                                    <p align="justify">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock, a Latin professor
                                        at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                        Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                        sit amet..", comes from a line in section 1.10.32.

                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='col-md-6'>
                            <div className='card shadow'>
                                <div className='card-body'>

                                    <h6>Gas Pipeline Connection</h6>
                                    <div className='mb-3 sub-underline mb-3'></div>
                                    <p align="justify">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock, a Latin professor
                                        at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                        Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                        sit amet..", comes from a line in section 1.10.32.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <Footer/>
        </div >
    )
}

export default Home;