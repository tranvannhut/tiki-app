import axios from 'axios'
import { getProductCategory } from '.'
//case Search product
export const actFetchSearchProduct = (data) => {
  return (dispatch) => {
    return axios.get(`https://tiki.vn/api/v2/search/suggestion?q=${data}`).then(res => console.log(res.data))
  }
}

//case filter category of Products
export const actFetchCategory = (data) => {
  return (dispatch) => {
    /*  if (!!data) {
       return axios.get(`https://tiki.vn/api/v2/events/deals`).then(res => dispatch(getProductCategory(res.data)))
     } */
    return axios.get(`https://tiki.vn/api/v2/events/deals/?category_ids=${data}&type=now&page=1&per_page=20`).then(res => dispatch(getProductCategory(res.data)))
  }
}
