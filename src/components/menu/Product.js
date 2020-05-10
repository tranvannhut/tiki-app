import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countDownLine: ""
    }
  }

  componentDidMount() {
    this.timeDeadLine = setInterval(() => {
      const melliseconds = this.props.pro.special_to_date
      //this.props.countDownTime(melliseconds)
      let x = this.countDown(melliseconds)
      this.setState({
        countDownLine: x
      })
    }, 900);
  }
  countDown = (deadline) => {
    let newDate = new Date();
    let totalTimeNow = newDate.getTime();
    let totalFutureTime = deadline * 1000
    var timeRemain = totalFutureTime - totalTimeNow;
    var seconds = Math.floor(timeRemain / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var day = Math.floor(hours / 24);
    let currentSecond = (seconds % 60);
    let currentMinute = (minutes % 60);
    let currentHour = (hours % 24);
    let currentDay = day
    currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
    currentMinute = (currentMinute < 10) ? "0" + currentMinute : currentMinute;
    currentSecond = (currentSecond < 10) ? "0" + currentSecond : currentSecond;
    let countDownLine = `${currentDay} days ${currentHour}:${currentMinute}:${currentSecond}`
    return countDownLine
  }

  componentWillUnmount() {
    clearInterval(this.timeDeadLine)
  }
  render() {
    let { pro } = this.props
    let width = (pro.progress.qty_ordered * 100) / (pro.progress.qty)
    let percentWidth = width.toFixed(1)
    var currentPrice = pro.product.list_price
    currentPrice = currentPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    var salePrice = pro.product.price;
    salePrice = salePrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    var textWidth = ""
    var amount = ""
    if (width < 5) {
      textWidth = "Vừa mở bán"
    } else if (width < 80) {
      textWidth = "Đã bán"
      amount = pro.progress.qty_ordered
    } else {
      textWidth = "Sắp bán hết"
    }
    let deadlineTime = this.state.countDownLine
    // let deadlineTime = this.props.timeDeadLine
    return (
      <a className="deal-item" target="_blank" rel="noopener noreferrer" href={pro.product.url_path}>
        <div className="image">
          <div className="discount-badge">-{pro.discount_percent}%</div>
          <i className="tikicon icon-tikinow-20"></i>
          <img className="lazy" src={pro.product.thumbnail_url} style={{ width: "200px", display: "inline" }} alt="img" />
        </div>
        <div className="title"><i className="tikicon icon-tikinow"></i>{pro.product.name}</div>
        <div className="price-sale"> {salePrice}<span className="price-regular"> {currentPrice}</span></div>
        <div className="deal-status">
          <div className="process-bar">
            <span className="tikicon icon-hot_12"></span>
            <div style={{ width: `${percentWidth}%` }}></div>
            <span className="text">{textWidth} {amount}</span></div>
          <div className="started">
            <div className="deal-count-down">
              <span className="time">{deadlineTime}</span></div>
          </div>
        </div>
      </a>
    )
  }
}
export default Product