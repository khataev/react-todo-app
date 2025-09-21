import { useState } from 'react'
import './App.css'
import { TodoList } from './TodoList'
import type { ITodo } from './TodoItem';

const Todo = () => {

  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [newTodoText, setNewTodoText] = useState('')
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim()) {
      const newTodo = { id: crypto.randomUUID(), text: newTodoText }
      setTodos([newTodo, ...todos])
      setNewTodoText('');
    }
  };
  const destroyTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <>
      <header className='header'>
        <h1>todos</h1>
        <input type='text'
          className='new-todo'
          placeholder='What needs to be done?'
          value={newTodoText}
          onChange={handleNewTodoChange}
          onKeyDown={handleKeyDown}
        />
        <TodoList todos={todos} destroyTodo={destroyTodo} />
        <footer className='footer' />
      </header>
    </>
  )
}

export { Todo }
