


export const User = ({user: {_id, name, username, age}}) => {
    return (
        <div>
            {_id} -- {name ? name : "[no name]"} -- {username ? username : "[no username]"} -- {age ? age : "[no age]"}
        </div>
    );
};

