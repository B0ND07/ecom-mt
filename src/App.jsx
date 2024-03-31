import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

const Newcontext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((display) => {
      const slicedProducts = display.data.slice(0, 16);
      setProducts(slicedProducts);
      console.log(display);
    });
  }, []);
  return (
    <>
      <Newcontext.Provider value={[products]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/view/:index" element={<ProductDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Newcontext.Provider>
    </>
  );
}

export default App;

export { Newcontext };
