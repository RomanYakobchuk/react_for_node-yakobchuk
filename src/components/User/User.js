import React from 'react';

export const User = ({user}) => {

    const {name, username, email } = user

    return (
        <div>
            <span>{name}</span>
            <span>{username}</span>
            <span>{email}</span>
            <hr/>
        </div>
    );
};
