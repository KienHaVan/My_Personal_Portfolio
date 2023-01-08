import React from "react";
import { Images } from "../../assets";

function Button({
  title = "Contact Me",
  icon = Images.SEND,
  onClick = () => {},
}) {
  return (
    <div className="btn-primary" onClick={onClick}>
      <p>{title}</p>
      <img src={icon} className="w-[24px] h-[24px]" />
    </div>
  );
}

export default Button;
