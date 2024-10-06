import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskTable(props) {
  const userTasks = props.tasks;
  const updateTasksFunc = props.setUserTasks;
  const deleteTaskFunc = props.deleteTask;
  const completeTaskFunc = props.completeTask;
  const today = new Date().toISOString().split('T')[0];
  const [sortOrder, setSortOrder] = useState("low");
  const navigate = useNavigate();

  function getPriorityOrder(priority) {
    let pr = priority.toLowerCase();
    let prVal = (pr === "high" ? 3 : (pr === "low" ? 1 : 2));
    return prVal;
  }

  function sortTasks(columnName, currentSortOrder) {
    let tasks = [...userTasks];
    if (currentSortOrder === "low") {
      tasks.sort(function (a, b) {
        const nameA = (columnName === "priority") ? getPriorityOrder(a[columnName]) : a[columnName];
        const nameB = (columnName === "priority") ? getPriorityOrder(b[columnName]) : b[columnName];;
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSortOrder("high");
    } else {
      tasks.reverse(function (a, b) {
        const nameA = (columnName === "priority") ? getPriorityOrder(a[columnName]) : a[columnName];
        const nameB = (columnName === "priority") ? getPriorityOrder(b[columnName]) : b[columnName];;
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSortOrder("low");
    }
    // console.log(tasks);
    updateTasksFunc(tasks);
  }

  function editTask(taskId) {
    let selctedTask = userTasks.find(task => task.id === taskId);
    localStorage.setItem("edit_task", JSON.stringify(selctedTask));
    navigate("/edittodo");
  }


  return (
    <>
      <table display="none" className="table table-responsive-sm mt-5" id="toDoTable">
        <thead style={{ textAlign: "center", fontWeight: "bold", verticalAlign: "baseline" }}>
          <tr >
            <td>ID</td>
            <td>Category</td>
            <td>Description</td>
            <td>Deadline</td>
            <td onClick={() => { sortTasks("priority", sortOrder)}}>Priority {sortOrder === "low" ? '↓' : '↑'}</td>
            <td>Completed</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center", verticalAlign: "baseline"}}>

          {
            userTasks.map((userTask) => {
              console.log("newDate:" + new Date());
              console.log("User deadline:" + userTask.deadline)
              return (
                <tr className={ userTask.deadline<today && !userTask.completed ? "table-danger": ""} key={userTask.id} data-toggle="tooltip" data-placement="top" title={userTask.deadline<today ? "This task is overdue" : ""}>
                  <td>{userTask.id}</td>
                  <td>{userTask.category}</td>
                  <td>{userTask.description}</td>
                  <td>{userTask.deadline}</td>
                  <td>{userTask.priority}</td>
                  <td>
                    {/* {userTask.completed ? '\u2714' : '\u2718'} */}
                    <ToggleSwitch onChange={completeTaskFunc} taskId={userTask.id} status={userTask.completed} />
                  </td>
                  <td style={{ fontSize: "20px" }}><i className="bi bi-trash3-fill me-3" onClick={() => deleteTaskFunc(userTask.id)}></i>
                    <i onClick={() => editTask(userTask.id)} className="bi bi-pencil-square me-2"></i>
                  </td>
                </tr>
              );
            })

          }
        </tbody>
      </table>

      <style jsx="true">{`
          .toggle-switch {
            position: relative;
            width: 75px;
            display: inline-block;
            text-align: left;
            top: 3px;
          }
          .checkbox {
            display: none;
          }
          .label {
            display: block;
            overflow: hidden;
            cursor: pointer;
            border: 0 solid #bbb;
            border-radius: 20px;
          }
          .inner {
            display: block;
            width: 200%;
            margin-left: -100%;
            transition: margin 0.3s ease-in 0s;
          }
          .inner:before,
          .inner:after {
            float: left;
            width: 50%;
            height: 27px;
            padding: 0;
            line-height: 27px;
            color: #fff;
            box-sizing: border-box;
          }
          .inner:before {
            content: "YES";
            padding-left: 10px;
            background-color: #060;
            color: #fff;
          }
          .inner:after {
            content: "NO";
            padding-right: 10px;
            background-color: #EE4E4E;
            color: #fff;
            text-align: right;
          }
          .switch {
            display: block;
            width: 24px;
            margin: 5px;
            background: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 40px;
            border: 0 solid #bbb;
            border-radius: 20px;
            transition: all 0.3s ease-in 0s;
          }
          .checkbox:checked + .label .inner {
            margin-left: 0;
          }
          .checkbox:checked + .label .switch {
            right: 0px;
          }
      `}</style>
    </>
  );

  function ToggleSwitch(props) {
    const onChangeFunc = props.onChange;
    const taskId = props.taskId;
    const defaultCheck = props.status;
    return (
      <div className="container">
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" onChange={() => { onChangeFunc(taskId, !defaultCheck); }} name={taskId} id={taskId} defaultChecked={defaultCheck} />
          <label className="label" htmlFor={taskId}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    )
  }
}
