import "../../styles/auth.css";
import React, { useState, useRef } from 'react';
import {verifyOTP} from '../../service/encryption';
import emailjs from '@emailjs/browser';
import {saveOTP} from '../../service/encryption';
import { useNavigate, useLocation } from 'react-router-dom';


function EmailVerification() {
    const [isOTPCorrect, setIsOTPCorrect] = useState(true)
    const otpRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    if(location && location.state){
        var { name, email } = location.state
    }

    async function OTPVerification(e){
        e.preventDefault()
        const result = await verifyOTP(otpRef.current.value);
        console.log(result);
        if(result === true){
            navigate("/products")
        }else{
            setIsOTPCorrect(false);
        }
    }

    function resendOTP(e) {
            const OTP = Math.floor(100000 + Math.random() * 900000)
            saveOTP(Math.floor(100000 + Math.random() * 900000));
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
                otp: OTP,
                name: name || "User",
                email: email || "dd@gmail.com"
            }, process.env.REACT_APP_EMAILJS_USER_ID)
                .then((result) => {
                    console.log(result.text);
                    if(result.text == "OK"){
                        alert("Email sent.")
                    }
                }, (error) => {
                    console.log(error.text);
                }
            );
        };

    return (
        <>
            <div className="wrapper">
                <div className="overlay">
                    <h3 className="text-center mb-2">Verify Your Email</h3>
                    <form onSubmit={OTPVerification}>
                        <div className="form-group mb-2">
                            <label htmlFor="otp">OTP</label>
                            <input type="tel" className="form-control" ref={otpRef} id="otp" placeholder="Enter otp" name="otp"/>
                            {!isOTPCorrect && <small className="text-danger">OTP is not correct.</small>}
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className="btn btn-primary">Verify</button>
                            <button type="button" className="btn btn-primary" style={{marginLeft: '5px'}} onClick={resendOTP}>Resend</button>
                        </div>
                        </form>
                    <div className="text-center mt-3">
                        <a href="/" >Home</a>
                    </div>
                </div>
                <video autoPlay muted loop id="myVideo">
                    <source src="https://player.vimeo.com/external/492099718.sd.mp4?s=d6e55adb8f85f7ba1214a467d891e2604cc98a21&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </>
    );
}

export default EmailVerification;