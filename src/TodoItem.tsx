import './App.css'
import type { ITodo } from './types';

export interface IParams {
  todo: ITodo;
  onRemove: (id: string) => void;
  onToggleCompletion: (id: string) => void
}

export function TodoItem({ todo, onRemove, onToggleCompletion }: IParams) {
  const { id, text, isCompleted } = todo;

  return (
    <li className={isCompleted ? 'completed' : undefined} >
      <div className='view'>
        <input className='toggle' type='checkbox' onClick={() => onToggleCompletion(id)} />
        <label>{text}</label>
        <button className='destroy' onClick={() => onRemove(id)} />
      </div>
    </li >
  )
}
