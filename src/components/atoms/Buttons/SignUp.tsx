export interface Props {
  openModal: React.MouseEventHandler<HTMLDivElement>;
}

function SignUp({ openModal }: Props) {
  return (
    <div>
      <div onClick={openModal} style={{ marginRight: "10px" }}>
        회원가입
      </div>
    </div>
  );
}

export default SignUp;
