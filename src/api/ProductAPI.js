import InstanceAxios from "../utils/InstanceAxios";

export const getProductHome = async () => {
  try {
    const result = await InstanceAxios.get('product/customer')
    console.log('Login success....');
    return result
  } catch (error) {
    console.log('Login fail....');
    return error.response.data
  }
}

export const getProductById = async (id) => {
  try {
    const result = await InstanceAxios.get(`product/${id}`)
    console.log('Login success....');
    return result
  } catch (error) {
    console.log('Login fail....');
    return error.response.data
  }
}
export const getProductByCategoryId = async (data) => {
  try {
    const {page, limit, categoryId} = data
    const result = await InstanceAxios.get(`product/category?page=${page}&limit=${limit}&categoryId=${categoryId}`)
    console.log('Login success....');
    return result
  } catch (error) {
    console.log('Login fail....');
    return error.response.data
  }
}
export const searchProduct = async (key) => {
  try {
    const result = await InstanceAxios.get(`product/search?key=${key}`)
    console.log('Login success....');
    return result
  } catch (error) {
    console.log('Login fail....');
    return error.response.data
  }
}
