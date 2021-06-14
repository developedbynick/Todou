import React from "react";
import Todo from "./Todo.js";
function TodoList({ todos,setTodos }) {
  return (
    <div className="todo--list">
      {todos.map((todo) => {
        const { id } = todo;
        return <Todo setTodos={setTodos} key={id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
