import React from "react";
import { Button } from "react-bootstrap";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";
import seven from "./7.png";
import eight from "./8.png";
import nine from "./9.png";
import ten from "./10.png";
import eleven from "./11.png";
import twelve from "./12.png";
import peper from "./Perperzon.svg";
import Rich from "./Richi.svg";
import Anton from "./Antonson.svg";
import Ander from "./Anderson.svg";
import bid from "./biid.svg";
import michel from "./michel.svg";
import k from "./SecFive.module.css";
import Card from "./Cardto/Card";
import { NavLink } from "react-router-dom";

function SecFive() {
  return (
    <div>
      <div className={k.dd}>
        <h1 className={k.title}>Explore</h1>
        <button className={k.btn}>Recently Added</button>
      </div>
      <div className={k.aa}>
        <div className={k.wrappe}>
          <Card
            url=" http://localhost:5173/src/components/Home/SecFive/1.png"
            logo="http://localhost:5173/src/components/Home/SecTwo/pepr.svg"
            title="ExBoot #1"
            name="Perperzon"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/2.png"
            logo=" http://localhost:5173/src/components/Home/SecFive/Antonson.svg"
            title="ExBoot #2"
            name="Antonson"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/3.png"
            logo=" http://localhost:5173/src/components/Home/SecFive/michel.svg"
            title="Future of Polygon X"
            name="Michael"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/4.png"
            logo="http://localhost:5173/src/components/Home/SecFive/Anderson.svg"
            title="Blue Wave #2"
            name="Anderson"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/5.png"
            logo=" http://localhost:5173/src/components/Home/SecFive/michel.svg"
            title="ExBoot #1"
            name="Michael"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/6.png"
            logo=" http://localhost:5173/src/components/Home/SecTwo/Richi.svg"
            title="ExBoot #2"
            name="Richard "
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/7.png"
            logo="http://localhost:5173/src/components/Home/SecFive/Anderson.svg"
            title="Future of Polygon X"
            name="Anderson"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/8.png"
            logo=" http://localhost:5173/src/components/Home/SecFive/Antonson.svg"
            title="Blue Wave #2"
            name="Antonson"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/9.png"
            logo="http://localhost:5173/src/components/Home/SecTwo/pepr.svg"
            title="ExBoot #1"
            name="Perperzon"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/10.png"
            logo=" http://localhost:5173/src/components/Home/SecFive/Antonson.svg"
            title="ExBoot #2"
            name="Antonson"
          />
          <Card
            url=" http://localhost:5173/src/components/Home/SecFive/11.png"
            logo=" http://localhost:5173/src/components/Home/SecFive/michel.svg"
            title="Future of Polygon X"
            name="Michael"
          />
          <Card
            url="http://localhost:5173/src/components/Home/SecFive/12.png"
            logo=" http://localhost:5173/src/components/Home/SecTwo/Richi.svg"
            title="Blue Wave #2"
            name="Richard "
          />
        </div>
      </div>
      <div className={k.ntn}>
        <a href="/discover">Discover</a>
      </div>
    </div>
  );
}

export default SecFive;
