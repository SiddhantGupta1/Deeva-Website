import React,{useState, useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wardrobe from './components/Wardrobe/WardrobePage'
import Category from './components/Category/Category' 
import OtherPages from './components/OtherPages/OtherPages';
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
import TrendImage from './icons/Trend Image.svg'


function App() {

  const [product, setProduct] = useState({})
  const [cart, setCart] = useState({})
  const [like,setLike] = useState([])

  useEffect( () => {
    getProducts()
  },[])
  const getProducts = async () => {
    const response = await fetch('https://deevabackend.herokuapp.com/api/getproduct')
    const products = await response.json()

    setProduct(products.data)
  }

  const cards = [
    {
        id: 1,
        image: TrendImage,
        name: "Neeva Yellow Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 2,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 3,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 4,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 5,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 6,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 7,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 8,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 9,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 10,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 11,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 12,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 13,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 14,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 15,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 16,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 17,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 18,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 19,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 20,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 21,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 22,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 23,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
    {
        id: 24,
        image: TrendImage,
        name: "Neeva Yellow Taant Fashion ",
        rating: 4,
        totalRating: 2504,
        dprice: 999,
        price: 1550,
        stock: true,
        discount: 35,
    },
  ];

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
          <Route path="/wardrobe/:query">
            <Wardrobe like={like} setLike={setLike} cards={cards} />
          </Route>
          <Route path="/category/:query">
            <Category like={like} setLike={setLike} />
          </Route>
          <Route path="/others/:query">
            <OtherPages  like={like} setLike={setLike} />
          </Route>
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
            <Cart 
              product={product} 
              cart={cart} 
              setCart={setCart}
              like={like}
              setLike={setLike}
              cards={cards}
              />
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
