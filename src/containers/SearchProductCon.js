import { connect } from 'react-redux'
import { actFetchSearchProduct } from '../actions/getListProduct'
import Header from '../components/header/Header'

const mapDispatchToProps = (dispatch) => ({
  getListProduct: (data) => dispatch(actFetchSearchProduct(data))
})
export default connect(null, mapDispatchToProps)(Header)