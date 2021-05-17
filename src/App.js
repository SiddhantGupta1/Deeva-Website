import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './components/ContentsPage/TrendingPage/TrendingPage'
import Ethnic from './components/ContentsPage/EthnicPage/EthnicPage'
import Party from './components/ContentsPage/PartyPage/PartyPage'
import Puja from './components/ContentsPage/PujaPage/PujaPage'
import Cart from './components/CartPage/CartPage'
import ContactUs from './components/ContactUs/ContactUs'
import Individual from './components/IndividualPage/IndividualPage'
import Header from './components/Header'
import Body from './components/HomePage/Home'
import ScrollToTop from './ScrollToTop'


function App() {


  return (
    <Router>
      <div className="App">
      
      <ScrollToTop />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/wardrobe/trending" component={Trending} />
          <Route path="/wardrobe/ethnic" component={Ethnic} />
          <Route path="/wardrobe/party" component={Party} />
          <Route path="/wardrobe/puja" component={Puja} />
          <Route path="/contact us" component={ContactUs} />
          <Route path="/products/:name" component={Individual} />
          
          <Route path="/cart" >
            <Cart />
          </Route>

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
