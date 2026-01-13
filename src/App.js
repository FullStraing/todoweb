import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    if (!text.trim()) return

    setTodos([
      ...todos,
      { id: Date.now(), text: text.trim(), done: false }
    ])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    )
  }

  return (
    <div>
      <h1>ToDo</h1>

      <TodoForm addTodo={addTodo} />

      {todos.length === 0 ? (
        <p>Список задач пуст</p>
      ) : (
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      )}
    </div>
  )
}
