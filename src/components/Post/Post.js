import {Button} from "../Button/Button";

export const Post = ({post, flag}) => {

    const {id, title} = post; //деструктиризація

    return (
        <div>
            {id} -- {title}
            {
                flag && <Button to={`${id}`} state={post}>Get details</Button>
            }
        </div>
    );
};

