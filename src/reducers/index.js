import { combineReducers } from 'redux'
import getProductRed from './getProductRed'
import getParamRequest from './getParamRequest'
const myReducer = combineReducers({
  getProductRed,
  getParamRequest
})
export default myReducer