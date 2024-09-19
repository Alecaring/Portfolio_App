import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import videoSrc from './assets/banner_portfolio.mp4';
import { useEffect, useRef, useState } from "react";
import Work from './components/Work';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}






export default App;
