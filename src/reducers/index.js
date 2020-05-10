import { combineReducers } from 'redux'
import getProductRed from './getProductRed'
import getParamRequest from './getParamRequest'
import getListCategory from './getListCategory'
import getTextSearch from './getTextSearch'
import getCountDownTime from './getCountDownTime'
const myReducer = combineReducers({
  getProductRed,
  getParamRequest,
  getListCategory,
  getTextSearch,
  getCountDownTime
})
export default myReducer