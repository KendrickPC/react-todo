import React from 'react';

export const Todo = ({text, todo, todos, setTodos}) => {
  // Event handler for deleting items
  const deleteHandler = (e) => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const completeHandler = (e) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {...item, completed: !item.completed}
      }
    }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : 'uncompleted'}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo;