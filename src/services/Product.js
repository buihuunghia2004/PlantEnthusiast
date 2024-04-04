import instance from "../utils/InstanceAxios";

export const getProductsByCategoryId = async (categoryId) =>{
    try {
        const categories = await instance.get(`category/${categoryId}/products`);
        return categories;
    } catch (error) {
        console.log('Get all Category error....'+error);
    }
};

export const getPageProductByCategory = async (props) =>{
    const {category,page,limit} = props
    try {
        // const res = await instance.get(`product?category=${category}&&page=${page}`);
        // const res = await instance.get(`category/${category}/products?page=${page}&limit${limit}`);
        const res = await instance.get(`category/${category}/products?page=${page}&limit=${limit}`);
        return res;
    } catch (error) {
        return error;
    };
};

//http://localhost:3000/product/search?key=a
export const search = async (key) =>{
    try {
        const res = await instance.get(`product/search?key=${key}`);
        console.log(res);
        return res;
    } catch (error) {
        return error;
    };
};
