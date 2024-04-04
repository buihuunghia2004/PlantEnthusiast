import InstanceAxios from "../utils/InstanceAxios";

export const login = async (body) => {
  try {
    const result = await InstanceAxios.post('auth/login', body)
    console.log('Login success....');
    return result
  } catch (error) {
    console.log('Login fail....');
    return error.response.data
  }
}

export const getUserInfo = async (id) => {
  try {
    const result = await InstanceAxios.get(`user/${id}`)
    console.log('Get info success....');
    return result
  } catch (error) {
    console.log('Get info fail....');
    return error.response.data
  }
}

export const updateUserInfo = async (data) => {
  try {
    const {id, info} =data
    const result = await InstanceAxios.put(`user/${id}`,info)
    console.log('Get info success....');
    return result
  } catch (error) {
    console.log('Get info fail....');
    return error.response.data
  }
}