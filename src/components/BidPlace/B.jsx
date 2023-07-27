import React from "react";
import k from "./B.module.css";
import Nav from "../NAvbar/NAv";
import Footer from "../Footer/Footer";
import Ex from "./Exbot.png";
import rich from "./richard.svg";
import mich from "./michel.svg";
import f from "./bid.svg";
function B() {
  return (
    <div>
      <div className={k.main}>
        <img className={k.ex} src={Ex} alt="" />
        <h1 className={k.title}>ExBoot #1</h1>
        <p className={k.date}>30.06.2023</p>
        <p className={k.col}>Collection</p>
        <div className={k.rirch}>
          <img src={rich} className={k.michava} alt="" />
          <h1 className={k.name}>Richard</h1>
        </div>
        <p className={k.creator}> Creator</p>
        <div className={k.mich}>
          <img className={k.michava} src={mich} alt="" />
          <h1 className={k.name}>Michel</h1>
        </div>
      </div>
      <h3 className={k.de}>Description</h3>
      <p className={k.descr}>
        We would like to present you The Exboot 3D - Watching you~ a digital
        collectible that utilizes blockchain technology to prove authenticity
        and scarcity. A must-have for any futuristic art enthusiast.
      </p>
      <p className={k.bid}>Current Bid</p>
      <img className={k.f} src={f} alt="" />
      <p className={k.end}>End in</p>
      <h3 className={k.hour}>1h 12m 14s</h3>
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default B;
