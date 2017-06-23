import { API } from '@/config'
import axios from 'axios'

const get = async (token) => {
  return await axios.get(`${API}/admin/adminGetClientList.action`, {
    params: {
      token
    }
  })
}


const update = async(clientId, status, token) => {
  return await axios.get(`${API}/admin/adminFrozenOrThawClient.action`, {
    params: {
      clientId,
      active: status,
      token
    }
  })
}

export {
  get,
  update
}
