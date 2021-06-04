export interface Props {
  openModal: React.MouseEventHandler<HTMLDivElement>;
}

function SignUpBtn({ openModal }: Props) {
  return (
    <div>
      <span
        className="signUpBtn"
        onClick={openModal}
        // style={{ fontSize: "10px" }}
      >
        아직 whywine 회원이 아니신가요?
      </span>
    </div>
  );
}

export default SignUpBtn;
