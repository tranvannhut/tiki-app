import React, { Component } from "react";
import Pagination from "react-js-pagination";

import "bootstrap-less";

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
    this.props.getProductList({ categoryId: categoryId, pageNum: pageNumber })
  }
  render() {
    var { listProduct } = this.props
    let paging = listProduct['paging']
    if (!!paging) {
      return <Pagination
        hideDisabled
        activePage={this.state.activePage}
        itemsCountPerPage={paging.per_page}
        totalItemsCount={paging.total}
        pageRangeDisplayed={5}
        onChange={this.handlePageChange.bind(this)}
      />
    }

    return (
      <div className="list-pager" >
        <ul>
          {/*   <Pagination
            hideDisabled
            activePage={this.state.activePage}
            itemsCountPerPage={20}
            totalItemsCount={paging.total}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          /> */}
        </ul>
      </div>
    )
  }
}
export default PagingList