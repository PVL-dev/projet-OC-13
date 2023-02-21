import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import SignIn from './pages/Sign-in.js';
import User from './pages/User.js';

const App = () => {
    return (
		<div id="App">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/index' element={<Home />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/user' element={<User />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
    );
}

export default App;

