
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';

import { Products } from "./routes/Products/Products";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./routes/Register/Register";
import { Login } from "./routes/Login/Login";
import { Cart } from "./routes/Cart/Cart";
import { ProductPage } from "./routes/ProductPage/ProductPage";
import { ProductCategories } from "./routes/ProductCategories/ProductCategories";
import { Profile } from "./routes/Profile/Profile";

import {Test} from './components/Test';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="main-content">
        <BrowserRouter>
            <Header />

              <Routes>
                <Route exact path="/" element={<Products/>} />
                <Route path='/products/:id' element={<ProductPage/>} />
                <Route path='/categories/:category' element={<ProductCategories/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/cart' element={<Cart/>} />

                <Route path="/test" element={<Test/>} />
              </Routes>
            
        </BrowserRouter>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
