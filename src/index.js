import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
function fetchTodos(){
  return [
    {
      id:1,
      title: "吃飯",
      completed: true
    },
    {
      id:2,
      title: "刷牙",
      completed: false
    }
  ];
}
const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){

  const [ todos , setTodos ] = useState(fetchTodos());

  return (
    <Container>
      {todos.map((todo)=>(
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onDelete={()=>{setTodos(todos.filter((x)=> x.id !== todo.id))}}
        />
      ))}
    </Container>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function TodoItem(props){
  return (<InputGroup>
    <InputGroup.Checkbox checked={props.completed} />
    <FormControl 
      value={props.title}
      style={{
        textDecoration: props.completed ? "line-through 4px" : "none" 
      }}
    />
    <Button variant="outline-danger" onClick={props.onDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  </InputGroup>);
  
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
