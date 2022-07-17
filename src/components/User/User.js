import {Button} from "../Button/Button";
import css from './User.module.css'



export const User = ({user}) => {

    const {id, name} = user; //деструктиризація

    return (
        <div className={css.user}>
                <Button className={css.buttonDiv} to={`${id}`} state={user}>
                    {id}
                </Button>
            <div>
                {name}
            </div>
        </div>
    );
};

