export interface Props {
  openModal: React.MouseEventHandler<HTMLDivElement>;
}

function SignUpResult({ openModal }: Props) {
  return (
    <div>
      <div onClick={openModal} className="signUpResult">
        회원가입하기
      </div>
    </div>
  );
}

export default SignUpResult;
