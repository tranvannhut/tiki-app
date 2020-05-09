import * as actionTypes from './../constants/index'
import { listCategory } from './../constants/listCategory'

const getListCategory = (state = listCategory, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CATEGORY:
      return state.map(ele => ele.category_ids === action.id ? { ...ele, status: !ele.status } : ele)
    default:
      return [...state]
  }
}
export default getListCategory