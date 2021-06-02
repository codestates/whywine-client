import React,{ useState, useEffect, useCallback, useMemo } from "react";
import Header from "../organisms/Header/Header";
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

// interface User {
//   id: number
//   email: string
//   nickname: string
//   image: string
//   good: number[]
//   bad: number[]
//   likes: number
//   tags: number[]
//   wines: number[]
// }

function Mypage() {
  const handleSearchInput = (e: any) => {};
  const handleClickSearchBtn = () => {};
  const [user, setUser] = useState({
    id: 0,
    email: '',
    nickname: '',
    image: '',
    good: [],
    bad: [],
    likes: 0,
    tags: [],
    wines: [],
  });

let userInfo:any
  
  useEffect(() => {
    if(localStorage.getItem("userInfo")) {
      userInfo = localStorage.getItem("userInfo")
      userInfo = JSON.parse(userInfo)
      setUser(userInfo)
    }

  },[])

  return (
    <div>
      <Header
        handleSearchInput={handleSearchInput}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      <div className="MyPageWrap">
        <ul>
          <li>
            <img className="userImage" src={user.image}></img>
            <div className="userNickName">닉네임</div>
          </li>
          <li>
            <div>이메일</div>
            <div>비밀번호</div>
            <div>사진</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mypage;
