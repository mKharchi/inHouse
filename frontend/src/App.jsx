import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Houses from "./pages/Houses"
import Product from "./pages/Product"
function App() {
  return (
    <div className="w-full bg-secondary">
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/houses" element={<Houses />}></Route>
        <Route path="/property/:productId" element={<Product />}></Route>
      </Routes>

      <Footer />



    </div>
  )
}

export default App
