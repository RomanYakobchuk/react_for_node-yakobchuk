import {useForm} from "react-hook-form";

export const UserFrom = () => {

    const { register, reset, handleSubmit } = useForm();

    const addUser = (user) => {
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <div><label>Name: <input type="text" {...register('name')}/></label></div>
            <div><label>Age: <input type="text" {...register('age', {valueAsNumber: true})}/></label></div>
            <div><label>Phone: <input type="text" {...register('phone')}/></label></div>
            <div><label>Email: <input type="text" {...register('email')}/></label></div>
            <div><label>Email: <input type="file" {...register('avatar')}/></label></div>
            <div><label>Password: <input type="text" {...register('password')}/></label></div>
            <div><label>Repeat password: <input type="text" {...register('repeat_password')}/></label></div>
            <button>Register</button>
        </form>
    );
};

