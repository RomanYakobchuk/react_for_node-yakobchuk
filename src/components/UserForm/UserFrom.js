import {useForm} from "react-hook-form";
// import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../../services";
import css from './UserForm.module.css'
import {userValidator} from "../../validators";


export const UserFrom = ({setNewUSer, userForUpdate}) => {

    const {register, reset, handleSubmit, formState:{errors}} = useForm({resolver: joiResolver(userValidator), mode: "onTouched"}); //виконується useState, return, useEffect

    // useEffect(() => {
    //     if(userForUpdate){
    //         const {name, username, phone, email, password, age, avatar} = userForUpdate;
    //         setValue('name', name)
    //         setValue('username', username)
    //         setValue('phone', phone)
    //         setValue('password', password)
    //         setValue('email', email)
    //         setValue('age', age)
    //         setValue('avatar', avatar[0])
    //     }
    // }, [userForUpdate])

    const addUser = async (user) => {
        try {
            const formData = new FormData();

            formData.append("avatar", user.avatar[0])
            formData.append("name", user.name)
            formData.append("username", user.username)
            formData.append("age", user.age)
            formData.append("phone", user.phone)
            formData.append("email", user.email)
            formData.append("password", user.password)

            const {data} = await userService.createUser(formData, {headers: {"Content-type": "multipart/form-data"}})
            setNewUSer(data)
            reset()
        } catch (e) {
            // console.log(e.response.data);
            // setFormError(e.response.data);
        }
    }

    // console.log(formError.error)


    return (
        <form onSubmit={handleSubmit(addUser)} className={css.form}>
            <h3>Add user</h3>
            <div>
                <label>Name:
                    <input type="text" {...register('name')}/>
                </label>
            </div>
            {errors.name && <span>{errors.name.message}</span>}
            <div>
                <label>Username:
                    <input type="text" {...register('username')}/>
                </label>
            </div>
            {errors.username && <span>{errors.username.message}</span>}
            <div>
                <label>Age:
                    <input type="text" {...register('age')}/>
                </label>
            </div>
            {errors.age && <span>{errors.age.message}</span>}
            <div>
                <label>Phone:
                    <input type="text" {...register('phone')}/>
                </label>
            </div>
            {errors.phone && <span>{errors.phone.message}</span>}
            <div>
                <label>Email:
                    <input type="text" {...register('email')}/>
                </label>
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div>
                <label>Avatar:
                    <input type="file" {...register('avatar')}/>
                </label>
            </div>
            {errors.avatar && <span>{errors.avatar.message}</span>}
            <div>
                <label>Password:
                    <input type="password" {...register('password')}/>
                </label>
            </div>
            {errors.password && <span>{errors.password.message}</span>}
            <div className={css.button}>
                <button>Register</button>
            </div>
        </form>
    );
};

