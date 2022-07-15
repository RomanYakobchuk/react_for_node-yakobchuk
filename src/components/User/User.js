
const User = ({user}) => {

    const {_id, name, age, avatar} = user;

    return (
        <div>
            <div>Id: {_id}</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <img className={'img'} src={avatar} alt=""/>
        </div>
    );
};

export {User};