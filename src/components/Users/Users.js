import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services";
import css from './Users.module.css'

const Users = ({newUser}) => {

    const [users, setUsers] = useState(null);


    useEffect(() => {
        userService.getAllUsers().then(({data})=> setUsers(data.data))
    }, [])

    useEffect(() => {
        if(newUser){
            setUsers([...users, newUser])
        }
    }, [newUser])

    return (
        <div className={css.users}>
            {users
                ? users.map((user) => <User key={user._id} user={user}/>)
                : "Loading..."
            }
        </div>
    );
};

export {Users};