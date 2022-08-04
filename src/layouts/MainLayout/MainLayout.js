import {Outlet, NavLink, useNavigate} from 'react-router-dom'

import css from './MainLayout.module.css'
import {useAuth} from "../../hooks";

export const MainLayout = () => {

    const navigate = useNavigate();
    const {user, logOut} = useAuth();


    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                {/*<NavLink to="/posts?page=1">Posts</NavLink>*/}
                {/*<NavLink to="/about">About</NavLink>*/}
                {user && <h1>{user} <button onClick={() => logOut(() => navigate('/'))}>LogOut</button> </h1>}
            </div>
            <hr/>
            <div>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>
            </div>

            <Outlet/>
        </div>
    );
};

