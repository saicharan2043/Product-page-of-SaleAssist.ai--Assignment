import React from "react";

const CartCount = React.createContext({
  productsCountInCart: [],
  addProductsIntoCart: () => {},
});

export default CartCount;
