import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import {Todo} from "./model"
import TodoList from './components/TodoList';
//tipos en tyescript 
let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[]
let role: [number, string]
let person: Object;
let lotsOfPeople: Person[]

type Person = {
  name: string;
  age?: number;
}
let persona: Person = {
  name: "Rodrigo",
  age : 39
}

console.log(persona.name)

function printNake(name:string) {
  console.log(name)
}

let printName: (name: string) => void;

interface Persona {
  name : string
  documento :string
}
interface chico extends Persona {
  profesion : string
}

let rodrigo: chico = {
  profesion: 'Matematico',
  name: 'alegre',
  documento :"445454"
}
console.log("Prueba interfaz" + rodrigo.name)
type Y = {
  a: string,
  b: number
}

type X = {
  c: string,
  d: number 
}

let y: Y & {
  c: "hola",
  d : 55
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{id: Date.now(), todo:todo, isDone : false}])
    }
    setTodo("")
  }

  console.log(todos)

  return <div className='App' >
    <span className='heading'>TASKIFY</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    {/* {todos.map((t) => (
      <li>{t.todo }</li>
    ))} */}
    <TodoList todos={todos} setTodos={setTodos} />
  </div>
   
}

export default App;
