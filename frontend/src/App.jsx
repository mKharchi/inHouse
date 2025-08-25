import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Houses from "./pages/Houses";
import Product from "./pages/Product";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 20 seconds
    return () => {
      clearTimeout(timer);
 
    };
  }, []);

  if (loading) {
    return <Loader  />;
  }

  return (
    <div className="w-full bg-secondary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/property/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
