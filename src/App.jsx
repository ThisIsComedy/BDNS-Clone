import Home from "./app/Home";
import About from "./app/bdns_about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/bdns/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;