import React, {useState} from 'react';
// import css from './App.module.css'
import {UserFrom, Users} from "./components";


const App = () => {

    const [newUser, setNewUSer] = useState(null);

    return (
        <div>
            <UserFrom setNewUSer={setNewUSer}/>
            <hr/>
            <Users newUser={newUser}/>
        </div>

    );
};

export default App;