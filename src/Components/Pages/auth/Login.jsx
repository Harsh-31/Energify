import "../../styles/auth.css";
import React, { useState, useEffect } from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import {GoogleLogin} from '@react-oauth/google';
import { useQuery,gql } from '@apollo/client';
import {saveUser} from '../../service/encryption';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
    const navigate = useNavigate();

    const LOGIN_QUERY = gql`
    query loginUser($a:String!,$b:String!){
        loginuser(email:$a,pass:$b){
            name
            rolecode
        }
    }
    `

    const {error, data, loading, refetch} = useQuery(LOGIN_QUERY, {
        variables: {sd: "email", sg: "password" },
    });

    useEffect(() => {
        if(loading === false && data && data?.loginuser.name !== " User Not found"){
            saveUser(data.loginuser);
            setUser(data.loginuser);
            navigate("/products")
        }
    }, [loading, data])
    

    const login = useGoogleLogin({
        onSuccess: async respose => {
            try{
                const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json();
                console.log(data.data)
            } catch (err) {
                console.log(err)
            }
        }
    });

    function passwordSubmitHandle(e) {
        e.preventDefault();
        refetch({a: e.target.email.value , b: e.target.password.value});
    }

    return (
        <>
            <div className="wrapper">
                <div className="overlay">
                    <h3 className="text-center mb-2">User Login</h3>
                    <form onSubmit={passwordSubmitHandle}>
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password"/>
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="strike"><span>OR</span></div>
                    <div className="text-center mt-2">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                            var decoded = jwt_decode(credentialResponse.credential);
                        }}
                            onError={() => {
                            console.log('Login Failed');
                        }}/>
                    </div>
                    <div className="text-center mt-3">
                        <a href="/register" >Don't have Account? Signup</a>
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
    );
}

export default Login;