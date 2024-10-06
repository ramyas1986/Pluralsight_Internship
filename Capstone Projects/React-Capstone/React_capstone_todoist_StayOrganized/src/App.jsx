import React from 'react';
import './App.css';
import Home from './components/home';
import MyNavbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from './components/ToDoList';
import NewUser from './components/NewUser';
import NewToDo from './components/NewTodo';
import EditTodo from './components/EditTodo';
import MyFooter from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/newuser" Component={NewUser}></Route>
        <Route path="/newtodo" Component={NewToDo}></Route>
        <Route path="/edittodo" Component={EditTodo}></Route>
        <Route path="/displayusertodos" Component={ToDoList}></Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
      <MyFooter />
    </Router>
    </>
  );
}

export default App;
