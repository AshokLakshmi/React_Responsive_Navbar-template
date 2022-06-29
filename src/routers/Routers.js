import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import About from "../pages/About";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routers;
