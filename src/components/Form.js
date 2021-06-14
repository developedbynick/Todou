import React, { useState } from "react";
import uuidv4 from "uuid/v4";
class Task {
  constructor(task, id, isCompleted) {
    this.task = task;
    this.id = id;
    this.isCompleted = isCompleted;
  }
}
function Form({ owner, setTodos, changeStatus }) {
  const [task, setTask] = useState("");
  const isTodoPresent = (task, todoArr) => {
    return todoArr.some((todo) => todo.task === task);
  };
  const submitHandler = (e) => {
    // 1) Prevent Default
    e.preventDefault();
    // 2) Create Todo Object
    const task = e.target[0].value;
    if (!task) return alert("The task field is required.");
    const newTask = new Task(task, uuidv4(), false);
    // 3) Set Todos
    setTodos((prevValue) => {
      if (isTodoPresent(task, prevValue)) {
        alert(`' ${task} ' is already a todo.`);
        return prevValue;
      }
      return [...prevValue, newTask];
    });
    // 4) Set task to an empty string
    setTask("");
  };
  const inputChangeHandler = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="form--container">
      <h2 className="owner">{owner + "'s"} Todo List</h2>
      <form onSubmit={submitHandler}>
        <div className="search--container">
          <input
            type="text"
            onChange={inputChangeHandler}
            className="todo--input"
            value={task}
          />
          <button>+</button>
        </div>
        <div className="select--container">
          <select onChange={changeStatus}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          <i className="fas fa-caret-down"></i>
        </div>
      </form>
    </div>
  );
}

export default Form;
