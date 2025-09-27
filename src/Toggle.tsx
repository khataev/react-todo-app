export interface IParams {
  visible: boolean;
}

export const Toggle = ({ visible }: IParams) => {
  if (!visible) return null;

  return (
    <div className='toggle-all-container'>
      <input className='toggle-all' type='checkbox' />
      <label className='toggle-all-label' data-name='toggle-toggle-all-label' />
    </div>
  );
}