import { connect } from 'react-redux'
import Sidebar from '../components/menu/Sidebar'
import { actFetchCategory } from '../actions/getListProduct'
import { getParamRequest } from './../actions/index'

const mapStateToProps = state => ({
  params: state.getParamRequest
})
const mapDispatchToProps = dispatch => ({
  setParamter: param => dispatch(getParamRequest(param)),
  filterCategoryProduct: data => dispatch(actFetchCategory(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)