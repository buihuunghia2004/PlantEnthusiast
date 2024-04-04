import instance from "../utils/InstanceAxios";

export const getAllCategory = async () =>{
    try {
        const categories = await instance.get('category');
        return categories;
    } catch (error) {
        console.log('Get all Category error....'+error);
    }
};