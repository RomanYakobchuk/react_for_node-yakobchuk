import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../User/User";

export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data.data))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user._id} user={user}/>)
            }
        </div>
    );
};

