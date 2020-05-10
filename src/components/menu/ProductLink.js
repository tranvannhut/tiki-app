import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  componentDidMount() {
    let data = this.props.params
    setTimeout(() => {
      this.props.getDefaultListProduct(data)
    }, 1000);
  }
  render() {
    var data = this.props.listProduct
    let listProduct = data['data']

    var list
    if (!!listProduct) {
      if (!!this.props.textSearch) {
        listProduct = listProduct.filter(ele => ele.product.name.includes(this.props.textSearch))
      }
      list = listProduct.map((pro, i) =>
        <Product pro={pro} key={i} countDownTime={this.props.countDownTime} timeDeadLine={this.props.timeDeadLine} />)
    }
    return (
      <div className="product-listing">
        <div className="items">
          {list}
        </div>
      </div>

    )
  }
}
export default ProductList