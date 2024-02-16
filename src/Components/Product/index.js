import { FaRegBookmark } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoBagCheck } from "react-icons/io5";
import CartCount from "../Context";
import "./index.css";

function Product(props) {
  const { eachProduct } = props;
  const { imageUrl, price, id, title } = eachProduct;

  return (
    <CartCount.Consumer>
      {(value) => {
        const { productsCountInCart, addProductsIntoCart } = value;
        const clickProduct = () => {
          addProductsIntoCart(id);
        };
        return (
          <li className="list">
            <img src={imageUrl} className="img" />
            <FaRegBookmark className="bookmark-icon" />
            <h1 className="product-name">{title}</h1>
            <div className="price-container">
              <p className="price-text">₹ {price}</p>
              {!productsCountInCart.includes(id) ? (
                <TbShoppingBagPlus
                  className="bag-icon"
                  onClick={clickProduct}
                />
              ) : (
                <IoBagCheck
                  className="bag-icon-succes"
                  onClick={clickProduct}
                />
              )}
            </div>
          </li>
        );
      }}
    </CartCount.Consumer>
  );
}

export default Product;
