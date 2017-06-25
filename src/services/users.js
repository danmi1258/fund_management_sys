import { API } from '@/config'
import axios from 'axios'

const get = async ({ adminId, token}) => {
  return await axios.get(`${API}/admin/adminGetClientList.action`, {
    params: {
      adminId,
      token
    }
  })
}


const update = async({clientId, active, adminId, token}) => {
  return await axios.get(`${API}/admin/adminFrozenOrThawClient.action`, {
    params: {
      adminId,
      clientId,
      active,
      token
    }
  })
}

export {
  get,
  update
}
