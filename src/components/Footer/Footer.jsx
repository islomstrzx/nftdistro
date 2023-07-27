import React from "react";
import k from "./Footer.module.css";
import logo from "../../assets/logo1.svg";
import logow from "../../assets/logo2.svg";
import logoa from "../../assets/logo3.svg";
import copy from "./opc.svg";
import as from "./asasa.svg";
import face from "./o.svg";
import twit from "./twit.svg";
import apple from "./apple.svg";
import Goog from "./gog.svg";
function Footer() {
  return (
    <div className={k.footer}>
      <img className={k.log} src={logo} alt="" />
      <img src={logow} className={k.logo} alt="" />
      <img src={logoa} className={k.logow} alt="" />
      <h1 className={k.nft}>NFT Distro</h1>
      <p className={k.exp}>
        Experience the Revolutionary World of Non-Fungible Tokens on Our
        Exclusive NFT Marketplace
      </p>
      <img src={copy} className={k.copyright} alt="" />
      <p className={k.copt}>Copyright NFT Distro 2023 </p>
      <h1 className={k.company}>Company</h1>
      <p className={k.ecplore}>Explore</p>
      <p className={k.about}> About</p>
      <h1 className={k.crreator}>Cretor</h1>
      <p className={k.br}> FAQ</p>
      <p className={k.art}>Become Artist</p>
      <h1 className={k.join}>Join our community</h1>
      <img src={as} alt="" className={k.asa} />
      <div className={k.aqw}>
        <a href="">
          <img className={k.face} src={face} alt="" />
        </a>
        <a href="">
          <img src={twit} alt="" className={k.twit} />
        </a>
        <a href="">
          {" "}
          <img className={k.ggog} src={Goog} alt="" />
        </a>
        <a href="">
          <img src={apple} alt="" className={k.aple} />
        </a>
        {""}
      </div>
    </div>
  );
}

export default Footer;
