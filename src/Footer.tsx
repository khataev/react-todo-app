import type { ITodo } from "./types"

interface IParams {
  todos: Array<ITodo>
  activeFilter: string,
  setActiveFilter: (filter: string) => void;
  onCompleteAll: () => void;
}

export const Footer = ({ todos, activeFilter, setActiveFilter, onCompleteAll }: IParams) => {
  if (todos.length == 0) return;

  const activeItems = todos.filter(item => !item.isCompleted)
  const itemWord = activeItems.length > 1 ? 'items' : 'item'
  const phrase = `${activeItems.length} ${itemWord} left!`;

  return (
    <footer className='footer' >
      <span className="todo-count">{phrase}</span>
      <ul className='filters'>
        <li><a className={activeFilter === 'all' ? 'selected' : undefined} href='#/' onClick={() => setActiveFilter('all')}>All</a></li>
        <li><a className={activeFilter === 'active' ? 'selected' : undefined} href='#/active' onClick={() => setActiveFilter('active')}>Active</a></li>
        <li><a className={activeFilter === 'completed' ? 'selected' : undefined} href='#/completed' onClick={() => setActiveFilter('completed')}>Completed</a></li>
      </ul>
      <button className='clear-completed' onClick={onCompleteAll}>Clear completed</button>
    </footer>
  )
}