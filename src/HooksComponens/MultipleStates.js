import React, { useState } from 'react'

const MultipleStates = () => {
  const [age, setAge] = useState(23)
  const [todos, setTodos] = useState([{ text: 'Learn React' }])

  return (
    <div>
      <p>My age is {age}</p>
      <button onClick={() => setAge(age + 1)}>Change age to + 1 year</button>
      <p>To do list</p>
      {todos.map(t => (
        <p>{t.text}</p>
      ))}
      <button onClick={() => setTodos(todos.concat([{ text: 'Learn React' }]))}>
        Set a dummy to do
      </button>
    </div>
  )
}

export default MultipleStates
