import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {Loading, UserDetails} from "../../components";

export const SingleUserPage = () => {
    const {state} = useLocation();

    const [user, setUser] = useState(state);

    const {userId} = useParams();

    useEffect(() => {
        if(!state){
            userService.getUserById(userId).then(({data}) => setUser(data))
        }
        else {
            setUser(state)
        }
    }, [userId, state])

    return (
        <div>
            <div>
                {user ? <UserDetails user={user}/>
                :<Loading/> }
            </div>
            <Outlet/>
        </div>
    );
};

