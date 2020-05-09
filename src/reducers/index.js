import { combineReducers } from 'redux'
import getProductRed from './getProductRed'
import getParamRequest from './getParamRequest'
import getListCategory from './getListCategory'
import getTextSearch from './getTextSearch'
const myReducer = combineReducers({
  getProductRed,
  getParamRequest,
  getListCategory,
  getTextSearch
})
export default myReducer