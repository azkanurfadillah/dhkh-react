import React from "react";
import "./home.css";
import MainHeader from "../../components/Header/mainHeader";
import Kedai from "../../components/KedaiList/KedaiList";
import Footer from "../../components/Footer/index";

function Home() {
  return (
    <div className="home">
      <MainHeader />
      <Kedai />
      <Footer />
    </div>
  );
}

export default Home;
