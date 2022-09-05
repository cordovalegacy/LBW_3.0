import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './components/Home';
import Gallery from './components/Gallery';
import CustomForm from './components/CustomForm';
import Inventory from './components/Inventory';
import About from './components/About';
import Faq from './components/Faq';
import Cart from './components/Cart';
import Edit from './components/Edit';
import Confirmation from './components/Confirmation';
import Checkout from './components/Checkout';
import Logo from './img/lb_logo_2.jpg';
import CartIcon from './img/cart_icon.png';

function App() {

  const [orderList, setOrderList] = useState([]);
  const [inventoryProduct, setInventoryProduct] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to='/'><img id='logo' src={Logo} alt='Logo' /></Link>
          <Link to='/builds/gallery'>Gallery</Link>
          <Link to='/builds/custom'>Custom</Link>
          <Link to='/builds/inventory'>Inventory</Link>
          <Link to='/builds/about'>Company</Link>
          <Link to='/builds/faq'>FAQ's</Link>
          <Link to='/builds/cart'><img id='cart' src={CartIcon} alt='cart' /></Link>
          <br/>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/builds/gallery' element={<Gallery />} />
          <Route path='/builds/custom' element={<CustomForm orderList={orderList} setOrderList={setOrderList} />} />
          <Route path='/builds/inventory' element={<Inventory inventoryProduct={inventoryProduct} setInventoryProduct={setInventoryProduct} />} />
          <Route path='/builds/about' element={<About />} />
          <Route path='/builds/faq' element={<Faq />} />
          <Route path='/builds/cart' element={<Cart orderList={orderList} setOrderList={setOrderList} />} />
          <Route path='/builds/edit/:id' element={<Edit orderList={orderList} setOrderList={setOrderList} />} />
          <Route path='/builds/checkout/:id' element={<Checkout orderList={orderList} setOrderList={setOrderList} />} />
          <Route path='/builds/confirmation' element={<Confirmation />} />
        </Routes>
        <footer>
          <p>Website by Brendan Cordova, Owner of Legacy Builds LLC.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;