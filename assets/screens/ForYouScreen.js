import React from "react";
import VideoScreen from "./VideoScreen";

export default function ForYouScreen() {
  return (
    <VideoScreen
      image={require("../img/home-bg.png")}
      user="craig_love"
      likes="328K"
    />
  );
}
