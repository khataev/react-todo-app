import type { ITodo } from "./types"

interface IParams {
  todos: Array<ITodo>;
  activeFilter: string;
}

export const Footer = ({ todos, activeFilter }: IParams) => {
  if (todos.length == 0) return;

  const activeItems = todos.filter(item => !item.isCompleted)
  const itemWord = activeItems.length > 1 ? 'items' : 'item'
  const phrase = `${activeItems.length} ${itemWord} left!`;

  return (
    <footer className='footer' >
      <span className="todo-count">{phrase}</span>
      <ul className='filters'>
        <li><a className={activeFilter === 'all' ? 'selected' : undefined} href='#/' data-name='footer-filter-all'>All</a></li>
        <li><a className={activeFilter === 'active' ? 'selected' : undefined} href='#/active' data-name='footer-filter-active'>Active</a></li>
        <li><a className={activeFilter === 'completed' ? 'selected' : undefined} href='#/completed' data-name='footer-filter-completed'>Completed</a></li>
      </ul>
      <button className='clear-completed' data-name='footer-clear-completed'>Clear completed</button>
    </footer>
  )
}