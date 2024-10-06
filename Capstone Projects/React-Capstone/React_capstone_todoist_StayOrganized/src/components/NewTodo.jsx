// import { useState, useEffect } from "react";
import ToDoItem from "./Todo";
import newtodo_image from '../images/isometric-time-management-concept-illustrated_52683-55534.avif';
import { useEffect, useState } from "react";
import AutoHideToast from "./ToastMsg";
import { createTodo } from "./APIutility";
import MediaQuery from 'react-responsive';
import { useNavigate } from "react-router-dom";

function NewToDo() {
  const [todo, setTodo] = useState({});
  const [toastState, setToastState] = useState(false);
  const navigate = useNavigate();

  function addTask() {
    // Create JSON object to include in the request body
    let bodyData = {
      userid: todo.user,
      category: todo.category,
      description: todo.description,
      deadline: todo.deadline,
      priority: todo.priority
    }

    createTodo(bodyData)
      .then((status) => {
        if (status) {
          setToastState(true);
          setTodo({});
          gotoListingPage(todo.user);
        }
      })
  }

  function gotoListingPage(userId) {
    localStorage.setItem("todo.user", userId);
    localStorage.setItem("todo.created", "true");
    navigate("/displayusertodos");
  }

  useEffect(() => {
  let userIdStr = localStorage.getItem("todo.user");
    if (userIdStr) {
      let userId = parseInt(userIdStr);
      console.log("Creted User : " + userId);
      todo.user=userId;
      setTodo(todo);
      localStorage.removeItem("todo.user");
    }
  }, [todo]);

  

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop:"100px"}}>Add New Task</h1>
        <div>
          <div className="row">
          <MediaQuery minWidth={768}>
            <div className="col-md-4">
              <img alt="to_do_image" className="img-fluid" src={newtodo_image} style={{ marginLeft: "100px", marginTop: "75px" }} />
            </div>
            </MediaQuery>
            <div className="col-md-8">
              <ToDoItem todo={todo} setTodo={setTodo} onSubmit={addTask} btnLabel="Create Task" />
            </div>
          </div>
        </div>
      </div>
      {toastState && <AutoHideToast msg="Todo task created successfully!" callbackOnHide={() => { setToastState(false) }} />}
    </>
  );

}

export default NewToDo;