import { useEffect, useRef, useState } from "react";
import type { ITodo } from "./types";

interface IParams {
  todos: Array<ITodo>;
  setTodos: (todos: Array<ITodo>) => void;
}

export const NewTodoInput = ({ todos, setTodos }: IParams) => {
  const [newTodoText, setNewTodoText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value);
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim().length > 1) {
      const newTodo = { id: crypto.randomUUID(), text: newTodoText, isCompleted: false };
      setTodos([newTodo, ...todos])
      setNewTodoText('');
    }
  };

  return (
    <input
      ref={inputRef}
      type='text'
      className='new-todo'
      placeholder='What needs to be done?'
      value={newTodoText}
      onChange={handleNewTodoChange}
      onKeyDown={handleAddTodo}
    />
  );
}