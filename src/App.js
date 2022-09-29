import React, {useState, createContext, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate} from 'react-router-dom';

import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Login from './Components/Pages/auth/Login';
import Signup from './Components/Pages/auth/Signup';
import Navbar from './Components/Inc/Navbar.js';
import GasPipeline from './Components/Pages/GasPipleine.js';
import ProductList from './Components/Pages/catalouge/ProductList';
import EmailVerification from './Components/Pages/auth/EmailVerification';
import {getUser} from './Components/service/encryption';
import Checkout from './Components/Pages/Checkout';
import Tickets from './Components/Pages/Tickets';
export const UserContext = createContext({})

function App() {
  const [user, setUser] = useState();
  const location = useLocation();

  const navigate = useNavigate();

  console.log(getUser());

  useEffect(() => {
    if(getUser()){
      setUser(getUser());
      navigate('/products')
    }
  }, [])

  console.log(user);

  return (
    <UserContext.Provider value={user}>
      {location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/verify-email" ? "" : <Navbar/>}
      {(location.pathname === "/gaspipeline" || location.pathname === "/products" || location.pathname === "/checkout" || location.pathname === "/tickets") && !user && !user?.name ? <Navigate to="/login" /> : ""}
      <Routes>
        <Route path ="/" exact element={<Home/>}/>
        <Route path ="/login" exact element={<Login setUser={setUser}/>}/>
        <Route path ="/verify-email" exact element={<EmailVerification/>}/>
        <Route path ="/register" exact element={<Signup setUser={setUser}/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/GasPipeline" element={<GasPipeline/>}/>
        <Route path ="/products" element={<ProductList isAdmin={false}/>}/>
        <Route path ="/checkout" element={<Checkout/>}/>
        <Route path ="/tickets" element={<Tickets/>}/>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
