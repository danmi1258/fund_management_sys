import { API } from '@/config'
import axios from 'axios'

const add = async ({ name, price, desc, date }, token) => {
  console.log(token)
  token = token.replace(/\"/g, "")
  const res = await axios.get(`${API}/admin/adminFundAdd.action`, {
    params: {
      'fund.FundName': name,
      'fund.FundPrice': price,
      'fund.FundDescribe': desc,
      'fund.date': date,
      'token': token
    }
  })
  return res
}

const get = async (token) => {
  console.log(token)
  token = token.replace(/\"/g, "")
  const res = await axios.get(`${API}/admin/adminLoadFund.action`, {
    params: {
      token
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

const batchRemove = async (fundNos, token) => {
  return await axios.get(`${API}/admin/adminBatchDelete.action`, {
    params: {
      fundNoArr: fundNos,
      token
    }
  })
}

const update = async ({ id, name, price, status, desc }, token) => {
  console.log(typeof id)
  return await axios.get(`${API}/admin/adminUpdateFund.action`, {
    params: {
      'fund.FundNo': id,
      'fund.FundName': name,
      'fund.FundPrice': price,
      'fund.FundStatus': status,
      'fund.FundDescribe': desc,
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
