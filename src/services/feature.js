import {
  API
} from '@/config'
import axios from 'axios'

const get = async () => {
  return await axios.get(`${API}/admin/adminLoadFeature.action`)
}
const add = async ({ title, info1, info2, info3 }, token) => {
  console.log(token)
  return await axios.get(`${API}/admin/adminAddFeature.action`, {
    params: {
      'featureTitle': title,
      'featureDescribe': info1,
      'featureInfo': info2,
      'featureInfo2': info3,
      token
    }
  })
}

export {
  get,
  add
}
