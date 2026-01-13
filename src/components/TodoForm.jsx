import { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    addTodo(text)
    setText('')
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  )
}
