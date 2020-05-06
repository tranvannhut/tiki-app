import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef()
  }
  onSubmitSearch = (e) => {
    e.preventDefault()
    const data = this.textRef.current.value;
    if (!!data) {
      this.props.getListProduct(data)
    }
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmitSearch}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={this.textRef} />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
export default Header