import { actFetchCategory } from "../actions/getListProduct"
import { connect } from "react-redux"
import PagingList from "../components/footer/PagingList"

const mapStateToProps = state => ({
  paging: state.getParamRequest,
  listProduct: state.getProductRed
})
const mapDispatchToPropss = dispatch => ({
  getProductList: data => dispatch(actFetchCategory(data))
})
export default connect(mapStateToProps, mapDispatchToPropss)(PagingList)