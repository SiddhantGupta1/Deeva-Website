import './App.css';
import React from 'react'
import Frame from './Frame.png'
import Header from './components/Header'
import Body from './components/Body'

function App() {


  return (
    <div className="App">
      <img className="frame" src={Frame} />
      
      <Body />
      <Header />

    </div>
  );
}

export default App;
