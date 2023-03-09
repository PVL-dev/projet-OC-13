import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_Base_URL } from './AxiosSettings.js';

export const getUserDatas = async (token) => { //createAsyncThunk(
//    'user/datas',
//    async ( token , { rejectWithValue }) => {
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

            if (error.response && error.response.data.message) {
                //return rejectWithValue(error.response.data.message);
            } else {
                //return rejectWithValue(error.message);
            };
        };
    }
//);

