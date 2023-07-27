import React from "react";
import "./App.css";
import Nav from "./components/NAvbar/NAv";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Discovre from "./components/Discover/D";
import B from "./components/BidPlace/B";
import Become from "./components/BEcome/Become";
import Upload from "./components/Upload/Upload";
import BidPlacetwo from "./components/Bplace/BidPlacetwo";
import Faq from "./components/FAQ/Faq";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        {" "}
        <Route index  element={<Home />} />
        <Route path="/discover" element={<Discovre />} />
        <Route path="/Become" element={<Become />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/b" element={<B />} />
        <Route path="/a" element={<BidPlacetwo />} />
        <Route path="/About" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
