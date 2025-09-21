import './App.css'
import { TodoItem, type ITodo } from './TodoItem'


interface IParams { todos: Array<ITodo>, destroyTodo: (id: string) => void }

const TodoList = ({ todos, destroyTodo }: IParams) => {
  return (
    <main className='main'>
      <ul className='todo-list'>
        {
          todos.map((todo, index) => {

            return <TodoItem
              key={index}
              todo={todo}
              handleDestroy={destroyTodo} />
          })}
      </ul>
    </main>
  )
}

export { TodoList }
