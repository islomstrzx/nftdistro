import React from "react";
import k from "./S.module.css";
import { Button } from "react-bootstrap";
import ss from "./ss.png";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

import { useState } from "react";
function S() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={k.secone}>
      <img src={ss} alt="" className={k.img} />
      <h1 className={k.subtitle}>WEB 3 NON-FUNGIBLE TOKENS</h1>
      <h1 className={k.title}>Unlock Unique Digital Ownership with NFTs</h1>

      <p className={k.sub}>
        Experience the Revolutionary World of Non-Fungible Tokens on Our
        Exclusive NFT Marketplace
      </p>
      <Button className={k.ntn} onClick={handleShow}>
        {" "}
        Connect Wallet
      </Button>
      <Modal show={show} onHide={handleClose} centered className={k.moodal}>
        <Modal.Header closeButton>
          <Modal.Title className={k.qw}>Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body className={k.modalbody}>
          <button className={k.wa}>Connect Wallet A</button>
          <button className={k.wb}>Connect Wallet B</button>
          <button className={k.wc}>Connect Wallet C</button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default S;
