import {Routes, Route, Navigate} from 'react-router-dom';
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, MyAdminPost, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";
import {AdminLayout} from "./layouts/AdminLayout/AdminLayout";

// import css from './App.module.css'


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>} >
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
            <Route path={'/admin'} element={<AdminLayout/>}>
                <Route index element={<Navigate to={'post'}/>}/>
                <Route path={'post'} element={<MyAdminPost/>}/>
            </Route>
        </Routes>

    );
};

export default App;