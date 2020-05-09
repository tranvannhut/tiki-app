import React, { Component } from "react";

class CategoryItem extends Component {

  onFilter = (id, status) => {
    var categoryIds = this.props.param
    const pageNum = categoryIds['pageNum']
    this.props.changeStatus(id)
    this.props.setParamRequest({ categoryId: id, pageNum: pageNum, status: status })
    this.props.filterCategory({ categoryId: id, pageNum: pageNum })
  }

  render() {
    var { category_ids, name, status } = this.props.category

    return (
      <React.Fragment>
        <label className="checkbox" >
          <input type="checkbox" value={category_ids} checked={status} readOnly />
          <span className="far fa-square" style={{ display: !status ? "inline-block" : "none" }} onClick={() => this.onFilter(category_ids, status)}></span>
          <span className="far fa-check-square" style={{ display: status ? "inline-block" : "none" }} onClick={() => this.onFilter(category_ids, status)}></span>
          {name}
        </label>
      </React.Fragment >
    )
  }
}
export default CategoryItem