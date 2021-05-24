export interface Props {
  openModal: React.MouseEventHandler<HTMLDivElement>;
}

function Logout() {
  return (
    <div>
      <i className="fas fa-user-circle fa-2x"></i>
    </div>
  );
}

export default Logout;
