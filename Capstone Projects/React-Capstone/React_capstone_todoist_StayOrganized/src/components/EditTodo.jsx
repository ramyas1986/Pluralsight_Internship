// import { useState, useEffect } from "react";
import ToDoItem from "./Todo";
import newtodo_image from '../images/isometric-time-management-concept-illustrated_52683-55534.avif';
import { useEffect, useState } from "react";
import AutoHideToast from "./ToastMsg";
import { updateTodo } from "./APIutility";
import MediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";

function EditTodo() {
  const [toastState, setToastState] = useState(false);
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();

  // Fetch Users and categories
  useEffect(() => {
    // Fetch task in edit workflow
    let task = localStorage.getItem("edit_task");
    console.log(task);
    if (task) {
      let editTask = JSON.parse(task);
      console.log(editTask);
      editTask["user"] = editTask.userid;
      setTodo(editTask);
      localStorage.removeItem("edit_task");
    }

  }, []);

  function gotoListingPage(userId) {
    localStorage.setItem("todo.user", userId);
    localStorage.setItem("todo.updated", "true");
    navigate("/displayusertodos");
  }

  function editTask() {
    // Create JSON object to include in the request body
    let todoJSON = {
      userid: todo.user,
      category: todo.category,
      description: todo.description,
      deadline: todo.deadline,
      priority: todo.priority,
      completed: false
    }

    updateTodo(todo.id, todoJSON)
      .then((resp) => {
        if (resp)
          setToastState(true);
        gotoListingPage(todo.user);
      })
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>Edit Task</h1>
        <div>
          <div className="row">
            <MediaQuery minWidth={768}>
              <div className="col-md-4">
                <img alt="to_do_image" className="img-fluid" src={newtodo_image} style={{ marginLeft: "100px", marginTop: "75px" }} />
              </div>
            </MediaQuery>
            <div className="col-md-8">
              <ToDoItem todo={todo} setTodo={setTodo} onSubmit={editTask} btnLabel="Update Task" />
              {toastState && <AutoHideToast msg="Task updated successfully!" callbackOnHide={() => { setToastState(false) }} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default EditTodo;