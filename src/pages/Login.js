import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { activePage } from '../features/reducer/userSlice.js';
import { LoginService } from '../services/AuthService.js';
import { 
    authenticationStatusSelector,
    loadingStatusSelector,
    errorMessageSelector
} from '../utils/selectors.js';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector(loadingStatusSelector);
    const [buttonClassName, setButtonClassName] = useState();
    const isAuthenticated = useSelector(authenticationStatusSelector);
    const loginError = useSelector(errorMessageSelector);

    const usernameInput = useRef();
    const passwordInput = useRef();
    const rememberInput = useRef();

    const submit = async (e) => {
        e.preventDefault();

        const submitDatas = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            remember: rememberInput.current.checked
        };

        dispatch(LoginService(submitDatas));
    };

    useEffect(() => {
        dispatch(activePage("Login"));

        if (isLoading) {
            setButtonClassName("login-button buttonLoader");
        } else {
            setButtonClassName("login-button buttonText"); 
        };

        if (isAuthenticated) {
            navigate('/profile');
        };
    }, [dispatch, navigate, isLoading, isAuthenticated]);

    return (
        <div id="loginPage">
            <main className="main bg-dark">
                <section className="login-content">
                    <i className="fa fa-user-circle login-icon"></i>
                    <h1>Sign In</h1>
                    <p>tony@stark.com</p>
                    <p>password123</p>
                    <form onSubmit={submit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">
                                Username
                            </label>
                            <input id="username" type="text" ref={usernameInput} required={true}/>
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input id="password" type="password" ref={passwordInput} required={true}/>
                        </div>

                        <div className="input-remember">
                            <input id="remember-me" type="checkbox" ref={rememberInput}/>
                            <label htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        
                        <a href="./user.html" className="login-button sr-only">Sign In</a>

                        <button className={buttonClassName}> 
                            <p>Sign In</p>
                            <span></span>
                        </button>
                    </form>

                    <div className="login-content__error">{loginError}</div>
                </section>
            </main>
        </div>
    );
};

export default Login;

