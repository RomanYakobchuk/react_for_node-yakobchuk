import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({setUser, setUserIdForPost}) => {

    const [users, setUsers] = useState(null);


    useEffect(() => {
        usersService.getAll().then(({data})=> setUsers(data))
    }, [])

    return (
        <div>
            {users ? users.map((user) => <User key={user.id} user={user} setUser={setUser} setUserIdForPost={setUserIdForPost}/>) : "Loading..."}
        </div>
    );
};

export {Users};