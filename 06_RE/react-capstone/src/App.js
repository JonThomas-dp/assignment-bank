import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

import './styles/App.css';


import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Cart from "./Components/Pages/Cart";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Footer from "./Components/Footer";
import SingleProduct from "./Components/Pages/SingleProduct";

export default function App() {
  const [dynamicPath, setDynamicPath] = useState(1);

  return (
    <div className="App">
      <div className="main-container">
        <BrowserRouter>
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/product/:id" component={SingleProduct} />
            </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}