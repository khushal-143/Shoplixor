import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Shop/>} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
