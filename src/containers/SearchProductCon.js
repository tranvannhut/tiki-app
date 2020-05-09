import { connect } from 'react-redux'
import Header from '../components/header/Header'
import { getTextSearch } from '../actions'
const mapStateToProps = (state) => ({
  textSearch: state.getTextSearch
})
const mapDispatchToProps = (dispatch) => ({
  getListProduct: (data) => dispatch(getTextSearch(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)