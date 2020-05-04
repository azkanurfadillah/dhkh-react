import React, { useState } from "react";
import { Modal, Button } from "reactstrap";

import { myprofpic } from "../../assets/img/DHKH.jpg";
import "./index.css";

export default function Footer() {
  const [modal, setModal] = useState(false);
  const ModalMyProfile = () => setModal(!modal);
  return (
    <>
      <footer>
        <div className="line-footer"></div>
        <div
          className="navbar navbar-light bg-white wrap-footer "
          onClick={ModalMyProfile}
        >
          <p> &copy; 2020</p>
          <p> azkanurfadillah@gmail.com</p>
          <p> @azkaka</p>
        </div>
      </footer>

      <Modal isOpen={modal} toggle={ModalMyProfile}>
        <button
          onClick={ModalMyProfile}
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
          {/* <div className="img-wrapper">
            <img
              className="rounded-circle myimage"
              src={myprofpic}
              alt="azka's profile"
            />
          </div> */}
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
              azka.dhkh@gmail.com
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
