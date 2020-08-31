import React from 'react'

export const Task = ({ todo, index, completeTodo, notcompleteTodo, removeTodo }) => {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => notcompleteTodo(index)}>Return</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }