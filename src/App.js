import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';

import Navbar from './Components/Inc/Navbar.js';
import GasPipeline from './Components/Pages/GasPipleine.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/" exact element={<Home/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/GasPipeline" element={<GasPipeline/>}/>

      </Routes>
    </Router>
  );
}

export default App;
