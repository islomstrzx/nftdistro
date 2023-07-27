import React from "react";
import a from "./Nav.module.css";
import Lo from "../../assets/logo1.svg";
import Log from "../../assets/logo2.svg";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo3.svg";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
function NAv() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={a.main}>
      <div className={a.nav}>
        <a href="http://localhost:5174/" className={a.logo}>
          <img src={Lo} alt="" />
          <img src={Log} alt="" />
          <img src={Logo} alt="" />
        </a>
        <Form className={a.form}>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Search" />
          </Form.Group>
        </Form>
        <div className={a.navlnk}>
          <li>
            <NavLink to="http://localhost:5174">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Discover">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Become">Become Artist</NavLink>
          </li>{" "}
        </div>
      </div>
    </div>
  );
}

export default NAv;
