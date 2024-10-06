import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNoNav from './AppNoNav';
import AppWithNav from './AppWithNav';


function App() {
  return (
    <AppWithNav></AppWithNav>
  );
}

export default App;
