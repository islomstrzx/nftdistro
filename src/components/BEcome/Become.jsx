import React from "react";
import k from "./Become.module.css";
import NAv from "../NAvbar/NAv";
import Footer from "../Footer/Footer";
import one from "./1.svg";
import two from "./2.svg";
import three from "./3.svg";
import four from "./4.svg";
import a from "./one.png";
import b from "./twe.png";
import c from "./f.png";
function Become() {
  return (
    <div>
      <div className={k.main}>
        <img className={k.one} src={one} alt="" />
        <img src={two} alt="" className={k.two} />
        <img src={three} alt="" className={k.three} />
        <img src={four} alt="" className={k.four} />

        <h1 className={k.title}>Become Artist</h1>
        <p className={k.subtitle}>
          Welcome to the world of NFTs, Creator! We're excited to see your
          unique digital assets come to life. Create, share, and let your
          imagination run wild.
        </p>
        <button className={k.btnn}>
          <a href="/Upload">Upload</a>
        </button>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <div className={k.first}>
        <img src={a} alt="" className={k.img} />

        <div className={k.box}>
          <h1 className={k.boxtiitle}>Create your NFT</h1>
          <p className={k.boxsub}>
            Use a program such as Adobe Photoshop, Illustrator, or Procreate to
            create a digital asset. Make sure the image is in a supported file
            format (e.g. JPEG, PNG, GIF).
          </p>
          <button className={k.but}>Learn More</button>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      <div className={k.second}>
        {" "}
        <div className={k.boxtwo}>
          <h1 className={k.tit}>Upload your NFT</h1>
          <p className={k.boxs}>
            Once you've chosen a marketplace, sign up for an account and upload
            your NFT. You will likely need to provide a title, description, and
            tags for your asset, as well as set a price.
          </p>

          <button className={k.nnn}>Learn More</button>
        </div>
        <img src={b} alt="" className={k.imgtwo} />
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className={k.third}>
        {" "}
        <img src={c} alt="" className={k.imgthree} />{" "}
        <div className={k.boxthird}>
          <h1 className={k.titt}>Share your NFT</h1>
          <p className={k.sub}>
            After your NFT is uploaded and for sale, share it on social media
            and other platforms to help promote it and attract buyers.
          </p>
          <button className={k.btn}>Learn More</button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Become;
