import * as actionTypes from './../constants/index'
const getProductRed = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SEARCH_CATEGORY:
      console.log(action.productsList)
      return action.productsList;
    default: return state
  }
}
export default getProductRed