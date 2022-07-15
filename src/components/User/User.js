import css from './User.module.css'


const User = ({user}) => {

    const {_id, name, age, avatar} = user;

    return (
        <div className={css.user}>
            <div className={css.img}>
                <img src={avatar} alt=""/>
            </div>
            <div>
                <div>Id: {_id}</div>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
            </div>
        </div>
    );
};

export {User};