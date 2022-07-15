import React from 'react';
import css from "./SingleUser.module.css";

export const SingleUser = ({user}) => {
    let { _id, name, email, avatar } = user;

    return (
        <div className={css.user}>
            <div>
                <p>ID: {_id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <div className={css.img}>
                    <img src={avatar} alt=""/>
                </div>
            </div>
        </div>
    );
};

