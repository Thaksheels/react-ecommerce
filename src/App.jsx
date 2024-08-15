import React, { isValidElement, useEffect, useState ,useContext, useReducer} from "react";
import TodoCard from "./components/todo_card";

import { reducer,initialState,ADD_TODO,REMOVE_TODO,TOGGLE_TODO } from "./reducers/todo_reducer";
import { Link } from "react-router-dom";



const App = () => 
   {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState('');
  
    // Handler to add a new todo
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        dispatch({ type: ADD_TODO, payload: inputValue });
        setInputValue('');
      }
    };
  
    // Handler to remove a todo
    const handleRemoveTodo = (id) => {
      dispatch({ type: REMOVE_TODO, payload: id });
    };
  
    // Handler to toggle todo completion status
    const handleToggleTodo = (id) => {
      console.log(id);
      
      dispatch({ type: TOGGLE_TODO, payload: id });

    };
  
  return (
    
    <div className="container">
      <Link to="/about"><button>about</button></Link>
    <div className="todo-app">
      <div className="app-title">
        <h2>To-do app</h2>
        <i className="fa-solid fa-book-bookmark"></i>
      </div>
      <div className="row">
        <input
          type="text"
          id="input-box"
          placeholder="add your tasks"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul id="list-container">
        {state.todos.map(todo => (
          <TodoCard
            data={todo}
            key={todo.id}
            onDeleteEvent={()=>handleRemoveTodo(todo.id)}
            
          />
        ))}
      </ul>
    </div>
  </div>
  );
};

export default App;
