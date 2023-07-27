import React from "react";
import k from "./Card.module.css";
import bidd from "../biid.svg";
function Card(props) {
  return (
    <div className={k.div}>
      <img className={k.img} src={props.url} alt="" />
      <h1 className={k.title}>{props.title}</h1>
      <img className={k.ava} src={props.logo} alt="" />
      <h3 className={k.name}>{props.name}</h3>
      <p className={k.biid}>Current Bid</p>
      <img src={bidd} alt="" className={k.biiiid} />
    </div>
  );
}

export default Card;
