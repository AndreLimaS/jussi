import React from "react";
import load from "../../styles/Animations/loading.json";
import Lottie from "react-lottie";

const Animation = ({ isPaused }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isPaused={isPaused}
    />
  );
};

export default Animation;
