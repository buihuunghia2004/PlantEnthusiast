import axios from 'axios'

const InstanceAxios = axios.create({
  baseURL: 'http://10.0.2.2:7272/v1/'
})

InstanceAxios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
);

export default InstanceAxios