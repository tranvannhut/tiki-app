import React, { Component } from "react";

class ClearAllStatus extends Component {
  onChangeStatus = () => {
    this.props.clearAllStatus()
    this.props.resetListProduct()
    this.props.filterCategoryProduct({ categoryId: "", pageNum: 1 })
  }
  render() {
    let { categoryId } = this.props.params
    let display = !!categoryId ? "visible" : "hidden"
    return (
      <span className="clear pull-right" onClick={this.onChangeStatus} style={{ visibility: display }}>Xóa</span>
    )
  }
}
export default ClearAllStatus