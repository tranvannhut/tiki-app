import { connect } from 'react-redux'
import Sidebar from '../components/menu/Sidebar'
import { actFetchCategory } from '../actions/getListProduct'

const mapDispatchToProps = dispatch => ({
  filterCategoryProduct: data => dispatch(actFetchCategory(data))
})
export default connect(null, mapDispatchToProps)(Sidebar)