import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import '../authForm.css';
import './loginForm.css';
import {authActions} from "../../../redux";
import {userValidatorForLogin} from "../../../validators";
import {userService} from "../../../services";

export const LoginForm = () => {


    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: joiResolver(userValidatorForLogin),
        mode: "onTouched"
    });

    const {loginError} = useSelector(state1 => state1.auth);

    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    // }, [pathname])
    const submit = async (user) => {

        try {
            await dispatch(authActions.login({user}))
            // reset(false)
            if (!loginError) {
                navigate('/');
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'authForm'}>
            <input type="email" placeholder={'Email'} {...register('email')}/>
            {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
            <input type="password" placeholder={'Password'} {...register('password')}/>
            {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
            <div>
                {
                    loginError && <span style={{color: "red"}}>Wrong email or password</span>
                }
            </div>
            <button>Log In</button>
            <Link to={'/register'}>Register</Link>
        </form>
    );
};

