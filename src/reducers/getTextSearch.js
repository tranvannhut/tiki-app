import * as actionType from './../constants/index'
const getTextSearch = (state = "", action) => {
  switch (action.type) {
    case actionType.VISIBLE_PRODUCT:
      return action.data
    default:
      return state;
  }
}
export default getTextSearch
