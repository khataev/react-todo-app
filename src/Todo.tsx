import { useState, type SyntheticEvent } from 'react'
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

  const mainHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    // Remove todo
    if (e.type === 'click' && target.dataset.name === 'todo-item-view-destroy') {
      const id = target.dataset.id;
      if (id) handleRemove(id);
    }
    // Toggle todo completion
    if (e.type === 'change' && target.dataset.name === 'todo-item-view-toggle') {
      const id = target.dataset.id;
      if (id) handleToggleCompletion(id);
    }
    // Toggle all todos completion
    if (e.type === 'click' && target.dataset.name === 'toggle-toggle-all-label') {
      handleToggleAll();
    }
    // Change filter
    if (e.type === 'click' && target.dataset.name?.startsWith('footer-filter-all')) {
      setActiveFilter('all');
    }
    if (e.type === 'click' && target.dataset.name?.startsWith('footer-filter-active')) {
      setActiveFilter('active');
    }
    if (e.type === 'click' && target.dataset.name?.startsWith('footer-filter-completed')) {
      setActiveFilter('completed');
    }
    // Clear completed
    if (e.type === 'click' && target.dataset.name === 'footer-clear-completed') {
      handleClearCompleted();
    }
  }
  return (
    <div onClick={mainHandler} onChange={mainHandler}>
      <header className='header'>
        <h1>todos</h1>
        <NewTodoInput onAddTodo={onAddTodo} />
      </header>
      <TodoList
        todos={todos}
        activeFilter={activeFilter}
        setTodos={setTodos}
      />
      <Footer
        todos={todos}
        activeFilter={activeFilter}
      />
    </div>
  )
}

export { Todo }
