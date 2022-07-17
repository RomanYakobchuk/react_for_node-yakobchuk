import {Button} from "../Button/Button";

export const Post = ({post}) => {

    const {id, title} = post; //деструктиризація

    return (
        <div>
            {id} -- {title} <Button to={`${id}`} state={post}>Get details</Button>
        </div>
    );
};

