import React from 'react';

export function Form({setInputText, setTodos, todos, inputText, setStatus}) {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos(
      [...todos,
        {text: inputText,
          completed: false,
          uncompleted: true,
          id: Math.random() * 1000,
        }]);
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input 
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button 
        onClick={submitTodoHandler} 
        className="todo-button"
        type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select 
          onChange={statusHandler}
          name="todos"
          className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;