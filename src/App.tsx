import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./pages/product-list";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:slug" element={<ProductList />} />
      <Route path="/:slug/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
