import InstanceAxios from "../utils/InstanceAxios";

export const newOrder = async (data) => {
  const {id, body} = data
  try {
    const result = await InstanceAxios.post(`user/${id}/order`, body)
    console.log('Login success....');
    return result
  } catch (error) {
    console.log('Login fail....');
    return error.response.data
  }
}