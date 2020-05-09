import { actFetchCategory } from "../actions/getListProduct"
import { connect } from "react-redux"
import PagingList from "../components/footer/PagingList"
import { changePageNum } from "../actions"

const mapStateToProps = state => ({
  paging: state.getParamRequest,
  listProduct: state.getProductRed
})
const mapDispatchToPropss = dispatch => ({
  getProductList: data => dispatch(actFetchCategory(data)),
  setParamter: data => dispatch(changePageNum(data))
})
export default connect(mapStateToProps, mapDispatchToPropss)(PagingList)