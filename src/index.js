import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";
import './assets/css/index.css';
import "./assets/css/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Detail />} />
      </Routes>
    </main>
  </BrowserRouter>
);
