import React from "react";

function TodoList({ todos }) {
  return (
    <div className="todo--list">
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
}

export default TodoList;
