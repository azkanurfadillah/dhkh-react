import React, { useEffect, useState } from "react";
import "./kedai.css";
import KedaiDetail from "../KedailDetail/KedaiDetail";

function KedaiList() {
  const [kedaikedai, setKedaikedai] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/kedai")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setKedaikedai(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="kedai">
      {kedaikedai.map((kedai, index) => (
        <div className="kedai-list" key={kedai._id}>
          <h4>{kedai.nama_kedai} </h4>
          <p>{kedai.halte_stasiun} </p>
          <KedaiDetail kedai={kedai} />
        </div>
      ))}
    </div>
  );
}

export default KedaiList;
