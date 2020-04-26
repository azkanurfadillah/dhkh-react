import React from "react";
import logo_navbar from "../../assets/DHKH.jpg";
import Search from "./search";

function MainHeader() {
  return (
    <div className="navbar navbar-light bg-dark ">
      <a href="#" className="navbar-brand">
        <img
          src={logo_navbar}
          width="50"
          height="50"
          className="rounded-circle"
          alt="logo dhkh"
        />
      </a>
      <Search />
    </div>
  );
}

export default MainHeader;
