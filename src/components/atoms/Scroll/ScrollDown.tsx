import React, { useState, useEffect } from "react";

const ScrollDown = () => {
  const [scroll, setScroll] = useState(false);
  const handleScrollDown = () => {
    setScroll(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  });
  return (
    <div className="scroll-down-main">
      <div>
        <i className="fas fa-angle-down animated bounce"></i>
      </div>
    </div>
  );
};

export default ScrollDown;
