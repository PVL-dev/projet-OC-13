import { createSlice } from '@reduxjs/toolkit';
import { LoginService } from '../../services/AuthService.js';
import { getUserDatas } from '../../services/UserService.js';
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
		logout: (state) => {
			state.isAuthenticated = false;
			state.user = {
				firstName: "",
				lastName: "",
				email: "",
			};
			state.userToken = "";
		},
		updateUserDatas: (state, action) => {
			state.user.firstName = action.payload.userFirstName;
			state.user.lastName = action.payload.userLastName;
			state.user.email = action.payload.userEmail;
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

		/*builder.addCase(getUserDatas.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(getUserDatas.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user.firstName = payload.body.firstName;
			state.user.lastName = payload.body.lastName;
			state.user.email = payload.body.email;
		})
		.addCase(getUserDatas.rejected, (state, { payload }) => {
			state.isLoading = false;
		});*/
	}
});

export const { activePage, logout, updateUserDatas } = userSlice.actions;

export default userSlice.reducer;

