import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forside from "./routes/Forside";
import ProductDetails from "./routes/ProductDetails";
import New from "./routes/New.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/new" element={<New />} />
          <Route path="/" element={<Forside />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/* 
Dette route skal ind efter forsiden
<Route path="/products/:id" element={<BlogDetails />} />*/
