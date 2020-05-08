import * as actionTypes from './../constants/index'
export const getProductCategory = (productsList) => ({
  type: actionTypes.SEARCH_CATEGORY,
  productsList
})
export const getParamRequest = (data) => ({
  type: actionTypes.GET_PARAMETER_REQUEST,
  data
})