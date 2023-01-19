import React from "react";
import { Images } from "../../assets";
import Lottie from "react-lottie-player";

function Button({
  title = "Contact Me",
  icon = Images.SENDING,
  onClick = () => {},
  size = 60,
}) {
  return (
    <div className="btn-primary" onClick={onClick}>
      <p>{title}</p>
      <Lottie
        loop
        animationData={icon}
        play
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export default Button;
