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
  // res.data.FundList.map((value) => {
  //   const {}
  //     fundNo,
  //     fundName,
  //     fundPrice,
  //     fundStatus,
  //     fundDescribe,
  //     fundCreateDate
  // })
  // return {
  //   no: fundNo,
  //   name: fundName,
  //   price: fundPrice,
  //   status: fundStatus,
  //   desc: fundDescribe,
  //   date: fundCreateDate
  // }
}

export {
  add,
  get
}
