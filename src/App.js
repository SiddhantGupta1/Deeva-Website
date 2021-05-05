import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './components/ContentsPage/TrendingPage/TrendingPage'
import Ethnic from './components/ContentsPage/EthnicPage/EthnicPage'
import Party from './components/ContentsPage/PartyPage/PartyPage'
import Puja from './components/ContentsPage/PujaPage/PujaPage'
import Cart from './components/CartPage/CartPage'
import Frame from './Frame.png'
import Header from './components/Header'
import Body from './components/HomePage/Home'

function App() {


  return (
    <Router>
      <div className="App">
      <img className="frame" src={Frame} />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/ethnic" component={Ethnic} />
          <Route path="/party" component={Party} />
          <Route path="/puja" component={Puja} />
          <Route path="/cart" component={Cart}/>

        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
    <div>
        <Body />
        <Header />
    </div>
)

export default App;
