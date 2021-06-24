export interface Props {
  openModal: React.MouseEventHandler<HTMLDivElement>;
}

function SignIn({ openModal }: Props) {
  return (
    <div onClick={openModal}>
      <div>로그인</div>
    </div>
  );
}

export default SignIn;
