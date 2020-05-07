import React from "react";
import Search from "./search";
import "./header.css";

function MainHeader() {
  return (
    <header>
      <div className=" wrap-header ">
        <Search />
      </div>
      <div className="line-header"></div>
    </header>
  );
}

export default MainHeader;
