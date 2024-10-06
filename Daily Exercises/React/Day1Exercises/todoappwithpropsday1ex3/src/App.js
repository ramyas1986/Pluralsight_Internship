import './App.css';
import TodoApp from './components/ToDoApp';

function App() {
  return (
    <div className="App">
      <TodoApp name="Ramya" weather={currentWeather} toDos={toDosArray}/>
    </div>
  );
}

const currentWeather = {
  currentCity: "Cleveland",
  description: "Sunny",
  temperature: 76
}

const toDosArray = [
  "learn React",
  "eat",
  "sleep",
  "practice React",
  "watch React Pluralsight videos",
  "practice JavaScript",
]

export default App;
