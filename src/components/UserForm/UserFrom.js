import {useForm} from "react-hook-form";
import {userService} from "../../services";

export const UserFrom = ({setNewUSer}) => {

    const { register, reset, handleSubmit } = useForm();

    const addUser = async (user) => {
        const {data} = await userService.createUser(user)
        setNewUSer(data)
    }

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <div><label>Name: <input type="text" {...register('name')}/></label></div>
            <div><label>Age: <input type="text" {...register('age', {valueAsNumber: true})}/></label></div>
            <div><label>Phone: <input type="text" {...register('phone')}/></label></div>
            <div><label>Email: <input type="text" {...register('email')}/></label></div>
            {/*<div><label>Avatar: <input type="file" {...register('avatar')} ref={this.fileInput}/></label></div>*/}
            <div><label>Password: <input type="password" {...register('password')}/></label></div>
            {/*<div><label>Repeat password: <input type="text" {...register('repeat_password')}/></label></div>*/}
            <button>Register</button>
        </form>
    );
};

