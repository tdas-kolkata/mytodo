import React from "react";

export default function Todolist(props) {
  return (
    <div>
      Todolist
      {props.todos.map((todo) => (
        <div key={Math.random()}>
          <span>{todo.name}</span>
          <span>||</span>
          <span>{todo.task}</span>
        </div>
      ))}
    </div>
  );
}
