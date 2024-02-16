import { Component } from "react";
import { PiExportBold } from "react-icons/pi";
import Navbar from "../Navbar";
import Product from "../Product";
import Tabs from "../Tabs";
import "./index.css";
import CartCount from "../Context";

const categoryOptions = [
  {
    name: "All",
    categoryId: "0",
  },
  {
    name: "Clothing",
    categoryId: "1",
  },
  {
    name: "Electronics",
    categoryId: "2",
  },
  {
    name: "Appliances",
    categoryId: "3",
  },
  {
    name: "Grocery",
    categoryId: "4",
  },
  {
    name: "Toys",
    categoryId: "5",
  },
];

class Home extends Component {
  state = { categoryId: "0", productsData: [] };

  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    const { categoryId } = this.state;
    const apiUrl = `https://apis.ccbp.in/products?category=${
      categoryId === "0" ? "" : categoryId
    }`;
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const updateKeys = data.products.map((eachValue) => ({
      id: eachValue.id,
      title: eachValue.title,
      price: eachValue.price,
      brand: eachValue.brand,
      imageUrl: eachValue.image_url,
      rating: eachValue.rating,
    }));
    this.setState({ productsData: updateKeys });
  };

  clickTab = (id) => {
    this.setState({ categoryId: id }, this.getdata);
  };

  render() {
    const { productsData, categoryId } = this.state;

    return (
      <CartCount.Consumer>
        {(value) => {
          const { productsCountInCart } = value;
          return (
            <>
              <Navbar />
              <div className="bg-container">
                <ul className="tabs-container">
                  {categoryOptions.map((eachValue) => (
                    <Tabs
                      keys={eachValue.categoryId}
                      eachTab={eachValue}
                      isTabActive={eachValue.categoryId === categoryId}
                      clickTab={this.clickTab}
                    />
                  ))}
                </ul>
                <div className="product-count-container">
                  <p className="product-count-text">
                    {productsCountInCart.length} products
                  </p>
                  <PiExportBold className="export-icon" />
                </div>
                <ul className="products-ul-list">
                  {productsData.map((eachValue) => (
                    <Product key={eachValue.id} eachProduct={eachValue} />
                  ))}
                </ul>
              </div>
            </>
          );
        }}
      </CartCount.Consumer>
    );
  }
}

export default Home;
