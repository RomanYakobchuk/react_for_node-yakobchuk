import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user-slice";


export const User = ({user}) => {

    const {id, name} = user;

    const dispatch = useDispatch();

    return (
        <div>
            {id} -- {name}
            <button onClick={() => dispatch(userActions.deleteById({id}))}>Del</button>
        </div>
    );
};

