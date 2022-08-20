import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import './authForm.css';
import {authService, userService} from "../../services";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";

export const AuthForm = () => {

    const {register, handleSubmit, reset} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])
    const submit = async (user) => {
        try {
            if (!isLogin) {
                await userService.register(user);
                navigate('/login');
            } else {
                delete user.name
                delete user.username
                delete user.age
                await dispatch(authActions.login({user}))
                navigate(state.pathname, {replace: true})
            }
        } catch (e) {

        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'authForm'}>
            {
                !isLogin
                    ? <>
                        <input type="text" placeholder={'Name'} {...register('name')}/>
                        <input type="text" placeholder={'Username'} {...register('username')}/>
                        <input type="text" placeholder={'Age'} {...register('age')}/>
                    </>
                    : false
            }
            <input type="email" placeholder={'Email'} {...register('email')}/>
            <input type="password" placeholder={'Password'} {...register('password')}/>
            <div>

            </div>
            <button>{isLogin ? 'Log In' : "Sign Up"}</button>
            <Link to={isLogin ? '/register' : "/login"}>{isLogin ? "Register" : "Login"}</Link>
        </form>
    );
};

