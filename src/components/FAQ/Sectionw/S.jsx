import React from "react";
import k from "./S.module.css";
import j from "./logo.svg";
import w from './w.svg'
import a from './a.svg'
import s from './s.svg'
import d from './d.svg'
import f from './f.svg'
import g from './g.svg'
import h from './h.svg'


function S() {
  return (
    <div className={k.main}>
      <h1 className={k.title}>Our Partners</h1>
      <div className={k.div}>
        <img src={j} alt="" />
        <img src={w} alt="" />
        <img src={a} alt="" />
        <img src={s} alt="" />
        <img src={d} alt="" />
        <img src={g} alt="" />
        <img src={j} alt="" />
        <img src={h} alt="" />
        <img src={d} alt="" />
        <img src={h} alt="" />
      </div>
    </div>
  );
}

export default S;
