import { useState } from "react";
import "./App.css";
// Components
import TodoList from "./TodoList";
function App() {
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);
  return (
    <div className="App">
      <>
        <input type="text" placeholder="Type your task" />
        <button>Add task</button>
        <TodoList todos={todos} />
      </>
    </div>
  );
}

export default App;
