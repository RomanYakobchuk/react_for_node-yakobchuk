import './header.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const Header = () => {
    const {currentEpisode} = useSelector(state => state.episodes);
    return (
        <div className={'header'}>
            <h1>Rick and Morty</h1>
            {
                currentEpisode && <h1> {currentEpisode}</h1>
            }
        </div>
    );
};

