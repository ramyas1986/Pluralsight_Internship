import React from 'react';
import Jeopardy from './components/jeopardy';
import AboutMe from './components/AboutMe';
import Training from './components/Training';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

function AppNoNav() {
  return (
    
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/jeopardy">Jeopardy</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
      </ul>
      <Routes>
      <Route path="/jeopardy" Component={Jeopardy}></Route>
        <Route path="/about" Component={AboutMe}></Route>
        <Route path="/training" Component={Training}></Route>
        <Route path="/" Component={Home}></Route>
        <Route path="*" Component={PageNotFound}></Route>
      
      </Routes>
    </Router>
  );
}

export default AppNoNav;
