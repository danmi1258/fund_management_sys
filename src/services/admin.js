import { API } from '@/config'
import axios from 'axios'

const get = async (username, password) => {
  const res = await axios.get('http://localhost:8080/FMS/admin/adminLogin.action', {
    params: {
      userNo: username,
      userPwd: password
    }
  })
  return res
}

export {
  get
}
