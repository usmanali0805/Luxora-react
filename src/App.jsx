import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Favourite from "./pages/Favourite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StoreTimings from "./pages/StoreTimings";
import StoreLocations from "./pages/StoreLocations";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { MoveUp } from "lucide-react";
import CheckOut from "./pages/CheckOut";
import { useState,useEffect } from "react";

function App() {
  const [data, setData] = useState([]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/search/:name/product/:id" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Favourite />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/storetiming" element={<StoreTimings />} />
        <Route path="/location" element={<StoreLocations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Routes>
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 p-2 opacity-[0.5] sm:p-5 rounded-full left-3 bg-[#95c3fe] transition-all duration-150 hover:bg-[#013881] cursor-pointer text-white hover:opacity-[1]"
      >
        <MoveUp className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
      </button>
      <Footer />
    </div>
  );
}

export default App;
