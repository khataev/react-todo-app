import type { ITodo } from './types';

export interface IParams {
  todo: ITodo;
  onEnterEditMode: () => void;
}

export const TodoItemView = ({ todo, onEnterEditMode }: IParams) => {
  const { id, text, isCompleted } = todo;

  return (
    <li className={isCompleted ? 'completed' : undefined} onDoubleClick={onEnterEditMode}>
      <div className='view'>
        <input className='toggle' type='checkbox' data-name='todo-item-view-toggle' data-id={id} checked={isCompleted} />
        <label>{text}</label>
        <button className='destroy' data-name='todo-item-view-destroy' data-id={id} />
      </div>
    </li>
  )
}
