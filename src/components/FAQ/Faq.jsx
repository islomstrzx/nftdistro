import React from "react";
import k from "./Faq.module.css";
import Sectiionw from "./Sectionw/S";
import NAv from "../NAvbar/NAv";
import Footer from "../Footer/Footer";
import a from "./left.svg";
import b from "./right.svg";
import c from "./top.svg";
import ast from "./astronaut.svg";
import ruka from "./ruka.svg";
import cert from "./cert.svg";
import income from "./income.svg";
import raketa from "./raketa.svg";
import wave from "./wave.svg";
import Section from "./Section/Section";
import Sectionr from "./Sectionr/Sectionr";
function Faq() {
  return (
    <div>
      <div></div> {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className={k.box}>
        <div>
          <h5 className={k.top}>NFT MARKETPLACE</h5>
          <h1 className={k.title}>About our Company NFT Distro</h1>
          <p className={k.subtitle}>
            We are a cutting-edge company focused on the creation, promotion,
            and sale of non-fungible tokens (NFTs). Our marketplace offers a
            wide range of NFTs, from digital art and collectibles to gaming
            items and virtual real est ate.
          </p>
        </div>
        <div className={k.img}>
          <img src={a} alt="" className={k.imga} />
          <img src={b} alt="" className={k.imgq} />
          <img src={c} alt="" className={k.imgw} />
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className={k.main}>
        <img src={wave} alt="" className={k.wave} />
        <img src={ast} alt="" className={k.astronaut} />
        <h1 className={k.ast}>
          We believe that NFTs represent the future of digital ownership and are
          excited to provide our customers with access to this revolutionary new
          market. Our platform is user-friendly and easy to navigate, making it
          simple for creators to upload and sell their NFTs and for buyers to
          discover and purchase unique digital assets.
        </h1>
        <div className={k.df}>
          <div className={k.one}>
            <img src={raketa} alt="" />{" "}
            <h1 className={k.yyy}>
              23.400 <br />
              NFT’s
            </h1>
          </div>
          <div className={k.two}>
            <img src={cert} alt="" />
            <h1 className={k.yyy}>
              8.000 <br />
              Collections
            </h1>
          </div>
          <div className={k.three}>
            <img src={ruka} alt="" />
            <h1 className={k.yyy}>
              3,400 <br />
              Creators
            </h1>
          </div>
          <div className={k.four}>
            <img src={income} alt="" />
            <h1 className={k.yyy}>
              3,400 <br />
              Volurme
            </h1>
          </div>
        </div>
      </div>
      <Section />
      <Sectiionw />
      <Sectionr />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div></div>
    </div>
  );
}

export default Faq;
