import React, { useState, useEffect, useCallback, useMemo } from "react";
import Header from "../organisms/Header/Header";
import axios from "axios";
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
    email: "",
    nickname: "",
    image: "",
    good: [],
    bad: [],
    likes: 0,
    tags: [],
    wines: [],
  });
  const [IsOpen, setIsOpen] = useState(false);
  const [MemberOut, setMemberOut] = useState(false);
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewNickName, setNewNickName] = useState("");
  const [Password, setPassword] = useState("");

  const PasswordInputValue = (e: any) => {
    setPassword(e.target.value);
  };

  const OldPasswordInputValue = (e: any) => {
    setOldPassword(e.target.value);
  };

  const NewPasswordInputValue = (e: any) => {
    setNewPassword(e.target.value);
  };

  const NewNickNameInputValue = (e: any) => {
    setNewNickName(e.target.value);
  };

  let userInfo: any;

  useEffect(() => {
    if (sessionStorage.getItem("userInfo")) {
      userInfo = sessionStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      setUser(userInfo);
    }
    console.log(IsOpen);
  }, []);

  const MemberOutClick = () => {
    if (MemberOut) {
      setMemberOut(false);
    } else {
      setMemberOut(true);
    }
  };

  const EditClick = () => {
    if (IsOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const ImgEditAxios = async () => {};
  const MemberOutAxios = async () => {
    console.log(Password);
    try {
      const leave = await axios.delete(`${server}/userinfo/leave`, {
        data: { password: Password },
        withCredentials: true,
      });
      console.log(leave);
      if (leave.data.massege === "ok") {
        //로그아웃
        //탈퇴 완료 메세지
        //페이지 이동
      }
    } catch (error) {
      console.error(error.massege);
    }
  };
  const EditNickNameAxios = async () => {
    try {
      await axios.post(
        `${server}/userinfo/nickname`,
        { newNickname: NewNickName },
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error.massege);
    }
  };
  const EditPasswordAxios = async () => {
    try {
      await axios.post(
        `${server}/userinfo/password`,
        { oldPassword: OldPassword, newPassword: NewPassword },
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error.massege);
    }
  };

  return (
    <>
      <Header
        handleSearchInput={handleSearchInput}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      <div className="MyPageWrap">
        <ul>
          {IsOpen ? (
            <li>
              <i className="fas fa-times" onClick={EditClick}></i>
              <div className="profile">
                <img className="userImage" src={user.image}></img>
                <i className="fas fa-camera" onClick={ImgEditAxios}></i>
              </div>
              <div>
                <input
                  type="text"
                  name="newNickName"
                  placeholder="변경할 닉네임"
                  onChange={NewNickNameInputValue}
                />
                <i className="fas fa-check" onClick={EditNickNameAxios}></i>
              </div>

              <input
                type="password"
                name="oldPassword"
                placeholder="이전 비밀번호"
                onChange={OldPasswordInputValue}
              />

              <div>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="새 비밀번호"
                  onChange={NewPasswordInputValue}
                />
                <i className="fas fa-check" onClick={EditPasswordAxios}></i>
              </div>
            </li>
          ) : (
            <li>
              <div className="profile">
                <img className="userImage" src={user.image}></img>
                <i className="fas fa-camera" onClick={ImgEditAxios}></i>
              </div>
              <div className="userNickName">{user.nickname}</div>
              <div>이메일 : {user.email}</div>
              <i className="fas fa-edit" onClick={EditClick}></i>
            </li>
          )}

          {MemberOut ? (
            <div>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={PasswordInputValue}
              />
              <p>탈퇴 하시겠습니까?</p>
              <i className="fas fa-check" onClick={MemberOutAxios}></i>
              <i className="fas fa-times" onClick={MemberOutClick}></i>
            </div>
          ) : (
            <i className="fas fa-user-slash" onClick={MemberOutClick}>
              회원탈퇴 호버로 띄우기
            </i>
          )}
        </ul>
      </div>
    </>
  );
}

export default Mypage;
