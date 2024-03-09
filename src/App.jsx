import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './context/CartContext';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"VERSUS GAMING"} />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2> 404 NoT FoUnD </h2>} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
