import React from "react";
import k from "./d.module.css";
import Nav from "../NAvbar/NAv";
import S from "../Home/SecFive/SecFive";
import Sx from "../Home/SecSix/SecSix";
import Footer from "../Footer/Footer";
import Form from "react-bootstrap/Form";
function D() {
  return (
    <div>
      <h1 className={k.title}>Discover Amazing NFT’s</h1>
      <br />
      <br />
      <br />
      <br />
      <Form className={k.form}>
        <Form.Group
          className="mb-3 lolo "
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control type="email" placeholder="Search" />
        </Form.Group>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <S />
      <Sx />
    </div>
  );
}

export default D;
