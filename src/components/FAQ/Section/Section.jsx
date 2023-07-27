import React from "react";
import k from "./Section.module.css";
import mg from "./NFT.png";
function Section() {
  return (
    <div className={k.main}>
      <h1 className={k.title}>NFT Distro</h1>
      <div className={k.img}>
        <img src={mg} alt="" />
      </div>
    </div>
  );
}

export default Section;
