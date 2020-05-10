import { actFetchCategory } from "../actions/getListProduct"
import { connect } from "react-redux"
import ProductList from "../components/menu/ProductLink"
import { countDowmTime } from "../actions"

const mapStateToProps = state => ({
  params: state.getParamRequest,
  listProduct: state.getProductRed,
  textSearch: state.getTextSearch,
  timeDeadLine: state.getCountDownTime
})
const mapDispatchToProps = dispatch => ({
  getDefaultListProduct: data => dispatch(actFetchCategory(data)),
  countDownTime: milliseconds => dispatch(countDowmTime(milliseconds))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)