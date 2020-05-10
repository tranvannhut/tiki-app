import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import ClearAllStatus from "./ClearAllStatus";
class Sidebar extends Component {
  filter = () => {
    setTimeout(() => {
      var data = this.props.params
      this.props.filterCategoryProduct(data)
    }, 200);
  }
  render() {
    var { listCategory } = this.props
    var list = listCategory.map((ele, i) => <li key={i}><CategoryItem category={ele} filterCategory={this.filter} setParamRequest={this.props.setParamter} param={this.props.params} changeStatus={this.props.toggleCategoryItem} /></li>)
    return (
      <React.Fragment>
        <div className="head">NGÀNH HÀNG QUAN TÂM
            <ClearAllStatus clearAllStatus={this.props.convertDefaultStatus} filterCategoryProduct={this.props.filterCategoryProduct} params={this.props.params} resetListProduct={this.props.resetListProduct} />
        </div>
        <ul className="filter-category">
          {list}
        </ul>
      </React.Fragment>
    )
  }
}

export default Sidebar