import type { ITodo } from './types';

export interface IParams {
  todo: ITodo;
  onRemove: (id: string) => void;
  onToggleCompletion: (id: string) => void;
  onEnterEditMode: () => void;
}

export const TodoItemView = ({ todo, onRemove, onToggleCompletion, onEnterEditMode }: IParams) => {
  const { id, text, isCompleted } = todo;

  return (
    <li className={isCompleted ? 'completed' : undefined} onDoubleClick={onEnterEditMode}>
      <div className='view'>
        <input className='toggle' type='checkbox' onChange={() => onToggleCompletion(id)} checked={todo.isCompleted} />
        <label>{text}</label>
        <button className='destroy' onClick={() => onRemove(id)} />
      </div>
    </li>
  )
}
