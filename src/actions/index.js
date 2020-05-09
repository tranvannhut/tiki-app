import * as actionTypes from './../constants/index'
export const getProductCategory = (productsList) => ({
  type: actionTypes.SEARCH_PRODUCT,
  productsList
})
export const getParamRequest = (data) => ({
  type: actionTypes.GET_PARAMETER_REQUEST,
  data
})

export const toggleCategory = (id) => ({
  type: actionTypes.TOGGLE_CATEGORY,
  id
})
export const changePageNum = (data) => ({
  type: actionTypes.CHANGE_PAGENUM,
  data
})

export const getTextSearch = (data) => ({
  type: actionTypes.VISIBLE_PRODUCT,
  data
})
