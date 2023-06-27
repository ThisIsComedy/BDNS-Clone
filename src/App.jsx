import Home from "./app/Home";
import About from "./app/bdns_about/About";
import Login from "./app/login/Login";
import ProductDetail from "./app/product/ProductDetail";
import ProductList from "./app/product/ProductList";
import Collaboration from "./app/product/Collaboration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/bdns/about" element={<About />} />
        <Route path="/bdns/shop" element={<ProductList />} />
        <Route path="/bdns/collaboration" element={<Collaboration />} />
        <Route path="/bdns/shop/:id" element={<ProductDetail />} />
        <Route path="/member/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;