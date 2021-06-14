import { useState, useEffect } from "react";

import "./App.css";
// Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const LOCAL_STORAGE_KEY = `todoApp.todos`;
function App() {
  const [owner, setOwner] = useState("");
  const [todos, setTodos] = useState([]);

  // Effects
  useEffect(() => {
    if (!localStorage.getItem("owner")) {
      const name =
        prompt("Whose Todo List is this?") || window.location.reload();
      localStorage.setItem("owner", name);
    }
    const owner = localStorage.getItem("owner").split(" ")[0];
    setOwner(owner);
  }, []);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  // JSX
  return (
    <div className="App">
      <Form setTodos={setTodos} owner={owner} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
