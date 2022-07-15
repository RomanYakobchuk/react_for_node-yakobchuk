import React, {useState} from 'react';
import css from './App.module.css'
import {Posts, UserInfo, Users} from "./components";


const App = () => {

    const [user, setUser] = useState(null);
    const [userIdForPost, setUserIdForPost] = useState(null);

    return (
        <div>
            <div>
                <Users setUser={setUser} setUserIdForPost={setUserIdForPost}/>
                {user && <UserInfo user={user} key={user.id} setUserIdForPost={setUserIdForPost}/>}

            </div>
            {userIdForPost && <Posts userId={userIdForPost}/>}
        </div>
    );
};

export default App;