import * as actionTypes from './../constants/index'
const initParameter = {
  categoryId: "",
  pageNum: 1
}
const getParamRequest = (state = initParameter, action) => {
  switch (action.type) {
    case actionTypes.GET_PARAMETER_REQUEST:
      return { ...action.data }
    default: return state
  }
}

export default getParamRequest
