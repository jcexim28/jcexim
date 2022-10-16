import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";

import About from "./About";
import App from "./App";
import Navigation from "./Navigation";
import Dehydrated from "./Products/Dehydrated";
import Allied from "./Products/Allied";
import Areca from "./Products/Areca";
import Tamarind from "./Products/Tamarind";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App />} />
        <Route path="/dehydrated" element={<Dehydrated />} />
        <Route path="/allied" element={<Allied />} />
        <Route path="/areca" element={<Areca />} />
        <Route path="/tamarind" element={<Tamarind />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
