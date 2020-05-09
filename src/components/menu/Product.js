import React, { Component } from "react";

class Product extends Component {
  render() {
    let { pro } = this.props
    return (
      <a className="deal-item" target="_blank" rel="noopener noreferrer" href={pro.product.url_path}>
        <div className="image">
          <div className="discount-badge">-{pro.discount_percent}%</div>
          <i className="tikicon icon-tikinow-20"></i>
          <img className="lazy" src={pro.product.thumbnail_url} style={{ width: "200px", display: "inline" }} alt="img" />
        </div>
        <div className="title"><i className="tikicon icon-tikinow"></i>{pro.product.name}</div>
        <div className="price-sale"> {pro.product.price}₫<span className="price-regular"> {pro.product.list_price}₫</span></div>
        <div className="deal-status">
          <div className="process-bar">
            <span className="tikicon icon-hot_12"></span>
            <div style={{ width: `${pro.progress.qty_ordered}%` }}></div>
            <span className="text">Đã bán {pro.progress.qty_ordered}</span></div>
          <div className="started">
            <div className="deal-count-down">
              <span className="time"></span></div>
          </div>
        </div>
      </a>
    )
  }
}
export default Product