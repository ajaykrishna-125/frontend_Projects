import logo from './components/logo.jpg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Item from './components/Item';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Home from "./components/Home";
import Athletics from "./components/Athletics";


function App() {
  // const [progress, setProgress] = useState(0)
  return (
    <div> 
        <Router>
        <NavBar/> 
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Enroll" element={<Item/>}/>
          <Route exact path="/Athletics/:name" element={<Athletics/>}/>
        </Routes>
        </Router>
      </div>
  );
}

export default App;
