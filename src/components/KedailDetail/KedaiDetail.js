import React, { useEffect, useState } from "react";
import {
  Tooltip,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const KedaiDetail = ({ kedai }) => {
  const [displayDetail, setDisplayDetail] = useState("none");
  const [modal, setModal] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const toggleModal = () => setModal(!modal);

  const handleClick = (e, id) => {
    e.preventDefault();
    const kedaiSelector = document.querySelectorAll(".kedai-detail");

    console.log(kedaiSelector);
    kedaiSelector.forEach((thiskedai) => {
      //   console.log(kedai.id);
      if (thiskedai.id === id) {
        console.log("haloid", thiskedai.id);

        if (thiskedai.style.display === "none") {
          console.log("this.kedai", thiskedai);
          setDisplayDetail("block");
        } else {
          setDisplayDetail("none");
        }
      }
    });
    console.log(id);
  };

  return (
    <>
      <div className="addt-buttons float-right">
        <Button
          outline
          color="danger"
          onClick={toggleModal}
          className="pb-0 px-0"
          style={{ border: "none" }}
        >
          <span class="material-icons" id="TooltipExample">
            error_outline
          </span>
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            target="TooltipExample"
            toggle={toggle}
          >
            Hello world!
          </Tooltip>
        </Button>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={(e) => handleClick(e, kedai._id)}
        >
          Detil
        </button>
      </div>
      <div
        className="kedai-detail"
        id={kedai._id}
        style={{ display: displayDetail }}
      >
        <h6>detil lokasi</h6>
        <p>{kedai.detil_lokasi}</p>
        <h6>lihat lokasi di Google Map </h6>
        <a href={kedai.gmaps_link}> gmaps {kedai.nama_kedai}</a>
        <h6>jam operasional </h6>
        <p>{kedai.jam_operasional}</p>
        <h6>menu rekomendasi </h6>
        <p>{kedai.menu_rekomendasi}</p>
        <h6>info lain </h6>
        <p>{kedai.info_lain}</p>
        <h6>kontributor</h6>
        <p>{kedai.kontributor}</p>
        {/* <img/>  */}
        <hr />
      </div>
    </>
  );
};

export default KedaiDetail;
