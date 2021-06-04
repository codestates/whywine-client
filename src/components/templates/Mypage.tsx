import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../organisms/Header/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const server = process.env.REACT_APP_SERVER || "https://localhost:4000/";
const imgserver =
  process.env.REACT_APP_USER_IMAGE_URL ||
  "https://whywine-image.s3.us-east-2.amazonaws.com/user/";

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
      setUser({
        ...userInfo,
        image:
          "https://whywine-image.s3.us-east-2.amazonaws.com/user/" +
          userInfo.image,
      });
    }

    console.log(IsOpen);
  }, []);

  const MemberOutClick = () => {
    if (MemberOut) {
      setMemberOut(false);
    } else {
      if (IsOpen) {
        setIsOpen(false);
      }
      setMemberOut(true);
    }
  };

  const EditClick = () => {
    if (IsOpen) {
      setIsOpen(false);
    } else {
      if (MemberOut) {
        setMemberOut(false);
      }
      setIsOpen(true);
    }
  };

  const MemberOutAxios = async () => {
    console.log(Password);
    try {
      const leave = await axios.delete(`${server}userinfo/leave`, {
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
        `${server}userinfo/nickname`,
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
        `${server}userinfo/password`,
        { oldPassword: OldPassword, newPassword: NewPassword },
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error.massege);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    inputRef.current?.click();
  };

  const onChangeImage = async (event: any) => {
    event.preventDefault();
    const img = event.target.files[0];
    console.log(img);
    const formData = await new FormData();
    formData.append("image", event.target.files[0]);
    console.log(formData);
    return axios
      .post(`${server}userinfo/profileimage`, formData, {

        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        const newimg = `${imgserver}` + res.data.data.user.image;
        console.log(newimg);
        setUser({ ...user, image: newimg });

        alert("성공");
      })
      .catch((err) => {
        alert("실패");
      });
  };
  console.log(user.image);

  /* const handleFileInput=(e:any)=>{
    setImageUpload({
      file: e.target.files[0],
    })
  } */
  /* const handlePost=()=>{
    
  } */

  return (
    <>
      <Header
        handleSearchInput={handleSearchInput}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      <div className="MyPageWrap">
        <ul>
          <li>
            <div className="profile">
              <img className="userImage" src={user.image}></img>
              <i className="fas fa-camera" onClick={onButtonClick}></i>
              <input
                className="onChangeImage"
                type="file"
                accept="image/*"
                name="img"
                onChange={(e) => onChangeImage(e)}
                ref={inputRef}
              />
            </div>
          </li>
          {IsOpen ? (
            <li>
              <ul>
                <i className="fas fa-times" onClick={EditClick}></i>
                <li>
                  <input
                    type="text"
                    name="newNickName"
                    placeholder="변경할 닉네임"
                    onChange={NewNickNameInputValue}
                  />
                  <i className="fas fa-check" onClick={EditNickNameAxios}></i>
                </li>
                <li>
                  <input
                    type="password"
                    name="oldPassword"
                    placeholder="이전 비밀번호"
                    onChange={OldPasswordInputValue}
                  />
                </li>
                <li>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="새 비밀번호"
                    onChange={NewPasswordInputValue}
                  />
                  <i className="fas fa-check" onClick={EditPasswordAxios}></i>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <div className="userNickName">{user.nickname}</div>
              <div>{user.email}</div>
              <i className="fas fa-edit" onClick={EditClick}></i>
            </li>
          )}

          {MemberOut ? (
            <li>
              <p>탈퇴 하시겠습니까?</p>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={PasswordInputValue}
              />
              <i className="fas fa-check" onClick={MemberOutAxios}></i>
              <i className="fas fa-times" onClick={MemberOutClick}></i>
            </li>
          ) : (
            <li>
              <i className="fas fa-user-slash" onClick={MemberOutClick}></i>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Mypage;
