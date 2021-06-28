import React from 'react';
import Todo from './Todo'

export function TodoList({ todos, setTodos }) {
  console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => ( 
          <Todo
            text={todo.input}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;