import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/product/:id" element={<Product/>} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
