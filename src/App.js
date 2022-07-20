import {useReducer} from "react";


const reducer = (state, action) => {

    const {type, payload} = action;
    // console.log(type)

    switch (type) {
        case 'counter1':
            return {...state, counter1: state.counter1 + payload}
        case 'counter2':
            return {...state, counter2: state.counter2 + payload}
        case 'counter3':
            return {...state, counter3: state.counter3 + payload}

        // case 'dec1':
        //     return {...state, counter1: state.counter1-1}
        // case 'dec2':
        //     return {...state, counter2: state.counter2-1}
        // case 'dec3':
        //     return {...state, counter3: state.counter3-1}

        case 'reset':
            const key = 'counter' + payload;
            console.log(key)
            // return {...state, counter+`${payload}`: 0}


        default:
            return state
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});

    return (
        <div>
            <div>
                <div>Count #1 : {state.counter1}</div>
                <button onClick={() => dispatch({type: 'counter1', payload: 1})}>Inc</button>
                <button onClick={() => dispatch({type: 'counter1', payload: -1})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 1})}>Res</button>
            </div>
            <hr/>
            <div>
                <div>Count #2 : {state.counter2}</div>
                <button onClick={() => dispatch({type: 'counter2', payload: 1})}>Inc</button>
                <button onClick={() => dispatch({type: 'counter2', payload: -1})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 2})}>Res</button>
            </div>
            <hr/>
            <div>
                <div>Count #3 : {state.counter3}</div>
                <button onClick={() => dispatch({type: 'counter3', payload: 1})}>Inc</button>
                <button onClick={() => dispatch({type: 'counter3', payload: -1})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 3})}>Res</button>
            </div>
        </div>
    );
};

export default App;