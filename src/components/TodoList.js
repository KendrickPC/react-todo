import React from 'react';
import Todo from './Todo'

export function TodoList({ todos, setTodos, filteredTodos }) {
  // console.log(filteredTodos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => {
           return <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            />
          })
        }
      </ul>
    </div>
  );
};

export default TodoList;