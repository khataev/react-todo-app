import { useEffect, useRef, useState } from "react";

interface IParams {
  currentValue: string;
  onLeaveEditMode: (newValue: string) => void;
}

export const EditTodoInput = ({ currentValue, onLeaveEditMode }: IParams) => {
  const [newTodoText, setNewTodoText] = useState(currentValue);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value);
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim().length > 1) {
      onLeaveEditMode(newTodoText);
    }
  };
  const handleBlur = () => {
    if (newTodoText.trim().length > 1) onLeaveEditMode(newTodoText);
    else onLeaveEditMode(currentValue);
  };

  return (
    <input
      ref={inputRef}
      type='text'
      className='new-todo'
      value={newTodoText}
      onChange={handleNewTodoChange}
      onKeyDown={handleAddTodo}
      onBlur={handleBlur}
    />
  );
}