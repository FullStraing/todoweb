# todoweb — ToDo

A small React to-do list app (Create React App, no extra state library).
The UI is in Russian.

## What it does

- Add a task: type text and press **Добавить** (blank input is ignored, text is trimmed)
- Mark done: click the task text — it gets a line-through; click again to undo
- Delete a task: **Удалить** button next to it
- Empty list shows «Список задач пуст»

Tasks live only in React state (`useState` in `App`): they are kept while
the page is open and are **not** saved to localStorage or a server, so a
reload starts with an empty list. Each task gets `id: Date.now()`.

## Structure

```
src/
  App.js                  state + add / delete / toggle handlers
  components/
    TodoForm.jsx          input + add button
    TodoList.jsx          renders the list
    TodoItem.jsx          one row: clickable text + delete button
  index.js / index.css    entry point / styles
```

## Run

```bash
npm install
npm start     # http://localhost:3000
```

```bash
npm test      # test runner (watch mode)
npm run build # production build into build/
```
