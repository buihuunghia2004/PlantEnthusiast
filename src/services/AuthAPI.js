import instance from "../utils/InstanceAxios";

export const login = async (data) => {
    try {
        const res =  await instance.post("auth/login",data)
        return {
          status:true,
          data:res
        };
    } catch (error) {
       return {
        status:false,
        message:error.response.data.message
       }
    }
};

export const register = async (user) => {
    try {
        const res = await instance.post("auth/register",user);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};