import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TaskTable from "./TasksTable";
import TasksSearchBar from "./TasksSearch";
import AutoHideToast from "./ToastMsg";
import { deleteTodo, getAllUsers, getTodosByUser, updateTodo } from "./APIutility";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function ToDoList() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [userTasks, setUserTasks] = useState([]);
  const [userTasksAll, setUserTasksAll] = useState([]);
  const [toastState, setToastState] = useState(false);
  const [toastUserCreated, setToastUserCreated] = useState(false);
  const [toastUserTaskUpdated, settoastUserTaskUpdated] = useState(false);
  const [toastTaskCreated, settoastTaskCreated] = useState(false);
  const [searchData, setSearchData] = useState({ status: [], cats: [], desc: "" });
  const navigate = useNavigate();
  const clearSearchData = () => {
    setSearchData({ status: [], cats: [], desc: "" });
  }


  const listTasksByUser = (userId) => {
    if (userId) {
      getTodosByUser(userId)
        .then(toDos => {
          setUserTasks(toDos)
          setUserTasksAll(toDos)
        });
      setUser(userId);
    } else {
      setUserTasks([]);
    }
    clearSearchData();
  }

  // Fetch Users and categories
  useEffect(() => {
    // Fetch users
    getAllUsers()
      .then((jsonData) => {
        setUsers(jsonData);
      });

    // If userId is set in local storage
    let userIdStr = localStorage.getItem("todo.user");
    if (userIdStr) {
      console.log("Creted User : " + userIdStr);
      let userId = parseInt(userIdStr);
      console.log("Creted User : " + userId);
      setUser(userId);
      listTasksByUser(userId);
      localStorage.removeItem("todo.user");
    }

    let taskCreatedToast = localStorage.getItem("todo.created");
    if(taskCreatedToast) {
      settoastTaskCreated(true);
      localStorage.removeItem("todo.created");
    }
    let taskUpdatedToast = localStorage.getItem("todo.updated");
    if(taskUpdatedToast) {
      settoastUserTaskUpdated(true);
      localStorage.removeItem("todo.updated");
    }
    let userCreatedToast = localStorage.getItem("user.created");
    if(userCreatedToast) {
      setToastUserCreated(true);
      localStorage.removeItem("user.created");
    }
  }, []);

  const createUserTask = (e) => {
      localStorage.setItem("todo.user", user);
      navigate("/newtodo");
  }

  const createNewUser = (e) => {
    navigate("/newuser");
}

  const userChanged = (selectedUser) => {
    let userId = selectedUser.id;
    listTasksByUser(userId);
  }

  function deleteTask(taskId) {
    if (!taskId) {
      console.log('deleteTask : No Task Id.');
      return;
    }
    deleteTodo(taskId)
      .then(res => {
        setToastState(true);
      });
    let remainingTasks = userTasks.filter(task => { console.log(task); return task.id !== taskId });
    // console.log(remainingTasks);
    setUserTasks(remainingTasks);
  }

  function completeTask(taskId, newCompletedVal) {
    if (!taskId) {
      console.log('completeTask : No Task Id.');
      return;
    }
    // alert("Completed: " + newCompletedVal);
    let seelctedTask = userTasks.find(task => task.id === taskId);
    if (!seelctedTask) {
      console.log('completeTask : No Task for the given Id ' + taskId);
      return;
    }
    seelctedTask.completed = true;
    let bodyData = {
      userid: seelctedTask.user,
      category: seelctedTask.category,
      description: seelctedTask.desc,
      deadline: seelctedTask.deadline,
      priority: seelctedTask.priority,
      completed: newCompletedVal
    }
    // Send the request
    updateTodo(taskId, bodyData)
      .then(resp => {
        let tmpTasks = [...userTasks];
        if (!tmpTasks) return;
        tmpTasks.forEach((task) => {
          if (task.id === taskId) {
            if (resp) {
              task.completed = resp.completed;
            } else {
              task.completed = !task.completed;
            }
          }
        });
        setUserTasks(tmpTasks);
      });
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Organize your Todos</h1>
      </div>
    
      <div>
      <button className="btn btn-outline-success" style={{marginRight:"30px", marginLeft:"1300px", marginTop:"20px", width:"150px"}} onClick={createNewUser}>Create User</button>
      {(user) && <button className="btn btn-outline-info" style={{marginRight:"30px", marginLeft:"1100px", marginTop:"-65px", width:"150px"}} onClick={createUserTask}>New Task</button>}
        <h4 style={{ textAlign: "center", marginTop:(user ? "0" : "65px"), color:"brown"}}>Select a user to view the tasks</h4>
      
        <div style={{ textAlign: "center", width:"300px", marginLeft:"600px" }}>

          {/* <select className="btn btn-secondary btn-info dropdown-toggle userselectbtn" size='1' onFocus={this.size = 8} name="user" id="listUsers" onChange={userChanged} value={user}>
            <option value="">Select user</option>
            {
              users.map((user) => {
                return (<option key={user.id} value={user.id}>{user.name}</option>);
              })
            }
          </select> */}
          
    <Select className="basic-single" classNamePrefix="select" isSearchable={true} 
    options={users} getOptionLabel={(user)=>user.name} getOptionValue={(user)=>user.id}
    onChange={userChanged} name="user" value={users.filter((u) => u.id===user)} />


        </div>
      
        
        <div id="getTasksByUserName" style={{ minHeight: "450px" }} className="table-responsive-sm">
          <div className="row">
            <div className="col-md-2">
              {user && <TasksSearchBar allTasks={userTasksAll} setTasks={setUserTasks} searchData={searchData} setSearchData={setSearchData} />}
            </div>

            <div className="col-md-9" style={{ marginRight: "10px", marginLeft: "80px" }}>
              {(user && userTasks.length === 0) && <h5 className="noTaskMsg" style={{ textAlign: "center", marginTop:"80px" }}>There are no tasks for the user</h5>}
              {userTasks.length > 0 && <TaskTable tasks={userTasks} deleteTask={deleteTask} completeTask={completeTask} setUserTasks={setUserTasks} />}
            </div>
          </div>
        </div>
      </div>
      {toastState && <AutoHideToast msg="Todo task deleted successfully!" bg="secondary" textColor="text-white" callbackOnHide={() => { setToastState(false) }} />}
      {toastUserTaskUpdated && <AutoHideToast msg="Task updated successfully!" callbackOnHide={() => { settoastUserTaskUpdated(false) }} />}
      {toastTaskCreated && <AutoHideToast msg="Todo task created successfully!" callbackOnHide={() => { settoastTaskCreated(false) }} />}
      {toastUserCreated && <AutoHideToast msg="User is successfully created." callbackOnHide={() => { setToastUserCreated(false) }} />}
      <style jsx="true">{`
        .noTaskMsg {
          float: left;
          box-sizing: content-box;
          padding: 30px;
          margin: 100px 250px;
          min-height: 30px;
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          background: #FFE5B4;
          border-radius: 15px;
          font-family: "Poppins", sans-serif;
          font-style: oblique;
        }
      `}
      </style>
    </>
  );
}

export default ToDoList;