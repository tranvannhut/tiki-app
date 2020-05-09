import { actFetchCategory } from "../actions/getListProduct"
import { connect } from "react-redux"
import ProductList from "../components/menu/ProductLink"

const mapStateToProps = state => ({
  params: state.getParamRequest,
  listProduct: state.getProductRed,
  textSearch: state.getTextSearch
})
const mapDispatchToProps = dispatch => ({
  getDefaultListProduct: data => dispatch(actFetchCategory(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)