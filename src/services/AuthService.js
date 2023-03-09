import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_Base_URL } from './AxiosSettings.js';

export const LoginService = createAsyncThunk(
    'user/login',
    async ({ username, password, remember }, { rejectWithValue }) => {
        try {
            const axiosRequest = axios.create({
                baseURL: API_Base_URL,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            const datas = await axiosRequest.post("/user/login", {
                "email": username,
                "password": password
            });

            if (remember === true) {
                localStorage.setItem("userToken", datas.data.body.token);
            } else {
                localStorage.clear();
            };
            
            return datas.data;

        } catch (error) {
            console.log(error.response.data.status + " " + error.response.data.message);

            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            };
        };
    }
);

export const LogoutService = () => {
    localStorage.removeItem("userToken");
};

