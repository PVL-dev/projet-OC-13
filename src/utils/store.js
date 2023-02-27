import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userReducer.js'

export default configureStore({
	reducer: {
		userDatas: userReducer,
	},
});

