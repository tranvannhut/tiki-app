import React, { Component } from "react";

class CategoryItem extends Component {
  onFilter = (id) => {
    this.props.filterCategory(id)
  }

  render() {
    var { category_ids, name, status } = this.props.category
    return (
      <React.Fragment>
        <label className="checkbox" onClick={() => this.onFilter(category_ids)}>
          <input type="checkbox" value={category_ids} />
          <span className="far fa-square" style={{ display: !status ? "inline-blok" : "none" }}></span>
          <span className="far fa-check-square" style={{ display: status ? "inline-block" : "none" }}></span>
          {name}
        </label>
      </React.Fragment >
    )
  }
}
export default CategoryItem
/* checked={status}  */