import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jeopardy from './components/jeopardy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Jeopardy} ></Route>
      </Routes>
    </Router>

  );
}

export default App;
