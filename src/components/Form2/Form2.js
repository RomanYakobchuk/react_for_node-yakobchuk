import {useState} from "react";

const Form2 = () => {

    const [user, setUser] = useState({});

    const getUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div>
                <label>Name: </label>
                <input type="text" name={'name'} onChange={getUser}/>
            </div>
            <div>
                <label>Age: </label>
                <input type="number" name={'age'} onChange={getUser}/>
            </div>
            {JSON.stringify(user)}
        </div>
    );
};

export {Form2};