import * as actionTypes from './../constants/index'
const getProductRed = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT:
      return action.productsList;
    default: return state
  }
}

export default getProductRed