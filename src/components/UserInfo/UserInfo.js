
const UserInfo = ({user, setUserIdForPost}) => {

    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <input type="button" value={'Shop posts'} onClick={() => setUserIdForPost(user.id)}/>
        </div>
    );
};

export {UserInfo};