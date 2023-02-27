import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { activePage } from '../features/userReducer.js';
import { LoginService } from '../services/API-Services.js';
//import { errorStatusSelector } from '../utils/selectors.js';

const Login = () => {
    const dispatch = useDispatch();


    require('react-dom');
    window.React2 = require('react');
    console.log(window.React2);
    

    //const loginError = useSelector(errorStatusSelector);
    const usernameInput = useRef();
    const passwordInput = useRef();
    const rememberInput = useRef();

    const submit = async (e) => {
        e.preventDefault();

        LoginService(
            usernameInput.current.value,
            passwordInput.current.value,
            rememberInput.current.checked
        );
    };

    useEffect(() => {
        dispatch(activePage("Login"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="loginPage">
            <main className="main bg-dark">
                <section className="login-content">
                    <i className="fa fa-user-circle login-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={submit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">
                                Username
                            </label>
                            <input id="username" type="text" ref={usernameInput}/>
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input id="password" type="password" ref={passwordInput}/>
                        </div>

                        <div className="input-remember">
                            <input id="remember-me" type="checkbox" ref={rememberInput}/>
                            <label htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        
                        <a href="./user.html" className="login-button sr-only">Sign In</a>

                        <button className="login-button">Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Login;

