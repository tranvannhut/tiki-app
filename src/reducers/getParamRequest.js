import * as actionTypes from './../constants/index'
const initParameter = {
  categoryId: "",
  pageNum: 1
}
const getParamRequest = (state = initParameter, action) => {
  switch (action.type) {
    case actionTypes.GET_PARAMETER_REQUEST:
      let arr = addParamRequest(action.data)
      let states = {
        categoryId: arr.join("%2C"),
        pageNum: action.data.pageNum
      }
      return states
    case actionTypes.CHANGE_PAGENUM:
      return action.data
    case actionTypes.RESET_LIST_PRODUCT:
      var resetState = {
        categoryId: "",
        pageNum: 1
      }
      return resetState
    default: return state
  }
}
var array = []
const addParamRequest = (param) => {
  if (!param.status) {
    array.push(param.categoryId)
  } else {
    const index = array.indexOf(param.categoryId);
    array.splice(index, 1);
  }
  return array
}

export default getParamRequest
