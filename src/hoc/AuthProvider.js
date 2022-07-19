import {createContext, useState} from 'react'

export const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const logIn = (newUser, cb) => {
        setUser(newUser)
        cb()
    }

    const logOut = (cb) => {
        setUser(null)
        cb()
    }
    const values = {user, logIn, logOut}

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};


