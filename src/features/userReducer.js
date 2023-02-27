import { createSlice } from '@reduxjs/toolkit';
//import LoginService from '../services/API-Services.js';

export const userReducer = createSlice({
	name: "storredDatas",
	initialState: {
		//isLoading: false,
		activePage: "",
		isAuthenticated: false,
		user: {
			firstName: "",
			lastName: "",
			email: "",
		},
		token: "",
		errorMessage: ""
	},
	reducers: {
		/*loginPending: (state) => {
			state.isLoading = true;
		},*/
		activePage: (state, action) => {
			state.activePage = action.payload;
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.token = action.payload;
			state.errorMessage = "";
		},
		loginFailed: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.user = {
				firstName: "",
				lastName: "",
				email: "",
			};
			state.token = "";
		},
		updateUserDatas: (state, action) => {
			state.isAuthenticated = true;
			state.user.firstName = action.payload.userFirstName;
			state.user.lastName = action.payload.userLastName;
			state.user.email = action.payload.userEmail;
		},
	},
});

export const { /*loginPending, */activePage, loginSuccess, loginFailed, logout, updateUserDatas } = userReducer.actions;

export default userReducer.reducer;

