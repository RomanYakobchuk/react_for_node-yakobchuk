import {useAuth} from "../../hooks";
import {useLocation} from "react-router-dom";
import {useRef} from "react";

export const LoginPage = () => {

    const {logIn} = useAuth();
    const {state} = useLocation();
    const name = useRef();
    console.log(state);

    const login = () => {
        const userName = name.current.value;
        // logIn(userName, () =>)
    }

    return (
        <div>
            <input type="text" ref={name} placeholder={'name'}/>
            <button>LogIn</button>
        </div>
    );
};

