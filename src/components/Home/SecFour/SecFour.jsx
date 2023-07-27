import React from "react";
import k from "./SecFour.module.css";
import one from "./1.svg";
import two from "./2.svg";
import three from "./3.svg";
import four from "./4.svg";
import five from "./5.svg";

function SecFour() {
  return (
    <div className={k.main}>
      <h1 className={k.title}>Leaderboard of the Week</h1>
      <div className={k.imgs}>
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
      </div>
    </div>
  );
}
export default SecFour;
