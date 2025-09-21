import './App.css'
import { TodoItem } from './TodoItem'
import { Toggle } from './Toggle';
import { type ITodo } from './types'

interface IParams {
  todos: Array<ITodo>;
  onRemove: (id: string) => void;
  onToggleCompletion: (id: string) => void;
  onToggleAll: () => void;
}

export const TodoList = ({ todos, onRemove, onToggleCompletion, onToggleAll }: IParams) => {
  return (
    <main className='main'>
      <Toggle visible={todos.length > 0} onClick={onToggleAll} />

      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={onRemove}
            onToggleCompletion={onToggleCompletion}
          />
        ))}
      </ul>
    </main>
  )
}
