import React from "react";
import { Images } from "../../assets";
import Lottie from "react-lottie-player";

function Button({
  title = "Contact Me",
  icon = Images.SENDING,
  onClick = () => {},
  size = 60,
  padding = false,
}) {
  return (
    <div className={`btn-primary ${padding ? "pr-4" : null}`} onClick={onClick}>
      <p className="flex-shrink-0">{title}</p>
      <Lottie
        loop
        animationData={icon}
        play
        style={{ height: size, width: size }}
      />
    </div>
  );
}

export default Button;
