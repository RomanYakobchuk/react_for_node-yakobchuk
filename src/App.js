import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage, UserPage} from "./pages";
import {RequireAuth} from "./hoc";
import {useDispatch} from "react-redux";
import {authActions} from "./redux";

function App() {
    const dispatch = useDispatch();
    const access_token = localStorage.getItem('access_token');
    if(access_token){
        dispatch(authActions.setAuth())
    }

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UserPage/>
                    </RequireAuth>
                }/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
