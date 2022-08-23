import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "../Character/Character";


export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state} = useLocation();
    useEffect(() => {
        characterService.getByCharacterList(state).then(({data})=>setCharacters(data))
    }, [state])
    return (
        <div>
            {
                characters && characters.map((character) => <Character key={character.id} character={character}/>)
            }
        </div>
    );
};

