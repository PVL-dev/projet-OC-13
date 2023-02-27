import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailed, loginSuccess } from "../features/userReducer";

const API_Base_URL = "http://localhost:3001/api/v1";
const axiosRequest = axios.create({
    baseURL: API_Base_URL,
    headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
});

export const LoginService = (username, password, remember) => {
    const dispatch = useDispatch();

    console.log(username)
    console.log(password)
    console.log(remember)

    if (!username || !password) {
        return;
    } else {
    };

    const getDatas = async () => {
        try {
            const test = await axiosRequest.post("/user/login", {
                "email": username,
                "password": password
            });

            const token = test.data.body.token;

            if (remember === true) {
                localStorage.setItem('jwtToken', token);
                console.log(localStorage);
            };

            dispatch(loginSuccess());
        } catch (error) {
            console.log(error.response.data.status + " " + error.response.data.message);
            dispatch(loginFailed(error.response.data.message))
        };
    };

    //dispatch(loginPending())
    getDatas()
};

