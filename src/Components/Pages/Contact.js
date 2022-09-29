import React from 'react';
import Footer from '../Inc/Footer';
import { useQuery,gql,useMutation } from '@apollo/client';

function Contact() {

    // const ADD_TICKET = gql`
    // mutation Addticket($id:String!,$cat:String!,$desc:String!,$email:String!){
    //     addticket(newticket:{
    //       ticketId:$id,
    //       category:$cat,
    //       description:$desc,
    //       email:$email
    //     })
    //     {
    //       ticketId
    //       category
    //       description
    //       email
    //     }
    //   }
    // `
    // const [addticket, addProMut] = useMutation(ADD_TICKET);

    // function handlesavetickets(e){
    //     e.preventDefault();
    //     addticket({
    //         variables:{
    //             name: e.target.name.value,
    //             cost: parseInt(e.target.price.value),
    //             quantity: parseInt(e.target.quantity.value),
    //             status: e.target.status.value,
    //             desc: e.target.description.value,
    //             cat: e.target.categoryname.value,
    //             img: e.target.image.value,
    //             measure: e.target.measurement.value
    //         }
    //     })
    //     formRef.current.reset();
    // }

    return (
        <div>
            <section className='py-4 text-center bg-danger'>
                <h1 className='text-white'>Contact Us</h1>
            </section>
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.736490539155!2d77.68626554960012!3d12.92465051936093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1307d8fad1d3%3A0x6f6863c6689c5170!2sShell%20India%20Markets%20Private%20Limited!5e0!3m2!1sen!2sin!4v1664082410331!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <div className='card-body py-2'>

                                    <h4>Mail Your Concerns</h4>
                                    <div className='underline mb-3'></div>
                                    <form>
                                        <label htmlFor="">Name</label>
                                        <input type="text" placeholder='Enter Your Name' class="form-control mb-3" name="name" />
                                        <label htmlFor="">Email</label>
                                        <input type="text" placeholder='Enter Your email id' class="form-control mb-3" name="email"/>
                                        <label htmlFor="">Address</label>
                                        <input type="text" placeholder='Enter Your Address' class="form-control mb-3" name="address"/>
                                        <label htmlFor="">Message</label>
                                        <textarea rows="2" className='form-control mb-3' name="message"></textarea>
                                        <button type="submit" className='btn btn-primary w-100'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Contact;