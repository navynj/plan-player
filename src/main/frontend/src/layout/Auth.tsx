import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../store/user';
import classes from './Auth.module.css';

function Auth() {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [isLoginMode, setIsLoginMode] = useState(true);

    // Auth check
    const auth = useSelector((state: any) => state.user.isAuthenticated);
    if (auth) {
        navigation('/', { replace: true });
    }

    // Autofocus
    useEffect(() => {
        usernameRef.current!.focus();
    }, [usernameRef, isLoginMode]);

    const changeModeHandler = () => {
        setIsLoginMode((prevState) => !prevState);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredUsername = usernameRef.current!.value;
        const enteredPassword = passwordRef.current!.value;
        console.log(enteredUsername, enteredPassword);
        dispatch(userActions.login());
        navigation('/', { replace: true });
    };

    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <img
                    src={require('../assets/logo.png')}
                    alt="Plan player logo. Play button like letter P"
                />
                <h1>Plan Player</h1>
            </div>
            <div className={classes.form}>
                <div className={classes.errors}></div>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputs}>
                        <div className={classes.field}>
                            <input
                                ref={usernameRef}
                                id="username"
                                type="text"
                                name="username"
                                required
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className={classes.field}>
                            <input
                                ref={passwordRef}
                                id="password"
                                type="password"
                                name="password"
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button type="submit">
                        {isLoginMode ? 'Login' : 'Register'}
                    </button>
                    <div className={classes.links}>
                        {isLoginMode && (
                            <>
                                <button type="button">Guset Login</button>
                                <span>|</span>
                            </>
                        )}
                        <button type="button" onClick={changeModeHandler}>
                            {isLoginMode ? 'Register' : 'Back to login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;
