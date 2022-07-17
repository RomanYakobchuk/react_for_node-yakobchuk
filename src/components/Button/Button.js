import css from './Button.module.css'
import {Link} from "react-router-dom";

export const Button = ({to, state, children, ...arg}) => {
    return (
        <Link to={to} state={state} replace>
            <button className={css.button} {...arg}>
                {children}
            </button>
        </Link>
    );
};

