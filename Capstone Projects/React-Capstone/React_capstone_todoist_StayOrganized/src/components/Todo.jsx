import { useState, useEffect } from "react";
import { getAllUsers } from "./APIutility";
import { getAllCategories } from "./APIutility";

function ToDoItem(props) {
  const task = props.todo;
  const setTask = props.setTodo;
  const onTodoSubmit = props.onSubmit;
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const today = new Date().toISOString().split('T')[0];
  const [errors, setErrors] = useState({});
  const ERROR_MSGS = {
    user: "Please select a user for your task.",
    category: "Please select a category for your task.",
    description: "Please add description for your task.",
    deadline: "Please provide task deadline for your task.",
    priority: "Please select a priority for your task."
  };

  const [textAreaCount, setTextAreaCount] = useState(0);
  const maxTextAreaCount = 250;
  // Fetch Users and categories
  useEffect(() => {
    // Fetch users
    getAllUsers()
      .then((jsonData) => {
        setUsers(jsonData);
      });
    // Fetch categories
    getAllCategories()
      .then((jsonData) => {
        setCategories(jsonData);
      });

  }, []);

  function resetForm() {
    console.log(task);
    setTask({ user: "", category: "", description: "", priority: "", deadline: "" });
    // userid:"", description:"", category:"", deadline:"", priority:""
    setErrors({});
    // alert('reset todo');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
    let errorStateObj = { ...errors };
    let noErrors = true;

    // Empty check
    if (!task.user) {
      errorStateObj["user"] = ERROR_MSGS["user"];
      noErrors = false;
    } else if (!task.category) {
      errorStateObj["category"] = ERROR_MSGS["category"];
      noErrors = false;
    } else if (!task.description) {
      errorStateObj["description"] = ERROR_MSGS["description"];
      noErrors = false;
    } else if (!task.deadline) {
      errorStateObj["deadline"] = ERROR_MSGS["deadline"];
      noErrors = false;
    } else if (!task.priority) {
      errorStateObj["priority"] = ERROR_MSGS["priority"];
      noErrors = false;
    }
    setErrors(errorStateObj);
    console.log(errorStateObj);

    if (noErrors) {
      // create the todo task
      onTodoSubmit();
    }
  }

  const inputChanged = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    let errorStateObj = { ...errors };
    if (name === "description") {
      if (value.length > maxTextAreaCount) {
        value = task.description;
      }
      setTextAreaCount(value.length);
    }


    if (!value) {
      errorStateObj[name] = ERROR_MSGS[name];
    } else {
      errorStateObj[name] = null;
    }
    setErrors(errorStateObj);

    // Add deadline validation

    // console.log("changed: " + name + " => " + value);
    setTask({ ...task, [name]: value });
  }

  return (
    <>
      <div>

        <form onSubmit={handleSubmit} className="col-md-8 newuser-container container container-fluid">
          <div className="my-4">
            <label><strong>User</strong></label>
            <select defaultValue={task.userid} name="user" value={task.user} onChange={inputChanged} onBlur={inputChanged} className={"form-control " + (errors.user ? "border-danger" : "border-success")} style={{}}>
              <option value="">Select a user</option>
              {
                users.map((user) => {
                  return (
                    <option key={user.id} value={user.id} >{user.name}</option>
                  );
                })
              }
            </select>
            {errors.user && <p className="error_msg">&#x26A0; {errors.user}</p>}
          </div>
          <div className="my-4">
            <label><strong>Category</strong></label>
            <select defaultValue={task.category} name="category" value={task.category} onChange={inputChanged} onBlur={inputChanged} className={"form-control " + (errors.category ? "border-danger" : "border-success")}>
              <option value="">Select a category</option>
              {
                categories.map((category) => {
                  return (<option key={category.id} value={category.name}>{category.name}</option>);
                })
              }
            </select>
            {errors.category && <p className="error_msg">&#x26A0; {errors.category}</p>}
          </div>
          <div className="my-4">
            <label><strong>Description</strong></label>
            <textarea value={task.description} name="description" onKeyUp={inputChanged} onChange={inputChanged} className={"form-control " + (errors.description ? "border-danger" : "border-success")} placeholder='Start Typing...'>

            </textarea>
            <p style={{ fontWeight: "lighter", fontSize: "12px" }}>{textAreaCount}/{maxTextAreaCount} characters</p>
            {errors.description && <p className="error_msg">&#x26A0; {errors.description}</p>}
          </div>
          <div className="my-4">
            <label><strong>End date</strong></label>
            <input name="deadline" type="date" min={today} onBlur={inputChanged} onChange={inputChanged} className={"form-control " + (errors.deadline ? "border-danger" : "border-success")} value={task.deadline} />
            {errors.deadline && <p className="error_msg">&#x26A0; {errors.deadline}</p>}
          </div>
          <div>
            <label><strong>Priority</strong></label>
            <select name="priority" value={task.priority} onChange={inputChanged} onBlur={inputChanged} className={"form-control " + (errors.priority ? "border-danger" : "border-success")}>
              <option value="">Select a priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            {errors.priority && <p className="error_msg">&#x26A0; {errors.priority}.</p>}
          </div>
          <button className="btn btn-primary mt-4 me-3 w-40 mb-5">{props.btnLabel}</button>
          <button className="btn btn-primary mt-4 w-40 mb-5" onClick={() => { resetForm() }}>Reset</button>
        </form>

      </div>
      <style jsx="true">{`
        .error_msg {
          color: red;
          font-weight: bold;
        }

        .newuser-container {
          margin: 0 auto;
          margin-top: 50px;
          color: black;
          max-width: 800px;
          min-width: 200px;
          min-height: 550px;
        }
 
      `}</style>
    </>
  );

}

export default ToDoItem;