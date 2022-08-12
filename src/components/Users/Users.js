import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {useEffect} from "react";
import {userActions} from "../../redux";


export const Users = () => {
    const {users, status} = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {status && <h1>{status}</h1>}
            {
                users.map(user => <User key={user._id} user={user}/>)
            }
        </div>
    );
};

