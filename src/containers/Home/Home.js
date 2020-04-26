import React from 'react';
import MainHeader from '../../components/Header/mainHeader';
import Kedai from '../../components/KedaiList/KedaiList'


function Home() {
  return (
      <div className="Home">
        <MainHeader/>
        <Kedai/>
      </div>
    
  );
}

export default Home;