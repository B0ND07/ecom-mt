import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import CategoryList from "./pages/CategoryList";

const Newcontext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((display) => {
      const slicedProducts = display.data.slice(0, 16);
      setProducts(slicedProducts);
      console.log(display);
    });
  }, []);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((display) => {
      console.log(display);
      setCategory(display.data);
    });
  }, []);
  return (
    <>
      <Newcontext.Provider value={[products,category]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/view/:index" element={<ProductDetails />}></Route>
            <Route path="/category/:index" element={<CategoryList />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/users" element={<Category />}></Route>
          </Routes>
        </BrowserRouter>
      </Newcontext.Provider>
    </>
  );
}

export default App;

export { Newcontext };
