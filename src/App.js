import {Routes, Route, Navigate} from 'react-router-dom';
import {MainLayout} from "./layouts";
import {
    AboutPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    PostsPage,
    SinglePostPage,
    SingleUserPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./hoc";

// import css from './App.module.css'


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={':userId'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    );
};

export default App;