import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SavedPage from "./components/SavedPage";
import SearchPage from "./components/Search";
import PageNotFound from "./components/PageNotFound";
import MyNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route key="0" path="/" Component={Home}></Route>
        <Route key="1" path="/saved" Component={SavedPage}></Route>
        <Route key="2" path="/search" Component={SearchPage}></Route>
        <Route key="3" path="*" Component={PageNotFound}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
