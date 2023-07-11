import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/products";

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        try {
            const response = await fetchProducts();
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
);
