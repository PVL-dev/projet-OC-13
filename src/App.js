import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import User from './pages/User.js';

const App = () => {
    return (
		<div id="App">
			<Provider store={store}>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/index' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/user' element={<User />} />
					</Routes>

					<Footer />
				</BrowserRouter>
			</Provider>
		</div>
    );
}

export default App;

