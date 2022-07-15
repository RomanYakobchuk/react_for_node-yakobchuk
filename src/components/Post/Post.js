
const Post = ({post}) => {
    return (
        <div>
            <hr/>
            <div>UserId: {post.userId}</div>
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
            <hr/>
        </div>
    );
};

export {Post};