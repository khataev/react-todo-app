import './App.css'

export interface ITodo { id: string, text: string }
export interface IParams { todo: ITodo, handleDestroy: (id: string) => void }

function TodoItem({ todo, handleDestroy }: IParams) {
  const { id, text } = todo;

  return (
    <li>
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>{text}</label>
        <button className='destroy' onClick={() => handleDestroy(id)} />
      </div>
    </li>
  )
}

export { TodoItem }
