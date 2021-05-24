import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface State {
  handleLikeBtn: React.MouseEventHandler<SVGSVGElement>;
}

const Like = ({ handleLikeBtn }: State) => {
  return (
    <FontAwesomeIcon
      icon={faHeart}
      size="2x"
      style={{ width: "20px", margin: " 0 10px 0 0 ", cursor: "pointer" }}
      onClick={handleLikeBtn}
    />
  );
};

export default Like;
