import React from 'react';

import css from './User.module.css'

export const User = ({user, getUserId, getUser}) => {

    const {id, name, username } = user;


    return (
        <div className={css.user}>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <button className={css.button} onClick={() => {
                getUserId(id)
                getUser(user)
            }}>Info</button>
        </div>
    );
};
