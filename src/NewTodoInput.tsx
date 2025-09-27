import { useEffect, useRef, useState } from "react";

interface IParams {
  onAddTodo: (text: string) => void;
}

export const NewTodoInput = ({ onAddTodo }: IParams) => {
  const [newTodoText, setNewTodoText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value);
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim().length > 1) {
      onAddTodo(newTodoText);
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