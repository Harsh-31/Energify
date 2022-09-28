import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import {saveOTP, encryptPassword} from '../../service/encryption';
import { useNavigate } from 'react-router-dom';
import{useMutation,gql} from '@apollo/client';

const Signup = () => {

    // const SIGNUP_MUT = gql`
    // mutation registeruser($email:String!, $password:String!,$name:String!,$address:String!,$rolecode:Int!)
    // `
    // const [registeruser,{error}] = useMutation(SIGNUP_MUT);

    




    const [dataValidation, setDataValidation] = useState({
        name: "",
        address: "",
        email: "",
        password: "",
        conpassword: "",
        phone: "",
        address: ""
    });

    const navigate = useNavigate()

    async function sendEmail(e) {
        e.preventDefault();
        const validateResult = {
            name: e.target.name.value ? (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(e.target.name.value)) ? "User name shouldn't contain special characters or numbers." : "" : "User name is required.",
            address: e.target.address.value ? "" : "Address is required.",
            email: e.target.email.value ? (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.email.value)) ? "Email should be valid." : "" : "Email is required.",
            password: e.target.password.value ? "" : "Password is required.",
            conpassword: e.target.conpassword.value ? (e.target.conpassword.value === e.target.password.value) ? "" : "Password and confirm password should match." : "Password is required.",
            phone: e.target.phone.value ? (/\D/.test(e.target.phone.value) || e.target.phone.value.length !== 10) ? "Phone number should be valid." : "" : "Phone is required.",
            address: e.target.address.value ? "" : "Address is required."
        }
        setDataValidation(validateResult)
        if(!validateResult.name && !validateResult.address && !validateResult.email && !validateResult.password && !validateResult.conpassword && !validateResult.phone && !validateResult.address){
            const encryptPass = await encryptPassword(e.target.password.value)
            const OTP = Math.floor(100000 + Math.random() * 900000)
            saveOTP(OTP);
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
                otp: OTP,
                name: e.target.name.value,
                email: e.target.email.value
            }, process.env.REACT_APP_EMAILJS_USER_ID)
                .then((result) => {
                    console.log(result.text);
                    if(result.text == "OK"){
                        navigate("/verify-email", { state: { name: e.target.name.value, email: e.target.email.value } })
                    }
                }, (error) => {
                    console.log(error.text);
                }
            );

            console.log(encryptPassword)
            // registeruser({
            //     variables:{
            //         email: "e.target.email.value",
            //         name: "e.target.name.value",
            //         password: `${encryptPassword}`,
            //         address: "e.target.address.value"
            //     }
            // })
        }
    };

  return (<>
    <div className="wrapper">
        <div className="overlay">
            <h3 className="text-center mb-2">User Signup</h3>
        <form onSubmit={sendEmail}>
            <div className="form-group mb-2">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" name="name"/>
                {dataValidation.name && <small className="text-danger">{dataValidation.name}</small>}
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                {dataValidation.email && <small className="text-danger">{dataValidation.email}</small>}
            </div>
            <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
                {dataValidation.password && <small className="text-danger">{dataValidation.password}</small>}
            </div>
            <div className="form-group mb-2">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" name="conpassword" />
                {dataValidation.conpassword && <small className="text-danger">{dataValidation.conpassword}</small>}
            </div>
            <div className="form-group mb-2">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone" name="phone"/>
                {dataValidation.phone && <small className="text-danger">{dataValidation.phone}</small>}
            </div>
            <div className="form-group mb-2">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter address" name="address"/>
                {dataValidation.address && <small className="text-danger">{dataValidation.address}</small>}
            </div>
            <div className="text-center mt-2">
                <button type="submit" className="btn btn-primary">Join Energify</button>
            </div>
        </form>
        <div className="text-center mt-3">
            <a href="/login" >Already have Account? Login</a>
            <br/>
            <a href="/" >Home</a>
        </div>
        </div>
        <video autoPlay muted loop id="myVideo">
            <source src="https://player.vimeo.com/external/492099718.sd.mp4?s=d6e55adb8f85f7ba1214a467d891e2604cc98a21&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>
    </div>
</>
  )
}

export default Signup