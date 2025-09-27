import { TodoItem } from './TodoItem'
import { Toggle } from './Toggle';
import { type ITodo } from './types'

interface IParams {
  todos: Array<ITodo>;
  activeFilter: string;
  setTodos: (todos: Array<ITodo>) => void;
}

const filterMap: Record<string, (item: ITodo) => boolean> = {
  all: (_) => true,
  active: (item) => !item.isCompleted,
  completed: (item) => item.isCompleted
}

export const TodoList = ({ todos, activeFilter, setTodos }: IParams) => {
  const filterPredicate = filterMap[activeFilter];

  return (
    <main className='main'>
      <Toggle visible={todos.length > 0} />

      <ul className='todo-list'>
        {todos.map((todo, index) => {
          if (!filterPredicate(todo)) return;

          return <TodoItem
            key={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        })}
      </ul>
    </main>
  )
}
