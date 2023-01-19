import React from "react";
import { Images } from "../../assets";
// import Lottie from "react-lottie";
import Lottie from "react-lottie-player";

function Button({
  title = "Contact Me",
  icon = Images.SENDING,
  onClick = () => {},
  size = 60,
}) {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: icon,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="btn-primary" onClick={onClick}>
      <p className="flex-shrink-0">{title}</p>
      {/* <img src={icon} className="w-[24px] h-[24px]" alt="" /> */}
      {/* <Lottie options={defaultOptions} height={size} width={size} />
       */}
      <Lottie
        loop
        animationData={icon}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
}

export default Button;
