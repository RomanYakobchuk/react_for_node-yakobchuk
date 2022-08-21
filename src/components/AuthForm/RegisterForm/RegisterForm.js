import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import '../authForm.css';
import {userValidatorForRegister} from "../../../validators";
import {userService} from "../../../services";
import {authActions} from "../../../redux";

export const RegisterForm = () => {

    // const [isLogin, setIsLogin] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: joiResolver(userValidatorForRegister), mode: "onTouched"});

    const [error, setError] = useState(null);

    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    // }, [pathname])
    const submit = async (user) => {
        try {
            await dispatch(authActions.register({user}))
            // await userService.register(user);
            // console.log(error)
            // navigate('/login');
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'authForm'}>
            <input type="text" placeholder={'Name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'Username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'Age'} {...register('age')}/>
            {errors.age && <span>{errors.age.message}</span>}

            <input type="email" placeholder={'Email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="password" placeholder={'Password'} {...register('password')}/>
            {errors.password && <span>{errors.password.message}</span>}
            <div>
                {
                    // loginError && <span style={{color: "red"}}>Wrong email or password</span>
                }
            </div>
            <button>Sign Up</button>
            <Link to={"/login"}>Login</Link>
        </form>
    );
};

