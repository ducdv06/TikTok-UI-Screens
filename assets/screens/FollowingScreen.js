import React from "react";
import VideoScreen from "./VideoScreen";

export default function FollowingScreen() {
  return (
    <VideoScreen
      image={require("../img/following-bg.png")}
      user="karennne"
      likes="4445"
    />
  );
}
