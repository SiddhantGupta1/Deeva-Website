import './App.css';
import Frame from './Frame.png'
import DeevaLogo from './deeva purple 1.svg'
import Menu from './Union.svg'
import Search from './Search.svg'
import Mic from './Mic.svg'
import DownArrow from './Down Arrow.svg'
import Cart from './Hanger.svg'
import Dropdown from 'react-dropdown';

function App() {

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  return (
    <div className="App">
      <img className="Frame" src={Frame} />
      <header>
        <img className="menu" src={Menu} />
        <img className="deevaLogo" src={DeevaLogo}/>
        <div className="search-bar">
          <img className="search" src={Search}/>
          <input className="searching" type="text" placeholder="Search" />
        </div>
        <button className="voice-search">
            <img src={Mic} />
        </button>
        <div className="user">
          <p className="user-text">Hiii Ankush</p>
          <img className="downArrow" src={DownArrow} />
        </div>
        <div className="budget-store">
          <p className="budget-store-text">Budget Store</p>
          <img className="downArrow" src={DownArrow} />
        </div>
        <div className="content">
          <p className="content-text">Content</p>
          <img className="downArrow" src={DownArrow} />
        </div>
        <img className="cart" src={Cart} />
        <p className="cart-items">2</p>
      </header>
    </div>
  );
}

export default App;
