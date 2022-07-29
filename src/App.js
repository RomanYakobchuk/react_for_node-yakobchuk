import {useRef} from "react";
import {ADD, useCatReducer} from "./reducers";

const App = () => {

    const catRef = useRef();

    const [state, dispatch] = useCatReducer();

    const addCat = () => {
        const newCat = catRef.current.value;
        dispatch({type: ADD, payload: {cat: newCat}})
    }

    return (
        <div>
            <div>
                <input type="text" ref={catRef} placeholder={'cat name'}/>
                <button onClick={() => addCat()}>Add</button>
            </div>
            <hr/>
            <div>
                {state.map(cat=> <div key={cat.id}>{cat.name}</div>)}
            </div>
        </div>
    );
}

export default App;
