import {NavLink, Outlet} from "react-router-dom";


export const MainLayout = () => {
    return (
        <div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            <br/>
                <NavLink to={'/home'}>Home</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

