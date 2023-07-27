import React from "react";
import k from "./SecTwo.module.css";
import rich from "./Richi.svg";
import one from "./1.png";
import pep from "./pepr.svg";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import bid from "./ethereum.svg";
function SecTwo() {
  return (
    <div className={k.main}>
      <h1 className={k.title}>Trending Art 🔥</h1>
      <div className={k.df}>
        <div className={k.box}>
          <img className={k.imgone} src={one} />
          <h3 className={k.name}>ExBoot #2</h3>
          <img className={k.portret} src={rich} />

          <h3 className={k.nameport}>Richard </h3>

          <div className={k.bidd}>
            <p className={k.bidc}>Current Bid</p>
            <img className={k.imgbid} src={bid} alt="" />
            <p className={k.proce}>3,421</p>
          </div>
        </div>
        <div className={k.boxone}>
          <img className={k.imgone} src={two} />
          <h3 className={k.name}>ExBoot #1</h3>
          <img className={k.portret} src={pep} />

          <h3 className={k.nameport}>Perperzon </h3>
          <div className={k.bidd}>
            <p className={k.bidc}>Current Bid</p>
            <img className={k.imgbid} src={bid} alt="" />
            <p className={k.proce}>3,421</p>
          </div>
        </div>

        <div className={k.boxthree}>
          <img className={k.imgone} src={three} />
          <h3 className={k.name}>Future of Polygon X</h3>
          <img className={k.portret} src={rich} />

          <h3 className={k.nameport}>Richard </h3>
          <div className={k.bidd}>
            <p className={k.bidc}>Current Bid</p>
            <img className={k.imgbid} src={bid} alt="" />
            <p className={k.proce}>3,421</p>
          </div>
        </div>
        <div className={k.boxfour}>
          <img className={k.imgone} src={four} />
          <h3 className={k.name}>Blue Wave #2</h3>
          <img className={k.portret} src={pep} />
          <h3 className={k.nameport}>Perperzon </h3>
          <div className={k.bidd}>
            <p className={k.bidc}>Current Bid</p>
            <img className={k.imgbid} src={bid} alt="" />
            <p className={k.proce}>3,421</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecTwo;
