import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Spinner } from "reactstrap";
import { useSelector } from "react-redux";
import "./kedai.css";
import KedaiDetail from "../KedailDetail/KedaiDetail";

function KedaiList() {
  const [isLoad, setIsLoad] = useState(false);
  const [kedaikedai, setKedaikedai] = useState([]);
  const [perPage] = useState(10);
  const [dataSlice, setDataSlice] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const searchResult = useSelector((state) => state.Kedai);

  const initialData = (data, offset = 0) => {
    setIsLoad(false);
    // setKedaikedai(data);
    // console.log(data);
    // console.log(kedaikedai);
    setPageCount(Math.ceil(data.length / perPage));
    const slice = data.slice(offset, offset + perPage);
    // setPageCount(Math.ceil(data.length / perPage));
    setDataSlice(slice);
    // console.log("slice", typeof slice[0].info_lain);
  };

  useEffect(() => {
    console.log(window.document.title);
    window.document.title = "Hello DHKH";
    setIsLoad(true);
    if (searchResult.isSuccess) {
      // dataSearch();
      setIsSearch(searchResult.isSuccess);
    }
    async function fetchUrl() {
      const response = await fetch(
        "https://hello-dhkh-express.herokuapp.com/api/kedai"
        // "http://localhost:3000/api/kedai"
      );
      const data = await response.json();
      setKedaikedai(data);
      initialData(data);
    }
    fetchUrl();
  }, [searchResult]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    if (isSearch) {
      renderKedai(offset);
    } else {
      initialData(kedaikedai, offset);
    }
  };

  const buttonBack = () => {
    if (isSearch) {
      return (
        <>
          <button
            className="btn btn-primary btn-sm"
            style={{ letterSpacing: "2px" }}
            onClick={handleBack}
          >
            Back
          </button>
          <p id="broke-pg"> maaf paginationnya gak bisa di pake. lol</p>
        </>
      );
    }
  };

  const handleBack = () => {
    console.log("halo back", kedaikedai);
    setIsSearch(false);
    // initialData(kedaikedai);
  };

  const renderKedai = (offset = 0) => {
    if (isSearch) {
      console.log(searchResult.result.length);
      const result = searchResult.result;
      // setPageCount(Math.ceil(result.length / perPage));
      // const slice = searchResult.result.slice(offset, offset + perPage);
      // return "halo";
      // buttonBack();
      return result.map((kedai, index) => (
        <div className="kedai-list" key={kedai._id}>
          <div className="main-kedai-list">
            <h4>{kedai.nama_kedai} </h4>
            <p>{kedai.halte_stasiun} </p>
          </div>
          <KedaiDetail kedai={kedai} />
        </div>
      ));
    } else {
      return dataSlice.map((kedai, index) => (
        <div className="kedai-list" key={kedai._id}>
          <div className="main-kedai-list">
            <h4>{kedai.nama_kedai} </h4>
            <p>{kedai.halte_stasiun} </p>
          </div>
          <KedaiDetail kedai={kedai} />
        </div>
      ));
    }
  };

  // console.log("pC", pageCount);

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
      <section>{renderKedai()}</section>
      <div
        className="btn-back"
        style={{
          margin: `10px 0 0 15px`,
        }}
      >
        {buttonBack()}
      </div>
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
