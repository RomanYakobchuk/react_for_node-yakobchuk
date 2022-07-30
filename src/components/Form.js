import {useRef} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user-slice";


export const Form = () => {

    const nameInput = useRef();
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={() => dispatch(userActions.add({user: nameInput.current.value}))}>Add</button>
        </div>
    );
};

