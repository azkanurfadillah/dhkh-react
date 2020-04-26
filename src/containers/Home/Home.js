import React from "react";
import "./home.css";
import MainHeader from "../../components/Header/mainHeader";
import Kedai from "../../components/KedaiList/KedaiList";

function Home() {
  return (
    <div className="home">
      <MainHeader />
      <Kedai />
    </div>
  );
}

export default Home;
