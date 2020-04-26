import React, { useEffect, useState } from "react";

const KedaiDetail = ({ kedai }) => {
  const [displayDetail, setDisplayDetail] = useState("none");

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
      <button
        type="button"
        className="btn btn-primary btn-sm float-right"
        onClick={(e) => handleClick(e, kedai._id)}
      >
        Detail
      </button>
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
