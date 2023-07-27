import React from "react";
import k from "./SecThree.module.css";
import C from "./Card/C";
function SecThree() {
  return (
    <div>
      <h1 className={k.title}>Featured Collections</h1>
      <div className={k.df}>
        <div>
          <C uol="http://localhost:5173/src/components/Home/SecTwo/1.png" ti="/b" />
        </div>
        <div>
          <C uol="http://localhost:5173/src/components/Home/SecTwo/2.png" ti="/a" />
        </div>
      </div>
    </div>
  );
}

export default SecThree;
