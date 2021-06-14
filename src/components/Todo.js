import React from "react";

function Todo({ todo, setTodos }) {
  const toggleCompleted = () => {
    setTodos((previousState) => {
      const todos = [...previousState];
      const t = todos.find((t) => todo.id === t.id); //This is the todo object
      t.isCompleted = !t.isCompleted;

      return todos;
    });
  };
  const deleteTodo = () => {
    setTodos((previousState) => {
      const todos = [...previousState];
      const index = todos.findIndex((t) => t.id === todo.id);
      todos.splice(index, 1);
      return todos;
    });
  };
  return (
    <div className={todo.isCompleted ? "todo completed" : "todo"}>
      <h3>{todo.task}</h3>
      <div className="actions">
        <button onClick={toggleCompleted}>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteTodo}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
