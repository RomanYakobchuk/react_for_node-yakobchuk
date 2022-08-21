import {useNavigate} from "react-router-dom";


export const Episode = ({episode: {name, air_date, episode, characters}}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/characters', {state: characters})}>
            <h2>name: {name}</h2>
            <h3>air_date: {air_date}</h3>
            <h4>episode: {episode}</h4>
            <hr/>
        </div>
    );
};

