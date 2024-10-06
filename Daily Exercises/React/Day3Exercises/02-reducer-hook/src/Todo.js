function ToDo({ index, task, dispatch }) {
    return (
        <li key={index}>
            <span
                onClick={() => dispatch({type:"TOGGLE_TODO", taskIndex:index, completed: task.completed})}
                style={{ textDecoration: task.completed && 'line-through' }}>
                {task.taskName}
            </span>
            <button onClick={() => dispatch({type:"REMOVE_TODO", taskIndex:index})}>remove</button>
        </li>
    )
}

export default ToDo