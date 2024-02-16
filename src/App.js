import { useState } from "react";
import Home from "./Components/Home";
import CartCount from "./Components/Context/";
import "./App.css";

const App = () => {
  const [productsCountInCart, setProductsCountInCart] = useState([]);

  const addProductsIntoCart = (id) => {
    if (!productsCountInCart.includes(id)) {
      setProductsCountInCart((privews) => [...privews, id]);
    }
  };

  return (
    <CartCount.Provider
      value={{ productsCountInCart, addProductsIntoCart: addProductsIntoCart }}
    >
      <Home />
    </CartCount.Provider>
  );
};

export default App;
