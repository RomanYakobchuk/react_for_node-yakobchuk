
const User = ({user, setUser, setUserIdForPost}) => {

    const click = () => {
        setUserIdForPost(false)
        setUser(user)
    }


    return (
        <div>
            {user.name}
            <input type="button" value={'Show info'} onClick={click}/>
            <hr/>
        </div>
    );
};

export {User};