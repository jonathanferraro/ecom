import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { Products } from "./routes/Products/Products";
import { Header } from "./components/Header/Header";
import { Register } from "./routes/Register/Register";
import { Login } from "./routes/Login/Login";

import {Test} from './components/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />

          <Route path="test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
