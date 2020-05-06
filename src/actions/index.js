import * as actionTypes from './../constants/index'
export const getProductCategory = (productsList) => ({
  type: actionTypes.SEARCH_CATEGORY,
  productsList
})