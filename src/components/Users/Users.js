import {useEffect, useState} from "react";
import {User} from "../User/User";
import {userService} from "../../services";

const Users = () => {

    const [users, setUsers] = useState(null);


    useEffect(() => {
        userService.getAllUsers().then(({data})=> setUsers(data.data))
    }, [])

    return (
        <div>
            {users
                ? users.map((user) => <User key={user._id} user={user}/>)
                : "Loading..."
            }
        </div>
    );
};

export {Users};