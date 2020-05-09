import React, { Component } from "react";
import Pagination from "react-js-pagination";
class PagingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(pageNumber) {
    const { paging } = this.props
    const categoryId = paging['categoryId']
    this.setState({ activePage: pageNumber });
    this.props.setParamter({ categoryId: categoryId, pageNum: pageNumber })
    this.props.getProductList({ categoryId: categoryId, pageNum: pageNumber })
  }
  render() {
    var { listProduct } = this.props
    let paging = listProduct['paging']
    return (
      <div className="list-pager" >
        <ul>
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            hideDisabled
            activePage={this.state.activePage}
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