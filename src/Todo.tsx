import { useState } from 'react'
import './App.css'
import { TodoList } from './TodoList'
import type { ITodo } from './types';

const Todo = () => {

  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [newTodoText, setNewTodoText] = useState('')
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value);
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim().length > 1) {
      const newTodo = { id: crypto.randomUUID(), text: newTodoText, isCompleted: false };
      setTodos([newTodo, ...todos])
      setNewTodoText('');
    }
  };
  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
  const handleToggleCompletion = (id: string) => {
    todos.forEach(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
    setTodos([...todos])
  }
  const handleToggleAll = () => {
    todos.forEach(todo => (todo.isCompleted = !todo.isCompleted))
    setTodos([...todos])
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
          onKeyDown={handleAddTodo}
        />
      </header>
      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onToggleCompletion={handleToggleCompletion}
        onToggleAll={handleToggleAll}
      />
      <footer className='footer' />
    </>
  )
}

export { Todo }
