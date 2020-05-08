import React, { Component } from "react";
// eslint-disable-next-line
import { listCategory } from '../../constants/listCategory'
import Product from "./Product";

class ProductList extends Component {
  componentDidMount() {
    let data = this.props.params
    setTimeout(() => {
      this.props.getDefaultListProduct(data)
    }, 1000);
  }
  /* componentWillUpdate() {
    console.log(this.props.listProduct)
  } */
  render() {
    var data = this.props.listProduct
    let listProduct = data['data']
    var x
    if (!!listProduct) {
      x = listProduct.map((pro, i) =>
        <Product pro={pro} key={i} />)
    }
    return (
      <div className="product-listing">
        <div className="items">
          {x}
        </div>
      </div>

    )
  }
}
export default ProductList