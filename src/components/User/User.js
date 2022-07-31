import css from './User.module.css'
import {userService} from "../../services";


const User = ({user, setUserForUpdate}) => {

    const {_id, username, name, age, avatar} = user;

    const deleteUser = async () => {
        await userService.deleteUserById(_id)
    }

    // const updateUser = async () => {
    //     await userService.updateUserById(_id)
    // }

    return (
        <div className={css.allDiv}>
            <div className={css.user}>
                <div className={css.img}>
                    <img src={avatar} alt=""/>
                </div>
                <div>
                    <div>Name: {name}</div>
                    <div>Username: {username}</div>
                    <div>Age: {age}</div>
                </div>
            </div>
            <button onClick={() => deleteUser()}>Видалити</button>
            <button onClick={() => setUserForUpdate(user)}>Оновити дані</button>
        </div>
    );
};

export {User};