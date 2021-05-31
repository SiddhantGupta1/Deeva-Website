import React,{useState, useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './components/TrendingPage/TrendingPage'
import Cart from './components/CartPage/CartPage'
import ContactUs from './components/ContactUs/ContactUs'
import Individual from './components/IndividualPage/IndividualPage'
import Address from './components/Address/Address'
import Payment from './components/Payment/Payment'
import YourOrders from './components/YourOrders/YourOrders'
import Delivery from './components/Delivery/Delivery'
import Header from './components/Header'
import Body from './components/HomePage/Home'
import ScrollToTop from './ScrollToTop'
import Demo from './components/demo';
import Image from './icons/Trend Image.svg'


function App() {

  const [product, setProduct] = useState({})

  useEffect( () => {
    getProducts()
  },[])
  const getProducts = async () => {
    const response = await fetch('https://deevabackend.herokuapp.com/api/getproduct')
    const products = await response.json()

    setProduct(products.data)
  }


  const [cart, setCart] = useState({})
  
  const handleCart = (productID) => {
    setCart(productID)
    console.log(cart)
  }

  const orders = [
    {
        id: 0,
        image: Image,
        name: "Neeva Yellow Fashion ",
        discount: 35,
        dprice: 999,
        price: 1550,
        manufacturer: "Neeva, Maharashtra",
    },
    {
        id: 1,
        image: Image,
        name: "Neeva Yellow Taant Fashion ",
        discount: 35,
        dprice: 1099,
        price: 1550,
        manufacturer: "Neeva, Maharashtra",
    },
    {
        id: 2,
        image: Image,
        name: "Neeva Yellow Taant Fashion ",
        discount: 35,
        dprice: 999,
        price: 1550,
        manufacturer: "Neeva, Maharashtra",
    },
    {
        id: 3,
        image: Image,
        name: "Neeva Yellow Taant Fashion ",
        discount: 35,
        dprice: 999,
        price: 1550,
        manufacturer: "Neeva, Maharashtra",
    },
    {
        id: 4,
        image: Image,
        name: "Neeva Yellow Taant Fashion ",
        discount: 35,
        dprice: 999,
        price: 1550,
        manufacturer: "Neeva, Maharashtra",
    },
];
  const deliver = "Delivery by 1st June 2021"

  return (
    <Router>
      <div className="App">
      
      <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/wardrobe/:query" component={Trending} />
          <Route path="/contact us" component={ContactUs} />
          <Route path="/products/:name" component={Individual} />
          <Route path="/address" exact component={Address} />
          <Route path="/address/payments" exact component={Payment} />
          <Route path="/your orders" exact>
            <YourOrders deliver={deliver} orders={orders} />
          </Route>
          <Route path="/your orders/delivery" exact>
            <Delivery deliver={deliver} orders={orders} />
          </Route>
          <Route path="/demo" component={Demo} />
          <Route path="/cart" >
            <Cart product={product} />
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
