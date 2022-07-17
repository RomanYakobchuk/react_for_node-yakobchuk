import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import css from './UsersPage.module.css'
import {Loading, User} from "../../components";

export const UsersPage = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.allUsers}>
            <div className={css.users}>
                {users
                    ? users.map((user) => <User key={user.id} user={user}/>)
                    : <Loading/>
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

