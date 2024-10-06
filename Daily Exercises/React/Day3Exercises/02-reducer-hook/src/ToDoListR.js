import {useEffect, useReducer} from 'react'
import ToDo from './Todo'

const ToDoList = () => {
    const initialState = {
        tasks : [],
        input : ""
    }
    function reducer(state, action) {
        let tmpTasks = [];
        switch (action.type) {
            case "INPUT_CHANGED":
                return {...state, input: action.taskName};
            case "ADD_TODO":
                tmpTasks = [...state.tasks, {taskName: action.taskName, completed: false}];
                return {...state, tasks: tmpTasks};
            case "REMOVE_TODO":
                tmpTasks = [...state.tasks];
                tmpTasks.splice(action.taskIndex, 1);
                return {...state, tasks: tmpTasks};
            case "TOGGLE_TODO":
                tmpTasks = [...state.tasks];
                tmpTasks[action.taskIndex].completed = !tmpTasks[action.taskIndex].completed
                return {...state, tasks: tmpTasks};
            default:
                console.error(`Reduce case failure, invalid type ${action.type}`)
                return state;


        }
    }

    const[state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }, [state.tasks]);


    const componentDidUpdate = (prevProps, prevState) => {
        if (state.tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    }

    return (
        <div>
            <input value={state.input} onChange={dispatch({type:"INPUT_CHANGED", taskName:state.input})} />
            <button onClick={dispatch({type:"ADD_TODO", taskName:state.input})}>add</button>

            <ul>
                {
                    state.tasks.map((task, index) => {
                    return (
                        <ToDo 
                            index={index}
                            task={task}
                            dispatch={dispatch}
                        />
                    )
                })
                }
            </ul>
        </div>
    );
  }




export default ToDoList