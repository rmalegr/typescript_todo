import React from 'react'
import './style.css'
interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  console.log(todo) 
  return (
    <form className='input'>
      <input type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Ingrese una tarea' className='input_box' />
      <button type='submit' className='input_submit'>
        Go
      </button>
    </form>
  )
}

export default InputField