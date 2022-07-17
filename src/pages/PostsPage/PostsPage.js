import {useEffect, useState} from "react";
import {Outlet, useParams} from 'react-router-dom'

import {postService} from "../../services";
import {Post} from "../../components";

export const PostsPage = () => {

    const [posts, setPosts] = useState(null);

    const {userId} = useParams();

    useEffect(() => {
        if(userId){
            postService.getUserByIdPosts(userId).then(({data}) => setPosts(data))
        }
        else {
            postService.getAll().then(({data}) => setPosts(data))
        }
    }, [userId])

    return (
        <div style={{display: "flex"}}>
            <div>
                {posts
                    ? posts.map((post) => <Post key={post.id} post={post} flag={!userId}/>)
                    : "Loading..."
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

