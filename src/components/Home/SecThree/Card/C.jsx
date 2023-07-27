import React from "react";
import k from "./C.module.css";
import bid from "../../SecTwo/etherium.svg";
import oo from "../../SecTwo/pepr.svg";
import one from "../../SecTwo/1.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function C(props) {
  return (
    <div className={k.main}>
      <img src={props.uol} alt="" className={k.mainimg} />
      <img src={oo} alt="" className={k.avatar} />
      <h2 className={k.name}>Perperzon</h2>
      <h1 className={k.title}>ExBoot #1</h1>
      <p className={k.subtitle}>
        We would like to present you The Exboot 3D - Watching you~
      </p>
      <h4 className={k.mainbidstsus}>Current Bid</h4>
      <img className={k.mainbid} src={bid} alt="" />
      <h4 className={k.end}>End in</h4>
      <h3 className={k.in}>1h 12m 14s</h3>
      <Button className={k.nana}>
        <a href={props.ti}>Place Bid</a>
      </Button>
    </div>
  );
}

export default C;
