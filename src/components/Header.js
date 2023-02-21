import React from 'react';
import logo from '../assets/logo/argentBankLogo.png';

const Header = () => {
    return (
        <div id="header">
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="./sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;

