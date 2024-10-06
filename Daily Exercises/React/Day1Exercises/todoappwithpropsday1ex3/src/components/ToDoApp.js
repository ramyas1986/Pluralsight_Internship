

const TodoApp = (props) => {

    return (
        <div>
            <h1>Welcome to {props.name}'s To-Do List</h1>
            <h2>The weather in {props.weather.currentCity} is {props.weather.description} with a temperature of {props.weather.temperature} degrees fahrenheit.</h2>
            <ul>
            <h3>Todos are</h3>
            {props.toDos.forEach(element => {
              console.log(element);
            })}

            {props.toDos.map( (todo) => (
              <li>{todo}</li>
            ))}
            </ul>
        </div>
    )
}
export default TodoApp;