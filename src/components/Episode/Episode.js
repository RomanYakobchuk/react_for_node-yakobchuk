import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux";


export const Episode = ({episode: {name, air_date, episode, characters}}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
        if (name) {
            dispatch(episodeActions.currentEpisode({episodeName: name}))
            navigate('/characters', {state: characters})
        }
    }

    return (
        <div onClick={toCharacters}>
            <h2>name: {name}</h2>
            <h3>air_date: {air_date}</h3>
            <h4>episode: {episode}</h4>
            <hr/>
        </div>
    );
};

