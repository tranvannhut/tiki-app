import React, { Component } from "react";
import { listCategory } from '../../constants/listCategory'
import CategoryItem from "./CategoryItem";
class Sidebar extends Component {
  filter = (id) => {
    this.props.filterCategoryProduct(id)
  }
  render() {
    var list = listCategory.map((ele, i) => <li key={i}><CategoryItem category={ele} filterCategory={this.filter} /></li>)
    return (
      <React.Fragment>
        <ul className="filter-category">
          {list}
        </ul>
      </React.Fragment>
    )
  }
}

export default Sidebar