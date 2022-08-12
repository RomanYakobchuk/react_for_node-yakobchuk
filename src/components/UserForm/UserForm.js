import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";


export const UserForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const dispatch = useDispatch()

    const submit = async (newUser) => {
        await dispatch(userActions.create({user: newUser}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Name: <input type="text" {...register('name')}/></label></div>
            <div><label>Username: <input type="text" {...register('username')}/></label></div>
            <div><label>Email: <input type="email" {...register('email')}/></label></div>
            <div><label>Age: <input type="number" {...register('age')}/></label></div>
            <div><label>Phone: <input type="text" {...register('phone')}/></label></div>
            <div><label>Profile picture: <input type="file" {...register('avatar')}/></label></div>
            <div><label>Password: <input type="text" {...register('password')}/></label></div>
            <button type={'submit'}>Save</button>
        </form>
    );
};

