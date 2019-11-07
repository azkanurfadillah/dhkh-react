import React from 'react';
import './App.css';
import Header from './containers/header';
import Kedai from './containers/kedai'
// import mainHeader from './components/Header/mainHeader';


function App() {
  return (
      <div className="App">
        <Header/>
        <Kedai/>
      </div>
    
  );
}

export default App;
