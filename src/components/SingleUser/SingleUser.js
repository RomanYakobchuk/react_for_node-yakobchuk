import React from 'react';
import css from "./SingleUser.module.css";

export const SingleUser = ({user, getPostId}) => {
    let { id, name, username, email } = user;

    return (
        <div className={css.user}>
            <div>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

