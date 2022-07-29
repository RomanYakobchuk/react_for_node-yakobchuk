import {ADD} from "./actions";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const cat = action.payload.cat;
            console.log(cat)
            return [...state, cat]
    }
}

const useCatReducer = () => useReducer(reducer, []);

export {
    useCatReducer
}