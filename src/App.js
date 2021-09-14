import React, { useEffect } from "react";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { ProductInfo } from "./Pages/ProductInfo";
import { Guitars } from "./Pages/Guitars";
import { Pedals } from "./Pages/Pedals";
import { Accessories } from "./Pages/Accessories";
import { Services } from "./Pages/Services";
import { Support } from "./Pages/Support";
import { Cart } from "./Pages/Cart";
import { setProducts } from "./Redux/actions";
import { useDispatch } from "react-redux";
import { products } from "./products";
import { createGlobalStyle } from "styled-components";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/guitars" exact component={Guitars} />
          <Route path="/products/pedals" exact component={Pedals} />
          <Route path="/products/accessories" exact component={Accessories} />
          <Route path="/services" exact component={Services} />
          <Route path="/support" exact component={Support} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/:product/:id" exact component={ProductInfo} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Bebas Neue";
  }

`;
