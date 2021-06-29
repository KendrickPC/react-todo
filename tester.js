import React, { useState, useEffect, createContext , useRef, useReducer, useMemo, useCallback, useLayoutEffect, useDebugValue} from 'react';
import './App.css'

function App () {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  useEffect(() => {
    filterHandles();
  }, [todos, status])
  const filterHandles = (e) => {
    switch (status) {
      case "complete":
       setFilteredTodos(todos.filter(todo => todo.completed === true))
       break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Yefims Todo list</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
      />
    </div>
  )
}
function Form ({setInputText, todos, setTodos, inputText, setStatus}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos(
      [...todos, 
        {text: inputText, 
          completed: false, 
          uncompleted: true, 
          id: Math.random() * 5
        }])
    setInputText('')
  }
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input 
      value={inputText}
      onChange={inputTextHandler} type="text" className="todo-input"></input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" class="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  )
}
function TodoList ({todos, setTodos, filteredTodos}) {
  
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {
          filteredTodos.map(todo => {
            return <Todo 
            key={todo.id} 
            todos={todos}
            todo={todo}
            text={todo.text}
            setTodos={setTodos}
            />
          })
        }
      </ul>
    </div>
  )
}
const Todo = ({text,todo,todos,setTodos}) => {
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  const completeHandler = (e) => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
export default App;