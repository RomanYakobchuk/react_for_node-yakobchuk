import {useContext, useEffect, useState} from "react";
import {Outlet, useParams, useSearchParams} from 'react-router-dom'

import {postService} from "../../services";
import {Post} from "../../components";
import {MyContext} from "../../index";

export const PostsPage = () => {

    const [posts, setPosts] = useState(null);
    // const value = useContext(MyContext);

    const [query, setQuery] = useSearchParams({page: '1'});



    const {userId} = useParams();

    useEffect(() => {
        if(userId){
            postService.getUserByIdPosts(userId).then(({data}) => setPosts(data))
        }
        else {
            postService.getAll(query.get('page'), 10).then(({data}) => setPosts(data))
            // console.log(value);
            // value.name = "Olha"
        }
    }, [userId, query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page + 1
        // setQuery({page:page.toString()})

       const queryObject = Object.fromEntries(query.entries());
       queryObject.page++
        setQuery(queryObject)
    }

    return (
        <div style={{display: "flex"}}>
            <div>
                {posts
                    ? posts.map((post) => <Post key={post.id} post={post} flag={!userId}/>)
                    : "Loading..."
                }
                <button onClick={()=> nextPage()}>Next</button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

