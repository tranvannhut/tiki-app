import axios from 'axios'
import { getProductCategory } from './index'

//case filter category of Products
export const actFetchCategory = (data) => {
  console.log(data)
  return (dispatch) => {
    return axios.get(`https://tiki.vn/api/v2/events/deals/?category_ids=${data.categoryId}&type=now&page=${data.pageNum}&per_page=20`).then(res => dispatch(getProductCategory(res.data)))
  }
}