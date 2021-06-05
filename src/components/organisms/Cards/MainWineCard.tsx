import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Rating from "../Ratings/Rating";
import WineModal from "../Modal/WineModal";
import dotenv from "dotenv";
import Image from "../../atoms/Imgs/Image";
import wineSample from "../../../img/wine_sample.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

require("dotenv").config();

dotenv.config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

interface WineData {
  randomWine?: any;
  handleLoading: (time: number | undefined) => void;
}

let name: string,
  id: number,
  likeCount: number,
  description: string,
  image: string,
  price: number,
  sort: string,
  tags: object[],
  rating_avg: number;

const MainWineCard = ({ randomWine, handleLoading }: WineData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const ModalEl: any = useRef();
  const history = useHistory();
  const [commentList, setCommentList] = useState<any[]>([]);

  // 확인 확인
  if (randomWine) {
    name = randomWine.name;
    id = randomWine.id;
    likeCount = randomWine.likeCount;
    description = randomWine.description;
    image = process.env.REACT_APP_WINE_IMAGE_URL + randomWine.image;
    price = randomWine.price;
    tags = randomWine.tags;
    sort = randomWine.sort;
    rating_avg = randomWine.rating_avg;
  }
  const landingHandleComments = useCallback(() => {
    if (randomWine) {
      axios
        .get(`${server}comment?wineid=${randomWine.id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((data) => {
          return setCommentList(data.data.data.comments);
        })
        .catch((err) => console.dir(err));
    }
  }, []);

  // const landingHandleComments = async () => {

  // };
  const handleIsClicked = async () => {
    setIsOpen(true);
    landingHandleComments();
  };

  // const guestList = useMemo(() => handleIsClicked, []);

  // console.log("guestList", guestList());

  // const handleUploadImg = () => {
  //   setTimeout(() => setIsUpload(true), 300);
  // };

  useEffect(() => {
    handleLoading(300);
    return () => {
      setIsUpload(false);
    };
  }, [tags]);

  const handleClickOutside = (e: any) => {
    if (isOpen && !ModalEl.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  console.log(tags);

  return (
    <li>
      {randomWine === undefined ? null : (
        <div className={isOpen ? "openWineModal modal" : "modal"}>
          <WineModal
            handleComments={() => landingHandleComments()}
            landingCommentList={commentList}
            randomWine={randomWine}
            price={randomWine.price}
            tags={randomWine.tags}
            id={randomWine.id}
            sort={randomWine.sort}
            likeCount={randomWine.likeCount}
            description={randomWine.description}
            image={process.env.REACT_APP_WINE_IMAGE_URL + randomWine.image}
            name={randomWine.name}
            ModalEl={ModalEl}
          />
        </div>
      )}

      {randomWine === undefined ? null : (
        <div className="mainWineCard" onClick={() => handleIsClicked()}>
          <Rating rating_avg={randomWine.rating_avg} />
          <div className="mainWineProfile">
            {/* <img
              src={image}
              alt="와인"
              className={isUpload ? "wineMainImg" : "wineMainSample"}
            /> */}
            <Image
              src={process.env.REACT_APP_WINE_IMAGE_URL + randomWine.image}
              alt="와인"
              placeholderImg={wineSample}
              className={isUpload ? "wineMainImg" : "wineMainSample"}
            />

            <div className="mainWineContent">

<!--               {randomWine.name.length >= 30 ? (
                <div className="moreThan30">{randomWine.name}</div>
              ) : (
                <div className="lessThan30">{randomWine.name}</div>
              )}
              <p>{randomWine.description}</p> -->

              {name ? (
                name.length >= 30 ? (
                  <div className="moreThan30">{name}</div>
                ) : (
                  <div className="lessThan30">{name}</div>
                )
              ) : null}
              <p>{description}</p>
            </div>
          </div>

          <div className="mainWineData">
            <div className="mainWineType">
              {randomWine.sort === "red"
                ? " 레드"
                : sort === "white"
                ? " 화이트"
                : sort === "rose"
                ? " 로제"
                : sort === "sparkling"
                ? " 스파클링"
                : null}
            </div>
            <div className="mainWineLikeTagBox">
              <div className="mainWineTag">
                {tags.map((tag: any) => {
                  switch (tag.name) {
                    case "body_light":
                      return " #가벼운";
                    case "body_medium":
                      return "";
                    case "body_bold":
                      return " #무거운";
                    case "tannins_smooth":
                      return " #부드러운";
                    case "tannins_medium":
                      return "";
                    case "tannins_tannic":
                      return " #떫은";
                    case "acidity_soft":
                      return " #산미가 적은";
                    case "acidity_medium":
                      return "";
                    case "acidity_acidic":
                      return " #산미가 높은";
                    case "sweetness_dry":
                      return " #씁쓸한";
                    case "sweetness_medium":
                      return "";
                    case "sweetness_sweet":
                      return "#달달한";
                    default:
                      break;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default MainWineCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
