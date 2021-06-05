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
import Profile from './components/ProfilePage/ProfilePage'
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
        id: "bdksbjs16843",
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
        id: "fdsgf4es6f4sg",
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
        id: "s4f6s4f64se",
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
        id: "sd6f4sdfzd4",
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
        id: "hsd4f64sd4464cz",
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
        id: "asd4f6sd46f4s",
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
        id: "sdhg2sd5f6",
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
        id: "sf5s5f646fs",
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
        id: "s5f6sdf6dsfs",
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
        id: "ikykh654uk5h5k",
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
        id: "yuku5i1lu1h",
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
        id: "qehd6rjy4x6",
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
        id: "tiuk5ty5hd1erd",
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
        id: "t651hd4rth6drhs",
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
        id: "iukfty61d54465h6f6g",
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
        id: "f1tseuhftu5k1s",
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
        id: "poiu5ijfhgg4dhd",
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
        id: "poiuyt4511",
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
        id: "zncbfzshb51dgfg14d",
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
        id: "serg5d1z5gfsrgh",
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
        id: "y4kj4d6rdgrd",
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
        id: "mrh8ses49d784er6sg3",
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
        id: "n8s68rgwa8t4g5d",
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
        id: "fmesekbfag4f54esd",
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
          <Route path="/profile" component={Profile}/>
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
