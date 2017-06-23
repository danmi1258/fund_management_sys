import {
  API
} from '@/config'
import axios from 'axios'

const get = async () => {
  return await axios.get(`${API}/admin/adminLoadFeature.action`)
}

const add = async () => {
  return await axios.get(`${API}/admin/adminAddFeature.action`, {
    params: {

    }
  })
}

export {
  get
}
