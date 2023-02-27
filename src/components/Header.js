import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { allDatasSelector, activePageSelector, userFirstNameSelector, authenticationStatusSelector } from '../utils/selectors.js';
import { logout } from '../features/userReducer.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const dispatch = useDispatch();
    const goTo = useNavigate();

    const rawDatas = useSelector(allDatasSelector);
    //console.log(rawDatas);

	const activePage = useSelector(activePageSelector);
    const authenticatedStatus = useSelector(authenticationStatusSelector);
    const userFirstName = useSelector(userFirstNameSelector);
    
    const initLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
        goTo("/");
    };

    return (
        <div id="header">
            <nav className="main-nav">
                <Link className="main-nav-logo" to='/'>
                    <img src={logo} className="main-nav-logo-image" alt="Argent Bank" />
                    <h1 className='sr-only'>Argent Bank</h1>
                </Link>

                <div className="main-nav-container"> 
					{authenticatedStatus ? (
						<React.Fragment>
							<Link className="main-nav-container-item" to='/user'>
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
							{activePage === "Login" ? (
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

