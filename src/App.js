import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Login from './Components/Pages/auth/Login';
import Signup from './Components/Pages/auth/Signup';
import Navbar from './Components/Inc/Navbar.js';
import GasPipeline from './Components/Pages/GasPipleine.js';
import ProductList from './Components/Pages/catalouge/ProductList';
import EmailVerification from './Components/Pages/auth/EmailVerification';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/verify-email" ? "" : <Navbar/>}
      <Routes>
        <Route path ="/" exact element={<Home/>}/>
        <Route path ="/login" exact element={<Login/>}/>
        <Route path ="/verify-email" exact element={<EmailVerification/>}/>
        <Route path ="/register" exact element={<Signup/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/GasPipeline" element={<GasPipeline/>}/>
        <Route path ="/products" element={<ProductList isAdmin={false}/>}/>
      </Routes>
    </>
  );
}

export default App;
