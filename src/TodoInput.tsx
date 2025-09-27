import { useEffect, useRef, useState } from "react";
import type { ITodo } from "./types";

interface IParams {
  todos: Array<ITodo>;
  todo?: ITodo;
  isEditMode: boolean;
  placeholder?: string;
  defaultValue?: string;
  setTodos: (todos: Array<ITodo>) => void;
  onLeaveEditMode?: () => void;
}

export const TodoInput = ({ isEditMode, defaultValue = '', placeholder, todos, todo, setTodos, onLeaveEditMode }: IParams) => {
  const [newTodoText, setNewTodoText] = useState(defaultValue)
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value);
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim().length > 1) {
      if (isEditMode) {
        todo!.text = newTodoText;
        setTodos([...todos]);
        onLeaveEditMode?.();
      } else {
        const newTodo = { id: crypto.randomUUID(), text: newTodoText, isCompleted: false };
        setTodos([newTodo, ...todos])
        setNewTodoText('');
      }
    }
  };
  const handleBlur = () => {
    if (!isEditMode) return;

    todo!.text = newTodoText;
    setTodos([...todos]);
    onLeaveEditMode?.();
  };

  return (
    <input
      ref={inputRef}
      type='text'
      className='new-todo'
      placeholder={placeholder}
      value={newTodoText}
      onChange={handleNewTodoChange}
      onKeyDown={handleAddTodo}
      onBlur={handleBlur}
    />
  );
}