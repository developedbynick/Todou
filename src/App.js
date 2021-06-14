import { useState, useEffect } from "react";

import "./App.css";
// Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const LOCAL_STORAGE_KEY = `todoApp.todos`;
function App() {
  const [owner, setOwner] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Effects
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  useEffect(() => {
    if (status === "all") {
      setFilteredTodos(todos);
    }
    if (status === "completed") {
      setFilteredTodos(() => {
        const todosC = [...todos];
        return todosC.filter((task) => task.isCompleted === true);
      });
    }
    if (status === "uncompleted") {
      setFilteredTodos(() => {
        const todosC = [...todos];
        return todosC.filter((task) => task.isCompleted === false);
      });
    }
  }, [status, todos]);
  useEffect(() => {
    /* Key
     LS - localStorage;
     */
    const storedOwner = localStorage.getItem("owner");

    // This if statement is run if there is no owner in LS.
    if (!storedOwner) {
      // 1) Asking the user for their name.
      let owner = prompt("Whose to-do list is this?");
      // 2) If the prompt is submitted without text or canceled, reload the page.
      if (!owner) window.location.reload();
      // 3) Transforming the owner to lowercase and taking the firstName of the string provided.
      owner = owner.toLowerCase().split(" ")[0];
      // 4) Storing the owner in LS.
      localStorage.setItem("owner", owner);
      // 5) Setting state, so that the page updates with the correct owner.
      setOwner(owner);
      return;
    }
    // 1) If this is ran, it means that there is a value for owner in LS.
    setOwner(storedOwner);
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
      <Form changeStatus={changeStatus} setTodos={setTodos} owner={owner} />
      <TodoList setTodos={setTodos} todos={filteredTodos} />
    </div>
  );
}

export default App;
