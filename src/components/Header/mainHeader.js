import React, { useState } from "react";
import { Modal, Button } from "reactstrap";
import logo_navbar from "../../assets/img/DHKH.jpg";
import Search from "./search";
import "./header.css";

function MainHeader() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <header>
      <div className="navbar navbar-light bg-white wrap-header ">
        <a href="#top" onClick={toggleModal} className="navbar-brand">
          <img
            src={logo_navbar}
            width="50"
            height="50"
            className="rounded-circle dhkh-header"
            alt="logo dhkh"
          />
        </a>
        <Search />
      </div>
      <div className="line-header"></div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <button
          onClick={toggleModal}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span
            className="float-right"
            style={{ padding: "10px 20px" }}
            aria-hidden="true"
          >
            ×
          </span>
        </button>
        <div className="dhkh-card">
          <div className="img-wrapper">
            <img
              className="rounded-circle igtw-dhkh"
              top
              src={logo_navbar}
              alt="logo DHKH"
            />
          </div>
          <div className="igtw-btn">
            <Button
              href="https://www.instagram.com/darihalte_kehalte/?hl=id"
              target="_blank"
              rel="noopener"
              id="ig"
            >
              Instagram
            </Button>
            <Button
              id="tw"
              href="https://twitter.com/drhaltekehalte"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </Button>
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default MainHeader;
