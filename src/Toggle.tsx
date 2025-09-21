export interface IParams {
  visible: boolean;
  onClick: () => void;
}

export const Toggle = ({ visible, onClick }: IParams) => {
  if (!visible) return null;

  return (
    <div className='toggle-all-container' onClick={onClick}>
      <input className='toggle-all' type='checkbox' />
      <label className='toggle-all-label' />
    </div>
  );
}