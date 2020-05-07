import React, { useState } from "react";
import { Modal, Button } from "reactstrap";

import logo_navbar from "../../assets/img/DHKH.jpg";
import "./index.css";

export default function Footer() {
  const [myProfileModal, setMyProfileModal] = useState(false);
  const myProfile = () => setMyProfileModal(!myProfileModal);

  const [dhkhModal, setDhkhModal] = useState(false);
  const dhkh = () => setDhkhModal(!dhkhModal);
  return (
    <>
      <footer>
        <div className="line-footer"></div>
        <div
          className="navbar navbar-light bg-white wrap-dhkh-footer"
          onClick={dhkh}
        >
          <p> data source && inspired by</p>
          <a href="#top" className="navbar-brand">
            <img
              src={logo_navbar}
              width="35"
              height="35"
              className="rounded-circle dhkh-header"
              alt="logo dhkh"
            />
          </a>
        </div>
        <div
          className="navbar navbar-light bg-white wrap-myfooter "
          onClick={myProfile}
        >
          <p> &copy; 2020</p>
          <p> azkanurfadillah@gmail.com</p>
          <p id="azkaka"> @azkaka</p>
        </div>
      </footer>

      <Modal isOpen={myProfileModal} toggle={myProfile}>
        <button
          onClick={myProfile}
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
        <div className="myprofile-card">
          <h4>Your feedback is so precious to me :&#41;</h4>
          <h6>hit me up on my dm's or feel free to send me email</h6>
          <div className="profile-btn">
            <Button
              href="https://www.instagram.com/azkaka/?hl=id"
              target="_blank"
              rel="noopener"
              id="my-ig"
            >
              Instagram
            </Button>
            <Button id="email" href="#top" rel="noopener">
              azkanurf.dhkh@gmail.com
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={dhkhModal} toggle={dhkh}>
        <button
          onClick={dhkh}
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
    </>
  );
}
