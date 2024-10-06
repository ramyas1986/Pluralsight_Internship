import {useEffect, useState} from 'react'
import ToDo from './Todo'

const ToDoList = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("tasks"));
        console.log(saved);
        return saved || [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAdd = () => {
        console.log(input);
        if (input) {
            const tmpTasks = [...tasks, { taskName: input, completed: false }]
            setTasks(tmpTasks)
            console.log(tmpTasks);
        }
    }

    const handleRemove = (index) => {
        const tmpTasks = [...tasks]
        tmpTasks.splice(index, 1)
        setTasks(tmpTasks)
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleToggle = (index) => {
        const tmpTasks = [...tasks]
        tmpTasks[index].completed = !tmpTasks[index].completed
        setTasks(tmpTasks)
    }

    const componentDidUpdate = (prevProps, prevState) => {
        if (tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }

    return (
        <div>
            <input value={input} onChange={handleChange} />
            <button onClick={handleAdd}>add</button>

            <ul>
                {
                    tasks.map((task, index) => {
                    return (
                        <ToDo 
                            key={index}
                            index={index}
                            task={task}
                            handleToggle={handleToggle}
                            handleRemove={handleRemove}
                        />
                    )
                })
                }
            </ul>
        </div>
    );
  }




export default ToDoList