import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Spinner } from "reactstrap";
import "./kedai.css";
import KedaiDetail from "../KedailDetail/KedaiDetail";

function KedaiList() {
  const [isLoad, setIsLoad] = useState(false);
  const [kedaikedai, setKedaikedai] = useState([]);
  const [perPage] = useState(10);
  const [dataSlice, setDataSlice] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const receivedData = (data, offset = 0) => {
    // console.log("kedai-kedai", kedaikedai);
    setIsLoad(false);
    // console.log("off", offset);
    const slice = data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(data.length / perPage));
    setDataSlice(slice);
    console.log("slice", typeof slice[0].info_lain);
  };

  useEffect(() => {
    setIsLoad(true);
    async function fetchUrl() {
      const response = await fetch(
        "https://hello-dhkh-express.herokuapp.com/api/kedai"
      );
      const data = await response.json();
      setKedaikedai(data);
      receivedData(data);
    }
    fetchUrl();
  }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    // console.log("click", selectedPage, "off", offset);
    // console.log("halo1");
    receivedData(kedaikedai, offset);
  };

  return (
    <div className="kedai">
      <section
        className="loading"
        style={{ display: isLoad ? " block" : "none" }}
      >
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="info" />
      </section>
      <section>
        {dataSlice.map((kedai, index) => (
          <div className="kedai-list" key={kedai._id}>
            <div className="main-kedai-list">
              <h4>{kedai.nama_kedai} </h4>
              <p>{kedai.halte_stasiun} </p>
            </div>
            <KedaiDetail kedai={kedai} />
          </div>
        ))}
      </section>
      <section>
        <div className="pagination">
          <ReactPaginate
            previousLabel={<span>&laquo;</span>}
            nextLabel={<span>&raquo;</span>}
            breakLabel={<span className="gap">...</span>}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"kedai-pagination"}
            activeClassName={"active"}
            disabledClassName={"disabled"}
          />
        </div>
      </section>
    </div>
  );
}

export default KedaiList;
