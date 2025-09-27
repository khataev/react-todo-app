import { useState } from 'react';
import { TodoItemView } from './TodoItemView';
import type { ITodo } from './types';
import { EditTodoInput } from './EditTodoInput';
interface IParams {
  todo: ITodo;
  todos: Array<ITodo>;
  setTodos: (todos: Array<ITodo>) => void;
}

export const TodoItem = ({ todo, todos, setTodos }: IParams) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEnterEditMode = () => setIsEdit(true);
  const onLeaveEditMode = (newValue: string) => {
    todo.text = newValue;
    setTodos([...todos]);
    setIsEdit(false);
  };

  if (isEdit) return <EditTodoInput currentValue={todo.text} onLeaveEditMode={onLeaveEditMode} />;

  return (
    <TodoItemView
      todo={todo}
      onEnterEditMode={onEnterEditMode}
    />
  )
}
