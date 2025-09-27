import { useState } from 'react'
import { TodoList } from './TodoList'
import type { ITodo } from './types';
import { Footer } from './Footer';
import { urlHashToFilter } from './utils';
import { NewTodoInput } from './NewTodoInput';


const Todo = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [activeFilter, setActiveFilter] = useState(urlHashToFilter(window.location.hash || '#/'));

  const onAddTodo = (text: string) => {
    const newTodo = { id: crypto.randomUUID(), text, isCompleted: false };
    setTodos([newTodo, ...todos]);
  }

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
    if (todos.every(todo => todo.isCompleted)) todos.forEach(todo => (todo.isCompleted = false))
    else todos.forEach(todo => (todo.isCompleted = true))

    setTodos([...todos])
  }
  const handleClearCompleted = () => setTodos(todos.filter(todo => !todo.isCompleted));

  return (
    <>
      <header className='header'>
        <h1>todos</h1>
        <NewTodoInput onAddTodo={onAddTodo} />
      </header>
      <TodoList
        todos={todos}
        activeFilter={activeFilter}
        onRemove={handleRemove}
        onToggleCompletion={handleToggleCompletion}
        onToggleAll={handleToggleAll}
        setTodos={setTodos}
      />
      <Footer
        todos={todos}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onClearCompleted={handleClearCompleted}
      />
    </>
  )
}

export { Todo }
