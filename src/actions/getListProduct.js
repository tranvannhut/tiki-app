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
    return axios.get(`https://tiki.vn/api/v2/events/deals/?category_ids=${data.categoryId}&type=now&page=${data.pageNum}&per_page=20`).then(res => dispatch(getProductCategory(res.data)))
  }
}

