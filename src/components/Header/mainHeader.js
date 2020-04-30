import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import logo_navbar from "../../assets/img/DHKH.jpg";
import Search from "./search";
import "./header.css";

function MainHeader() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <header>
      <div className="navbar navbar-light bg-dark wrap-header ">
        <a href="#top" onClick={toggleModal} className="navbar-brand">
          <img
            src={logo_navbar}
            width="50"
            height="50"
            className="rounded-circle"
            alt="logo dhkh"
          />
        </a>
        <Search />
      </div>
      {/* <div className="bg"></div> */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          <span className="onworking-ft">feature masih dalam pengerjaan</span>
        </ModalBody>
      </Modal>
    </header>
  );
}

export default MainHeader;
