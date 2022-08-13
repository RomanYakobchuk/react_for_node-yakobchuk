import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {userService} from "../../services";


export const UserForm = () => {

    const {formErrors} = useSelector(state => state.users);
    //
    const {reset, register, handleSubmit} = useForm();
    //
    const dispatch = useDispatch()

    const submit = async (newUser) => {
        try {
            const formData = new FormData();

            formData.append("avatar", newUser.avatar[0])
            formData.append("name", newUser.name)
            formData.append("username", newUser.username)
            formData.append("age", newUser.age)
            // formData.append("phone", newUser.phone)
            formData.append("email", newUser.email)
            formData.append("password", newUser.password)

            await dispatch(userActions.createAsync({user: formData})).then((data) => {
                if (data.payload.formErrors.error) {
                    // state.status =

                    // console.log(formErrors)
                } else {

                    reset()
                }
            })
            // const {data} = await userService.createUser(formData, {headers: {"Content-type": "multipart/form-data"}})
            // setNewUSer(data)
        } catch (e) {
            // console.log(e.response.data);
            // setFormError(e.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Name: <input type="text" {...register('name')}/></label></div>
            {/*{formErrors.name && <span>{formErrors.name}</span>}*/}
            <div><label>Username: <input type="text" {...register('username')}/></label></div>
            {/*{formErrors.username && formErrors.username}*/}
            <div><label>Email: <input type="email" {...register('email')}/></label></div>
            {/*{formErrors.email && formErrors.email}*/}
            {formErrors && <div style={{
                color: "red",
                // border: "1px solid black",
                // padding: '5px',
                margin: '5px',
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center"
            }}>{formErrors.error}</div>}
            <div><label>Age: <input type="number" {...register('age')}/></label></div>
            {/*{formErrors.age && formErrors.age}*/}
            {/*<div><label>Phone: <input type="text" {...register('phone')}/></label></div>*/}
            <div><label>Profile picture: <input type="file" {...register('avatar')}/></label></div>
            {/*{formErrors.avatar && formErrors.avatar}*/}
            <div><label>Password: <input type="password" {...register('password')}/></label></div>
            {/*{formErrors && <div style={{color: "red"}}>{formErrors}</div>}*/}
            <button type={'submit'}>Save</button>
        </form>
    );
};

