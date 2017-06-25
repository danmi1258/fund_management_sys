import {
  API
} from '@/config'
import axios from 'axios'

/**
 * [组合查询交易记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const get = async (params) => {
  const DEFAULT = {
    trasId: '',
    transType: '',
    clientId: '',
    fundId: '',
    pageNo: 1,
    token: '',
    adminId: ''
  }
  params = Object.assign(DEFAULT, params)
  const {
    transId,
    transType,
    clientId,
    fundId,
    pageNo,
    token,
    adminId,
  } = params
  return await axios.get(`${API}/fundtrans/allFundRecord.action`, {
    params: {
      adminId,
      transId,
      transType,
      clientNo: clientId,
      fundId,
      pageNo,
      token
    }
  })
}
export {
  get
}
