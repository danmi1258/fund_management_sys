import { API } from '@/config'
import axios from 'axios'

const add = async ({ name, desc, date }, { adminId, typeId, token }) => {
  console.log(typeId)
  console.log(token)
  token = token.replace(/\"/g, "")
  const res = await axios.get(`${API}/admin/adminFundAdd.action`, {
    params: {
      adminId,
      'fund.FundName': name,
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

const remove = async ({adminId, fundNo, token }) =>{
  return await axios.get(`${API}/admin/adminDeleteFund.action`, {
    params: {
      adminId,
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
const batchRemove = async ({adminId, fundNos, token}) => {
  return await axios.get(`${API}/admin/adminBatchDelete.action`, {
    params: {
      adminId,
      fundNoArr: fundNos,
      token
    }
  })
}

const update = async ({ id, name, status, desc }, {adminId, typeId, token}) => {
  console.log('token: ' + token)
  console.log(typeof id)
  return await axios.get(`${API}/admin/adminUpdateFund.action`, {
    params: {
      adminId,
      'fund.FundNo': id,
      'fund.FundName': name,
      'fund.FundStatus': status,
      'fund.FundDescribe': desc,
      'fund.fundType.fundTypeId': typeId,
      token
    }
  })
}



export {
  add,
  get,
  remove,
  update,
  batchRemove
}
