import React from "react";
import k from "./Sectionr.module.css";
import founder from "./founder.svg";
import designer from "./designer.svg";
import sd from "./sd.svg";
import ar from "./archtect.svg";
import Manager from "./Manager.svg";
function Sectionr() {
  return (
    <div className={k.main}>
      <h1 className={k.title}>Our Team</h1>
      <div className={k.team}>
        <div className={k.box}>
          <img src={founder} alt="" />
          <h1>Floyd Miles</h1>
          <p>Founder</p>
        </div>
        <div className={k.box}>
          <img src={designer} alt="" />
          <h1>Eleanor Pena</h1>
          <p>UI UX Designer</p>
        </div>
        <div className={k.box}>
          <img src={ar} alt="" />
          <h1>Kiss Dorka</h1>
          <p>Ux Architect</p>
        </div>
        <div className={k.box}>
          <img src={Manager} alt="" />
          <h1>Nagy Tímea</h1>
          <p>Project Manager</p>
        </div>
        <div className={k.box}>
          <img src={sd} alt="" />
          <h1>William Loko</h1>
          <p>Software Developer</p>
        </div>
      </div>
      <div className={k.join}>
        <h1>Interested in joining us?</h1>
        <p>
          We're always looking for passionate individuals to help us achieve our
          goals. Apply today and let's build a better future together.
        </p>
        <button>Join us</button>
      </div>
    </div>
  );
}

export default Sectionr;
