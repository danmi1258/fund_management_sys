import {
  API
} from '@/config'
import axios from 'axios'

/**
 * [获取基金类型信息]
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
const get = async () => {
  return await axios.get(`${API}/admin/adminGetFundType.action`)
}

const remove = async (typeId, token) => {
  return await axios.get(`${API}/admin/adminDeleteFundType.action`, {
    params: {
      fundTypeId: typeId,
      token
    }
  })
}

const add = async (name, token) => {
  return await axios.get(`${API}/admin/adminAddFundType`, {
    params: {
      fundTypeName: name,
      token
    }
  })
}

export {
  add,
  get,
  remove
}
