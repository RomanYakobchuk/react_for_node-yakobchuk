import React, {useState} from 'react';
import css from './App.module.css'
import {UserFrom, Users} from "./components";


const App = () => {

    const [newUser, setNewUSer] = useState(null);

    const [userForUpdate, setUserForUpdate] = useState(null);

    return (
        <div>
            <div className={css.divFrom}>
                <UserFrom setNewUSer={setNewUSer} userForUpdate={userForUpdate}/>
            </div>
            <hr/>
            <Users newUser={newUser} setUserForUpdate={setUserForUpdate}/>
        </div>

    );
};

export default App;