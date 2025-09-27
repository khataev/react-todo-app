import { useState } from 'react';
import { TodoItemView } from './TodoItemView';
import type { ITodo } from './types';
import { TodoInput } from './TodoInput';

export interface IParams {
  todo: ITodo;
  onRemove: (id: string) => void;
  onToggleCompletion: (id: string) => void

  // For TodoInput
  todos: Array<ITodo>;
  setTodos: (todos: Array<ITodo>) => void;
}

export const TodoItem = ({ todo, onRemove, onToggleCompletion, todos, setTodos }: IParams) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEnterEditMode = () => setIsEdit(true);
  const onLeaveEditMode = () => setIsEdit(false);

  if (isEdit) return (
    <TodoInput
      isEditMode={isEdit}
      todos={todos}
      todo={todo}
      setTodos={setTodos}
      defaultValue={todo.text}
      onLeaveEditMode={onLeaveEditMode}
    />
  )

  return (
    <TodoItemView
      todo={todo}
      onRemove={onRemove}
      onToggleCompletion={onToggleCompletion}
      onEnterEditMode={onEnterEditMode}
    />
  )
}
