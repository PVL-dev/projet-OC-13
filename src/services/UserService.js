import axios from 'axios';
import { API_Base_URL } from './AxiosSettings.js';

export const getUserDatas = async (token) => {
    try {
        const axiosRequest = axios.create({
            baseURL: API_Base_URL,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        const datas = await axiosRequest.post("/user/profile");
        
        return datas.data;

    } catch (error) {
        console.log(error.response.data.status + " " + error.response.data.message);
    };
};

export const updateUserDatasServer = async (token, firstName, lastName) => {
    try {
        const axiosRequest = axios.create({
            baseURL: API_Base_URL,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        const datas = await axiosRequest.put("/user/profile", {
            firstName,
            lastName
        });
        
        return datas.data;

    } catch (error) {
        console.log(error.response.data.status + " " + error.response.data.message);
    };
};

