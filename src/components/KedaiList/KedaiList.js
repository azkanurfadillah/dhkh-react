import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./kedai.css";
import KedaiDetail from "../KedailDetail/KedaiDetail";

function KedaiList() {
  const [kedaikedai, setKedaikedai] = useState([]);
  // const [offset, setOffset] = useState(0);
  const [perPage] = useState(4);
  // const [currentPage, setCurrentPage] = useState(0);
  const [dataSlice, setDataSlice] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const receivedData = (data, offset = 0) => {
    // console.log("kedai-kedai", kedaikedai);
    console.log("off", offset);
    const slice = data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(data.length / perPage));
    setDataSlice(slice);
    console.log("slice", slice);
  };

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(
        "https://hello-dhkh-express.herokuapp.com/api/kedai"
      );
      const data = await response.json();
      setKedaikedai(data);
      // console.log(kedaikedai);
      receivedData(data);
    }
    fetchUrl();
  }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    console.log("click", selectedPage, "off", offset);
    // setCurrentPage(selectedPage);
    // setOffset(offset);
    console.log("halo1");
    receivedData(kedaikedai, offset);
    // console.log("halo2");
  };

  return (
    <div className="kedai">
      <section>
        {dataSlice.map((kedai, index) => (
          <div className="kedai-list" key={kedai._id}>
            <h4>{kedai.nama_kedai} </h4>
            <p>{kedai.halte_stasiun} </p>
            <KedaiDetail kedai={kedai} />
          </div>
        ))}
      </section>
      <section>
        <div className="pagination">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={<span className="gap">...</span>}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
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
