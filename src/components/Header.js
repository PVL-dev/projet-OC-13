import React/*, { useEffect }*/ from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/reducer/userSlice.js';
import { LogoutService } from '../services/AuthService.js';
import { 
	activePageSelector,
	authenticationStatusSelector,
	loadingStatusSelector,
	userFirstNameSelector
} from '../utils/selectors.js';
import logo from '../assets/logo/argentBankLogo.png';

const Header = () => {
	const dispatch = useDispatch();
    const navigate = useNavigate();

	const activePage = useSelector(activePageSelector);
	const isLoading = useSelector(loadingStatusSelector);
    const isAuthenticated = useSelector(authenticationStatusSelector);
    const userFirstName = useSelector(userFirstNameSelector);

    const initLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
		LogoutService();
        navigate("/");
    };

    return (
        <div id="header">
            <nav className="main-nav">
                <Link className="main-nav-logo" to='/'>
                    <img src={logo} className="main-nav-logo-image" alt="Argent Bank" />
                    <h1 className='sr-only'>Argent Bank</h1>
                </Link>

                <div className="main-nav-container"> 
					{isAuthenticated ? (
						<React.Fragment>
							<Link className="main-nav-container-item" to='/profile'>
								<i className="fa fa-user-circle"></i>
								{userFirstName}
							</Link>
							<Link className="main-nav-container-item" onClick={initLogout}>
								<i className="fa fa-sign-out"></i>
								Sign Out
							</Link>
						</React.Fragment>
                    ) : (
						<React.Fragment>
							{activePage === "Login" || isLoading === true ? (
								<div className=""></div>
							) : (
								<Link className="main-nav-container-item" to='/login'>
									<i className="fa fa-user-circle"></i>
									Sign In
								</Link>
							)}
						</React.Fragment>
                    )}
				</div>
            </nav>
        </div>
    );
};

export default Header;

