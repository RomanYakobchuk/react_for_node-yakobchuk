import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);
    //За допомого setUsers (це функція) можна перезаписати users і передати далі
    //Воно виконується циклічно, і для того щоб перезаписалося тільки 1 раз, використовують useEffect

    useEffect(() => {
        fetch('https://heroku-yakobchuk-develop.herokuapp.com/users')
            .then(value => value.json())
            .then(value =>
                {
                    // console.log(value)
                    setUsers(value.data)
                }
            )

    }, [])


    return (
        <div className={'allUsers'}>
            {
                users.map(user =>
                    <User
                        key={user._id}
                        user={user}
                    />
            )}
        </div>
    );
};

export default Users;