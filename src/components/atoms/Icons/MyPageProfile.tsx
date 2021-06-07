import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function MyPageProfile() {
  return (
    <FontAwesomeIcon icon={faUserCircle} size="10x" className="userImage" />
  );
}
