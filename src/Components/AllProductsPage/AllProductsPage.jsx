import React, { Component } from "react";
import ProductsList from "../ProductsList/ProductsList";
import "./AllProductsPage.css";
import productsJson from "../../db.json";

export default class AllProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: productsJson });
  }

  render() {
    return (
      <div className="AllProductsPage">
        <h1>Products List</h1>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}
