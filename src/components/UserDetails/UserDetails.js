import {Button} from "../Button/Button";

export const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website} = user

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <Button to={'posts'} >get Posts</Button>
            <hr/>
        </div>
    );
};

