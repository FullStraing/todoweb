export default function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </div>
  )
}
