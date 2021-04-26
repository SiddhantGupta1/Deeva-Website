import './App.css';
import React from 'react'
import Frame from './Frame.png'
import Header from './components/Header'
import Body from './components/Body'

function App() {


  return (
    <div className="App">
      <img className="Frame" src={Frame} />
      
      <Body />
      <Header />

    </div>
  );
}

export default App;
