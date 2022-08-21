import {Link, Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MainLayout} from "./layouts";
import {HomePage, LoginPage, RegisterPage, Search, UserPage} from "./pages";
import {RequireAuth} from "./hoc";
import {authActions} from "./redux";

function App() {
    const dispatch = useDispatch();
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        dispatch(authActions.setAuth())
    }

    const {isAuth} = useSelector(state => state.auth);

    // console.log(isAuth)
    return (
        <Routes>
            <Route path={'/'} element={
                <RequireAuth>
                    <MainLayout/>
                </RequireAuth>
            }>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'search'} element={<Search/>}/>
            </Route>
            <Route path={'/login'} element={isAuth ? <Navigate to={'/users'}/> : <LoginPage/>}/>
            <Route path={'/register'} element={isAuth ? <Navigate to={'/users'}/> : <RegisterPage/>}/>
        </Routes>
    );
}

export default App;
