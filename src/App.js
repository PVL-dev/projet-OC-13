import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, updateUserDatas } from './features/reducer/userSlice.js';
import { getUserDatas } from './services/UserService.js';
import { tokenSelector } from './utils/selectors.js';
import RouteProtector from './utils/RouteProtector.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';

const App = () => {
	const dispatch = useDispatch();
	const token = useSelector(tokenSelector);

	useEffect(() => {
		const initUserDatas = async (token) => {
			const userDatas = await getUserDatas(token);
			dispatch(updateUserDatas(userDatas));
		};

		if (token) {
			initUserDatas(token);
			dispatch(login(true));
		};
	}, [token, dispatch]);

    return (
		<div id="App">
			<BrowserRouter>
				<Header />
				
				<main className="main-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/index" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route element={<RouteProtector />} >
							<Route path="/profile" element={<Profile />} />
						</ Route>
						<Route path="*" element={<Home />} />
					</ Routes>
				</main>

				<Footer />
			</ BrowserRouter>
		</div>
    );
}

export default App;

