import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import SearchBox from "./components/searchBox";
function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7v] lg:px-[9vw]">
      <Navbar />
      <SearchBox />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/product/:productid" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/placeOrder" element={<PlaceOrder />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
