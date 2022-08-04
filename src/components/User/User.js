import {Button} from "../Button/Button";
import css from './User.module.css'



export const User = ({user}) => {

    const {_id, username, avatar} = user; //деструктиризація

    return (
        <div className={css.user}>
                <Button className={css.buttonDiv} to={`${_id}`} state={user}>
                    <img src={avatar} style={{display: "flex", justifyContent: "center", height: "100%"}} alt=""/>
                </Button>
            <div>
                {username}
            </div>
        </div>
    );
};

