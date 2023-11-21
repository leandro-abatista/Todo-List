import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <b>
          <p>{todo.text}</p>
        </b>
        <p className="category">({todo.category})</p>
        <p></p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default Todo;
