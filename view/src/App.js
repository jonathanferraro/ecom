import "./App.css";
import React, { useState, useEffect } from "react";
import { Products } from "./routes/Products/Products";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
