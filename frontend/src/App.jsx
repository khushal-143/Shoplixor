import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";

import MyContext from './components/context/MyContext';

import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import ProfileDashboard from './pages/ProfileDashboard/ProfileDashboard';

function App() {

  const { user } = useContext(MyContext);

  return (
    <>
      <Routes>

        <Route
          path='/'
          element={
            user
              ? <Navigate to="/home" />
              : <Login />
          }
        />

        <Route
          path="/home"
          element={
            user
              ? <Home />
              : <Navigate to="/" />
          }
        />

        <Route
          path='/shop'
          element={
            user
              ? <Shop />
              : <Navigate to="/" />
          }
        />

        <Route
          path='/cart'
          element={
            user
              ? <Cart />
              : <Navigate to="/" />
          }
        />

        <Route
          path='/profile'
          element={
            user
              ? <ProfileDashboard />
              : <Navigate to="/" />
          }
        />

        <Route
          path='/checkout'
          element={
            user
              ? <Checkout />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/product/:id"
          element={
            user
              ? <Product />
              : <Navigate to="/" />
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App