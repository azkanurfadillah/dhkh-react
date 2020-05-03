import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

function Search() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <form className="form-inline search-bar">
      <input
        className="form-control mr-sm-2 search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-info my-0 my-sm-2 search-bttn"
        type="button"
        onClick={toggleModal}
      >
        Search
      </button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          <span className="onworking-ft">feature masih dalam pengerjaan</span>
        </ModalBody>
      </Modal>
    </form>
  );
}

export default Search;
