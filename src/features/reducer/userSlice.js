import { createSlice } from '@reduxjs/toolkit';
import { LoginService } from '../../services/AuthService.js';
import { isTokenExpired } from '../../utils/userToken.js';

let userToken = localStorage.getItem('userToken')
? isTokenExpired(localStorage.getItem('userToken'))
: null;

const initialState = {
	isLoading: false,
	activePage: null,
	isAuthenticated: false,
	user: {
		firstName: null,
		lastName: null,
		email: null
	},
	userToken,
	errorMessage: null
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		activePage: (state, action) => {
			state.activePage = action.payload;
		},
		login: (state, action) => {
			state.isAuthenticated = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.user = {
				firstName: "",
				lastName: "",
				email: "",
			};
			state.userToken = "";
		},
		updateUserDatas: (state, { payload }) => {
			state.user.firstName = payload.body.firstName;
			state.user.lastName = payload.body.lastName;
			state.user.email = payload.body.email;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(LoginService.pending, (state) => {
			state.isLoading = true;
			state.errorMessage = null;
		})
		.addCase(LoginService.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.userInfo = payload.body;
			state.userToken = payload.body.token;
			state.isAuthenticated = true;
		})
		.addCase(LoginService.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.errorMessage = payload;
		});
	}
});

export const { activePage, login, logout, updateUserDatas } = userSlice.actions;

export default userSlice.reducer;

