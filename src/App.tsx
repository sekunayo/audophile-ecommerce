import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./pages/product-list";
import ProtectedRoute from "./paritals/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/category/:slug" element={<ProductList />} />
      <Route path="/:slug/:id" element={<Product />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute auth={cart.length <= 0} path="/">
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<p>This 404 page</p>} />
    </Routes>
  );
}

export default App;
