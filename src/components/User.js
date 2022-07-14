import React from 'react';

const User = ({user}) => {

    const { _id, name, email, avatar} = user;

    return (
        <div className={'User'}>
            <div>
                {_id} -- {name} - {email}
            </div>
            <div className={'userAva'}>
                <img src={avatar} alt={name}/>
            </div>
        </div>
    );
};

export default User;