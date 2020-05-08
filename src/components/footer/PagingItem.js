import React, { Component } from "react";


class PagingItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paging: {}
    }
  }
  componentDidMount() {
    var { paging } = this.props
    this.setState({ paging: { ...paging } })
  }
  render() {
    // var { paging } = this.props
    console.log(this.state.paging)
    return (
      <li>

      </li>
    )
  }
}
export default PagingItem