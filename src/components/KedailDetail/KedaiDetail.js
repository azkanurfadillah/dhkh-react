import React, { useState } from "react";
import { Tooltip, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import gmapLogo from "../../assets/img/googlemaps.jpeg";

const KedaiDetail = ({ kedai }) => {
  const [hidden, setHidden] = useState(true);
  const [modal, setModal] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const toggleModal = () => setModal(!modal);

  const handleClick = (e, id) => {
    e.preventDefault();
    const kedaiSelector = document.querySelectorAll(".kedai-detail");

    // console.log(kedaiSelector);
    kedaiSelector.forEach((thiskedai) => {
      if (thiskedai.id === id) {
        console.log("hide", thiskedai.hidden);
        if (thiskedai.hidden === true) {
          setHidden(false);
          thiskedai.removeAttribute("hidden");
        } else {
          setHidden(true);
          thiskedai.setAttribute("hidden", true);
        }
      }
    });
    // console.log(id);
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
          <span className="material-icons" id="TooltipExample">
            error_outline
          </span>
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            target="TooltipExample"
            toggle={toggle}
          >
            send us message
          </Tooltip>
        </Button>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            ada kesalahan dari info {kedai.nama_kedai}?
          </ModalHeader>
          <ModalBody>
            <span className="onworking-ft">feature masih dalam pengerjaan</span>
          </ModalBody>
        </Modal>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={(e) => handleClick(e, kedai._id)}
        >
          {hidden ? "Detail" : "Close"}
        </button>
      </div>
      <div hidden className="kedai-detail" id={kedai._id}>
        <h5>detil lokasi</h5>
        <p>{kedai.lokasi}</p>
        <div className="gmap">
          <h5>lihat lokasi di Google Map </h5>
          <a href={kedai.gmap} target="_blank" rel="noopener noreferrer">
            <span>
              <img height="25" width="auto" src={gmapLogo} alt="gmap logo" />
            </span>
            {kedai.nama_kedai}
          </a>
        </div>
        <h5>jam operasional </h5>
        <p>{kedai.jam_operasional}</p>
        <h5>menu rekomendasi </h5>
        <p>{kedai.menu_rekomendasi}</p>
        <h5>info lain </h5>
        <p>{kedai.info_lain && ""}</p>
        <h5>kontributor</h5>
        <p>{kedai.kontributor}</p>
      </div>
    </>
  );
};

export default KedaiDetail;
