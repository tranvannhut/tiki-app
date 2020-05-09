import { connect } from 'react-redux'
import Sidebar from '../components/menu/Sidebar'
import { actFetchCategory } from '../actions/getListProduct'
import { getParamRequest, toggleCategory } from './../actions/index'

const mapStateToProps = state => ({
  params: state.getParamRequest,
  listCategory: state.getListCategory
})
const mapDispatchToProps = dispatch => ({
  toggleCategoryItem: id => dispatch(toggleCategory(id)),
  setParamter: param => dispatch(getParamRequest(param)),
  filterCategoryProduct: data => dispatch(actFetchCategory(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)