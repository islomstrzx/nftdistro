import React from "react";
import k from "./Upload.module.css";
import NAv from "../NAvbar/NAv";
import Footer from "../Footer/Footer";
import { Accordion, Form } from "react-bootstrap";
import gaf from "./nnft.svg";
import q from "./q.svg";
function Upload() {
  return (
    <div>
      <h1 className={k.create}>Create new NFT</h1>

      <div className={k.margin}>
        <div>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload your NFt</Form.Label>
            <Form.Control
              type="file"
              size="lg"
              className={k.forma}
              bool={false}
            />
          </Form.Group>
        </div>
        <div className={k.width}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NFT Name</Form.Label>
              <Form.Control type="email" placeholder="Name NFT" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Descrption" />
            </Form.Group>
          </Form>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <img src={q} alt="" className={k.aass} />
                Collection
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <button className={k.btn} type="submit">
        Create
      </button>
      <img className={k.sas} src={gaf} alt="" />
    </div>
  );
}

export default Upload;
