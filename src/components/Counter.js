import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";

import { counterActions} from "../redux/slices/counter-slice";

export const Counter = () => {
    const {count1, count2} = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const resetInput = useRef();
    return (
        <div>
            <div>
                <h1>Count1: {count1}</h1>
                <button onClick={() => dispatch(counterActions.incCount1())}>Inc</button>
                <button onClick={() => dispatch(counterActions.decCount1())}>Dec</button>
                <button onClick={() => dispatch(counterActions.reset1())}>Reset</button>
            </div>
            <div>
                <h1>Count2: {count2}</h1>
                <button onClick={() => dispatch(counterActions.incCount2())}>Inc</button>
                <button onClick={() => dispatch(counterActions.decCount2())}>Dec</button>
                <input type="text" ref={resetInput}/>
                <button onClick={() => dispatch(counterActions.reset2(+resetInput.current.value))}>Reset</button>
            </div>
        </div>
    );
};

