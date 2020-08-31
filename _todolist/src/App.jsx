import React, { useState, useEffect } from 'react'
import { Input } from './Input'
import { Task } from './Task'
import "./styles.css";

export const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };
      const notcompleteTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = false;
        setTodos(newTodos);
      };
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    return (
        <>
          <div className="todo-list">
            {todos.map((todo, index) => (
              <Task
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                notcompleteTodo={notcompleteTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
           <Input addTodo={addTodo} />
           </>
      );
  }