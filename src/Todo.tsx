import { useState } from 'react'
import { TodoList } from './TodoList'
import type { ITodo } from './types';
import { Footer } from './Footer';
import { urlHashToFilter } from './utils';
import { TodoInput } from './TodoInput';


const Todo = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [activeFilter, setActiveFilter] = useState(urlHashToFilter(window.location.hash || '#/'));

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
  const handleCompleteAll = () => setTodos([]);

  return (
    <>
      <header className='header'>
        <h1>todos</h1>
        <TodoInput
          isEditMode={false}
          placeholder='What needs to be done?'
          todos={todos}
          setTodos={setTodos}
        />
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
        onCompleteAll={handleCompleteAll}
      />
    </>
  )
}

export { Todo }
