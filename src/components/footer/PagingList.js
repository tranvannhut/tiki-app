import React, { Component } from "react";
import Pagination from "react-js-pagination";
class PagingList extends Component {

  handlePageChange(pageNumber) {
    const { paging } = this.props
    const categoryId = paging['categoryId']
    this.props.setParamter({ categoryId: categoryId, pageNum: pageNumber })
    this.props.getProductList({ categoryId: categoryId, pageNum: pageNumber })
  }
  render() {
    const pageActive = this.props.paging["pageNum"]
    var { listProduct } = this.props
    let paging = listProduct['paging']
    return (
      <div className="list-pager" >
        <ul>
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            hideDisabled
            activePage={pageActive}
            itemsCountPerPage={!!paging ? paging.per_page : 20}
            totalItemsCount={!!paging ? paging.total : 0}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          />
        </ul>
      </div>
    )
  }
}
export default PagingList