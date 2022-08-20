export const User = ({user: {name, username, age}}) => {
    return (
        <div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>age: {age}</div>
            <hr/>
        </div>
    );
};

