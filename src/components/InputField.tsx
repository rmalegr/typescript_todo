import React from 'react'
import './style.css'
interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
  console.log(todo) 
  return (
    <form className='input' onSubmit={(e) => handleAdd(e)}>
      <input type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Ingrese una tarea'
        className='input_box' />
      
      <button type='submit' className='input_submit' >
        Go
      </button>
    </form>
  )
}

export default InputField