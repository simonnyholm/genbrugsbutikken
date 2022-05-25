import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forside from "./routes/Forside";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Forside />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/* 
Dette route skal ind efter forsiden
<Route path="/products/:id" element={<BlogDetails />} />*/
