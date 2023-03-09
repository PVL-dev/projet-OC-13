import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/reducer/userSlice.js';

const store = configureStore({
	reducer: {
		userDatas: userSlice
	}
});

export default store;

