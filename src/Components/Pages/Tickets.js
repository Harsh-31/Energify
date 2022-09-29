import React, { useState } from 'react';

 

const Tickets = () => {

    const [isApproved, setIsApproved] = useState(false);

    const Tick = [

        {

            "Ticket Number": 1,

            "Name": "Harsh Sharma",

            "Email": "harsh@gmail.com",

            "Address": "371/8 Sector 10 A Gurgaon",

            "Message": "Need maintenance activities"

        }

    ];

 

    return (

        <div className="users">

            {Tick.map((user) => (

                <>

                    <div className='col-md-8 ticket-card my-3 mx-2'>

                        <div className='card shadow'>

                            <div className='card-body'>

                                <h6 className='text-dark'>Ticket Number {user['Ticket Number']}</h6>

                                <div className="user ticket-details">Name: {user.Name}</div>

                                <div className="user ticket-details">Email Id: {user.Email}</div>

                                <div className="user ticket-details">Address: {user.Address}</div>

                                <div className="user ticket-details">Message: {user.Message}</div>

                            </div>

                            <button type="button" id="btnOUs" className={`btn ${isApproved ? "btn-success" : "btn-primary"}`} onClick={e => setIsApproved(true)}>{ isApproved ? "Approved" : "Not Approved"}</button>

                        </div>

                    </div>

                </>

            ))}

        </div>

    );

};

 

export default Tickets;