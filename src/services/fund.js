import { API } from '@/config'
import axios from 'axios'

const add = async ({ name, price, desc, date }, typeId, token) => {
  console.log(typeId)
  console.log(token)
  token = token.replace(/\"/g, "")
  const res = await axios.get(`${API}/admin/adminFundAdd.action`, {
    params: {
      'fund.FundName': name,
      'fund.FundPrice': price,
      'fund.fundType.fundTypeId': typeId,
      'fund.FundDescribe': desc,
      'fund.date': date,
      'token': token
    }
  })
  return res
}

const get = async (pageNumber = 1) => {
  const res = await axios.get(`${API}/admin/adminLoadFund.action`, {
    params: {
      fundPageNo: pageNumber
    }
  })
  return res
}

const remove = async (fundNo, token) =>{
  return await axios.get(`${API}/admin/adminDeleteFund.action`, {
    params: {
      'fund.FundNo': fundNo,
      token
    }
  })
}

/**
 * [批量删除]
 * @param  {[type]} fundNos [基金号列表]
 * @param  {[type]} token   [token]
 * @return {[type]}         [description]
 */
const batchRemove = async (fundNos, token) => {
  return await axios.get(`${API}/admin/adminBatchDelete.action`, {
    params: {
      fundNoArr: fundNos,
      token
    }
  })
}

const update = async ({ id, name, price, status, desc }, typeId, token) => {
  console.log(typeof id)
  return await axios.get(`${API}/admin/adminUpdateFund.action`, {
    params: {
      'fund.FundNo': id,
      'fund.FundName': name,
      'fund.FundPrice': price,
      'fund.FundStatus': status,
      'fund.FundDescribe': desc,
      'fund.fundType.fundTypeId': typeId,
      token
    }
  })
}

/**
 * [获取基金类型信息]
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
const getTypes = async (token) => {
  return await axios.get(`${API}/admin/adminGetFundType.action`, {
    params: {
      token
    }
  })
}

export {
  add,
  get,
  remove,
  update,
  batchRemove,
  getTypes
}
